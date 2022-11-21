import React, { useContext, useEffect } from 'react';
import MainContext from "../context/MainContext";
import { get } from "../plugins/http";
import io from "socket.io-client"
import AuctionCard from './AuctionCard';

const socket = io.connect('http://localhost:4001');


const List = () => {

  const { auctions, setAuctions, } = useContext(MainContext)

  useEffect(() => {
    downloadActualAuctions()


    socket.on('updateList', (data) => {
      console.log(data)
      setAuctions(data)
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