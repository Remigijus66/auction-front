import React, { useContext, useEffect, useState, useRef } from 'react';
import io from "socket.io-client"
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";

const socket = io.connect('http://localhost:4001');


const Login = () => {
  const nav = useNavigate()


  const { setUsername } = useContext(MainContext)


  const user = useRef()


  const registerUser = () => {
    setUsername(user.current.value)
    console.log('navigating')
    nav("/rooms")
  }


  return (
    <div  >
      <div className='userbox'> <input type="text" ref={user} placeholder={'Enter username'} />
        <button onClick={registerUser}>Login </button></div>


    </div>
  );
};

export default Login;