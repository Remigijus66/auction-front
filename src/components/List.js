import React, { useContext, useEffect, useState, useRef } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { get, post, timeDistance } from "../plugins/http";


const List = () => {
  const nav = useNavigate()
  const [tick, setTick] = useState(false)

  const { auctions, setAuctions, setShowAuction, setId } = useContext(MainContext)

  useEffect(() => {
    downloadActualAuctions()

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



  const show = (id) => {
    setShowAuction(true)
    setId(id)
    console.log(id)
  }





  return (
    <div  >
      <h2>Auctions list</h2>
      {/* <button onClick={downloadActualAuctions}>auctions</button> */}
      <div className='d-flex f-wrap '>
        {auctions.map((x, i) => <div key={i} >
          <div className='auction-card d-flex f-wrap f-column a-center ' style={{ cursor: 'pointer' }} onClick={() => {
            show(x._id)

          }}>
            {/* <img className='grow1 m10' src={`${image}`} alt="" /> */}
            <div className='image-container' style={{ backgroundImage: `url("${x.image}")` }}></div>
            <h5> {x.title} </h5>
            <h5>Provider: {x.name}</h5>
            <h5>Time left: {timeDistance(x.time, Date.parse(new Date))}</h5>
            <h5>Current price € {x.bids[x.bids.length - 1].price}</h5>
            <h5>Bids placed {x.bids.length}</h5>

          </div>
        </div>)}
      </div>







    </div>
  );
};

export default List;