import './App.css';
import io from "socket.io-client"
import { useEffect, useRef, useState } from "react";
import MainContext from "./context/MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from './pages/ChatPage';
import RoomsPage from './pages/RoomsPage';
import LoginPage from './pages/LoginPage';

const socket = io.connect('http://localhost:4001');


function App() {
    const [username, setUsername] = useState('')

    const [counter, setCounter] = useState(0)
    const [selectedRoom, setSelectedRoom] = useState('')
    const [log, setLog] = useState([])
    const [entered, setEntered] = useState('')



    const states = {
        counter, setCounter,
        username, setUsername,
        selectedRoom, setSelectedRoom,
        log, setLog,
        entered, setEntered
    }

    // const testTheRoom = () => {

    //     socket.emit('roomTest', 'testString')


    // }

    useEffect(() => {

        socket.on("newUser", (data) => {
            console.log(data)
        })
        socket.on("event", (data) => {
            console.log(data)
        })
        // socket.on("roomTestServerReply", (data) => {
        //     console.log(data)
        // })



    }, [])



    // useEffect(() => {
    //     socket.on('color', (data) => {
    //         setBackground(data)
    //     })
    // })

    // useEffect(() => {
    //     // console.log(counter)
    //     socket.on('countOthers', (data) =>
    //         setCounter(counter + data))
    // })

    // useEffect(() => {
    //     // console.log(counter)
    //     socket.on('countMe', (data) =>
    //         setCounter(counter + data))
    // })

    // useEffect(() => {
    //     // console.log(counter)
    //     socket.on('countAll', (data) =>
    //         setCounter(counter + data))
    // })


    // const send = () => {
    //     socket.emit("something", "labas cia mano zinute")
    // }
    // const sendColor = () => {
    //     socket.emit('color', selectColor.current.value)
    // }
    // const countMeDbl = () => {
    //     socket.emit('countMe', 2)
    // }
    // const countMe = () => {
    //     socket.emit('countMe', 1)
    // }
    // const countOthers = () => {
    //     socket.emit('countOthers', 1)
    // }
    // const countAll = () => {
    //     socket.emit('countAll', 1)
    // }

    return (
        <div className="p50">
            {/* <div className='container d-flex j-center a-center' style={{ backgroundColor: background }}>


                <button onClick={send}>Send msg</button>
                <input type="color" ref={selectColor} />
                <button onClick={sendColor}>Send color</button>

            </div>
            <div className=' box d-flex j-center a-center' > {counter} </div>
            <button onClick={countMeDbl}> Count myself double</button>
            <button onClick={countMe}> Count myself</button>
            <button onClick={countOthers}> Count others but me</button>
            <button onClick={countAll}>Count all</button> */}

            <MainContext.Provider value={states}>


                <BrowserRouter>

                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/rooms" element={<RoomsPage />} />


                    </Routes>

                </BrowserRouter>


            </MainContext.Provider>

        </div>
    );
}

export default App;
