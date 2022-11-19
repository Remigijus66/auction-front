import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from "../context/MainContext";
import { post } from "../plugins/http";

const Nav = () => {
  const { sessionUser, setSessionUser } = useContext(MainContext)
  const nav = useNavigate()

  const logout = async () => {
    const data = { name: sessionUser }
    const res = await post('logout', data)
    if (res.message === 'session terminated') setSessionUser('')
    nav('/')
  }

  return (
    <div className='navline' >

      <button onClick={() => nav('/list')}>Auctions list</button>
      <button onClick={() => nav('/upload')} >Upload new auction </button>
      <button onClick={() => nav('/')}>Login </button>
      <button onClick={() => nav('/auction')}>to singleAuction </button>
      <button>{sessionUser}</button>
      <button onClick={logout}>Logout </button>
    </div >
  );
};

export default Nav;
