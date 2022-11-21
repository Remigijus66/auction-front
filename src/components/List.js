import React, { useContext, useEffect } from 'react';
import MainContext from "../context/MainContext";
import { get } from "../plugins/http";
import AuctionCard from './AuctionCard';
import io from "socket.io-client"

const socket = io.connect('http://localhost:4001');


const List = () => {

  const { auctions, setAuctions, } = useContext(MainContext)

  useEffect(() => {
    downloadActualAuctions()

    socket.on('upload', () => {
      console.log('upload occured')
      downloadActualAuctions()
    })

    socket.on('updateList', () => {
      console.log('bid occured')
      downloadActualAuctions()
    })


  }, [])


  const downloadActualAuctions = async () => {
    const res = await get('downloadActual')
    console.log(res)
    setAuctions(res.data)
    console.log(auctions)
  }


  return (
    <div  >
      <h2>Auctions list</h2>
      <div className='d-flex f-wrap '>
        {auctions.map((x, i) => <div key={i} > <AuctionCard auction={x} />
        </div>)}
      </div>
    </div>
  );
};

export default List;