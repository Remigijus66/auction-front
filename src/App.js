import './App.css';
import io from "socket.io-client"
import { useEffect, useRef, useState } from "react";
import MainContext from "./context/MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ChatPage from './pages/ChatPage';
// import RoomsPage from './pages/RoomsPage';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import ListPage from './pages/ListPage';
import AuctionPage from './pages/AuctionPage';
import WelcomePage from './pages/WecomePage';
import Nav from './components/Navigate';

const socket = io.connect('http://localhost:4001');


function App() {
    const [username, setUsername] = useState('')
    const [sessionUser, setSessionUser] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [time, setTime] = useState(null)
    const [price, setPrice] = useState(null)
    const [auctions, setAuctions] = useState([])
    const [showAuction, setShowAuction] = useState(false)
    const [id, setId] = useState('')
    const [singleAuction, setSingleAuction] = useState({})




    const states = {
        sessionUser, setSessionUser,
        image, setImage,
        title, setTitle,
        time, setTime,
        price, setPrice,
        auctions, setAuctions,
        showAuction, setShowAuction,
        id, setId,
        singleAuction, setSingleAuction
    }



    useEffect(() => {

        socket.on("newUser", (data) => {
            console.log(data)
        })
        socket.on("event", (data) => {
            console.log(data)
        })


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


            <MainContext.Provider value={states}>


                <BrowserRouter>

                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/welcome" element={<WelcomePage />} />
                        <Route path="/upload" element={<UploadPage />} />
                        <Route path="/list" element={<ListPage />} />
                        <Route path="/auction" element={<AuctionPage />} />

                    </Routes>

                </BrowserRouter>


            </MainContext.Provider>

        </div>
    );
}

export default App;
