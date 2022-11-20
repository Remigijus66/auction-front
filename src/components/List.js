import React, { useContext, useEffect, useState, useRef } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { checksesssion, get, post, timeDistance } from "../plugins/http";
import io from "socket.io-client"
import AuctionCard from './AuctionCard';

const socket = io.connect('http://localhost:4001');


const List = () => {
  const nav = useNavigate()


  const { auctions, setAuctions, setShowAuction, setId } = useContext(MainContext)

  useEffect(() => {
    downloadActualAuctions()


    socket.on('updateList', (data) => {
      console.log(data)
      setAuctions(data)
    })


  }, [])



  // useEffect(() => {

  //   setTimeout(() => {
  //     const auctionsCopy = [...auctions]
  //     setAuctions(auctionsCopy)
  //     tick ? setTick(false) : setTick(true)
  //     clearTimeout();
  //   }, 1000)
  // }, [tick]);


  const downloadActualAuctions = async () => {
    const res = await get('downloadActual')
    console.log(res)
    setAuctions(res.data)
    console.log(auctions)

  }



  //  const show = async (id) => {

  //     const logged = await checksesssion()
  //     if (logged) {
  //       setShowAuction(true)
  //       setId(id)
  //       console.log(id)
  //     }

  //   }





  return (
    <div  >
      <h2>Auctions list</h2>
      {/* <button onClick={downloadActualAuctions}>auctions</button> */}
      <div className='d-flex f-wrap '>
        {auctions.map((x, i) => <div key={i} > <AuctionCard auction={x} />
          {/* <div className='auction-card d-flex f-wrap f-column a-center ' style={{ cursor: 'pointer' }} onClick={() => {
            show(x._id)

          }}>
           
            <div className='image-container' style={{ backgroundImage: `url("${x.image}")` }}></div>
            <h5> {x.title} </h5>
            <h5>Provider: {x.name}</h5>
            <h5>Time left: {timeDistance(x.time, Date.parse(new Date))}</h5>
            <h5>Last price € {x.bids[x.bids.length - 1].price}</h5>
            <h5>Bids placed {x.bids.length}</h5>

          </div> */}
        </div>)}
      </div>







    </div>
  );
};

export default List;