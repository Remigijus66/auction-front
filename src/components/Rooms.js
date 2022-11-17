import React, { useContext, useEffect, useState, useRef } from 'react';
import io from "socket.io-client"
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";

const socket = io.connect('http://localhost:4001');


const Rooms = () => {
  const { selectedRoom, setSelectedRoom } = useContext(MainContext)
  const nav = useNavigate()



  return (
    <div  >
      <div className='messagebox' style={(selectedRoom === 'pirmas') ? { backgroundColor: 'lightcyan' } : {}}>
        <h2>Room1</h2>

        <button onClick={() => setSelectedRoom('pirmas')}>Select</button>
      </div>
      <div className='messagebox' style={(selectedRoom === 'antras') ? { backgroundColor: 'lightcyan' } : {}}>
        <h2>Room2</h2>

        <button onClick={() => setSelectedRoom('antras')}>Select</button>
      </div>
      <div className='messagebox' style={(selectedRoom === 'trecias') ? { backgroundColor: 'lightcyan' } : {}}>
        <h2>Room3</h2>

        <button onClick={() => setSelectedRoom('trecias')}>Select</button>
      </div>
      <button onClick={() => nav('/chat')} >Join the room</button>

    </div >
  );
};

export default Rooms;