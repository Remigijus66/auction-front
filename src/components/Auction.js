
import React, { useContext, useEffect, useState, useRef } from 'react';

import MainContext from "../context/MainContext";
import { post, timeDistance } from '../plugins/http';
// import MainContext from "../context/MainContext";
// import { useNavigate } from "react-router-dom";
// import { get, post, timeDistance } from "../plugins/http";


const Auction = () => {
  const { setShowAuction, id, singleAuction, setSingleAuction } = useContext(MainContext)

  useEffect(() => {
    downloadSingle()

  }, [])

  const downloadSingle = async () => {
    const data = { id: id }
    const res = await post('downloadSingle', data)
    console.log(res)
    setSingleAuction(res.data)
    console.log(singleAuction)

  }


  return (
    <div className="auction-container d-flex j-center a-center" >
      <div className='auction '>
        <div className="closeBtn d-flex space-btw">
          <div></div>
          <div style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }} onClick={() => setShowAuction(false)}>X</div>
        </div>
        <div className='d-flex s-evenly'>
          <div className='auction-card d-flex f-wrap f-column a-center'>
            <div className='image-container' style={{ backgroundImage: `url("${singleAuction.image}")` }}></div>
            <h5> {singleAuction.title} </h5>
            <h5>Provider: {singleAuction.name}</h5>
            <h5>Time left: {timeDistance(singleAuction.time, Date.parse(new Date))}</h5>
            <h5>Current price € {singleAuction.bids[singleAuction.bids.length - 1].price}</h5>
            <h5>Bids placed {singleAuction.bids.length}</h5>
          </div>
          <div className='auction-card'></div>
        </div>
        <button onClick={downloadSingle} >Get {id}</button>

      </div>

    </div>
  );
};

export default Auction;

