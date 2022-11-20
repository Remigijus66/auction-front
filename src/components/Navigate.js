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
    <div className='navline d-flex a-center' >
      <div className='grow1'>

        <button onClick={() => nav('/list')}>Open Auctions list</button>
        <button onClick={() => nav('/upload')} >Upload new auction </button>
        {/* <button onClick={() => nav('/')}>Login </button> */}
      </div>
      {/* <button onClick={() => nav('/auction')}>to singleAuction </button> */}
      <div className='d-flex f-wrap a-center' >

        <h4>{sessionUser}</h4>
        <button onClick={logout}>Logout </button>
      </div>
    </div >
  );
};

export default Nav;
