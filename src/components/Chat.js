// import React, { useContext, useEffect, useState, useRef } from 'react';
// import io from "socket.io-client"
// import MainContext from "../context/MainContext";
// import { useNavigate } from "react-router-dom";

// const socket = io.connect('http://localhost:4001');


// const Chat = () => {
//   const nav = useNavigate()
//   const { selectedRoom, username, setUsername, log, setLog, entered, setEntered } = useContext(MainContext)




//   useEffect(() => {
//     const roomData = {
//       roomName: selectedRoom,
//       user: username
//     }
//     // console.log(roomData)
//     // socket.emit('subscribe', roomData)
//     socket.emit('joinRoom', roomData)
//   }, [])

//   useEffect(() => {

//     // socket.on('user joined', (data) => {
//     //   console.log(data)
//     //   setLog(data)
//     //   console.log(log)

//     // })

//     socket.on("newUser", (data) => {
//       setEntered(data)
//       console.log(data)
//     })

//     socket.on("newchatmsg", (data) => {
//       console.log(data)
//       setLog(data)
//       console.log(log)

//     })

//   }, [])



//   const message = useRef()


//   const sendMessage = () => {

//     const msg = { name: username, message: message.current.value, time: new Date, roomName: selectedRoom }
//     console.log(msg)
//     socket.emit('chatMessage', msg)
//     message.current.value = ''
//   }
//   const leaveTheRoom = () => {
//     const roomData = {
//       roomName: selectedRoom,
//       user: username
//     }
//     socket.emit('leaveTheRoom', roomData)
//     setUsername('')
//     nav('/')
//   }

//   return (
//     <div  >

//       <div>
//         <h2>Room {selectedRoom} Chat</h2>

//         <div className='chatbox'>
//           {log.map((x, i) => <div key={i} className="d-flex f-wrap" ><h6>{x.name} :</h6> {x.message} <h6>{x.time}</h6></div>)}

//         </div>
//         <div className='messagebox'>
//           <h6>{entered}</h6>
//           <h5>{username}</h5>
//           <input type="text" ref={message} />
//           <button onClick={sendMessage} placeholder={'Enter message'}>Send </button>
//           <button onClick={leaveTheRoom}> Logout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;