import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import "./Homepage.css";
import { LandingPage } from "./LandingPage";
import { Puzzle1, Puzzle2, Puzzle3, Puzzle4, Puzzle5, Puzzle6 } from "./Puzzle";
import { FinalPage } from "./FinalPage";

const HomePage = () => {
    const [user, setUser] = React.useState({});
    const [render, setRender] = React.useState(false);
    const handleRender = () => {
        setRender(!render);
    }
    const navigate = useNavigate();

    const getUser = async() => {
        try {
            const res = await axios.post('https://puzzle-game-backend.onrender.com/api/v1/user/getUserData', {
                _id : localStorage.getItem('userID')
            })
            if(res.data.success){
                setUser(res.data.user);
            }
            else{
                // alert("invalid token");
                navigate('/login');
            }
        } catch (error) {
            // alert('Login Session Expired');
            navigate('/login');
        }
    }

    React.useEffect(() => {
        if(!localStorage.getItem('userID')){
            // alert("login session expired");
            navigate('/login');
        }
        else{
            getUser();
        }
    }, [render]);

    const logout=() => {
        localStorage.removeItem('userID');
        navigate("/login");
    };

    return (
        <>
        <header className="header">
            <p> {user && user.userName} </p>
            <p> {user && user.email} </p>
            <button id="logoutbtn" onClick={logout}> Logout </button>
            {/* <Timer /> */}
        </header>
        {user.lastSolved == 0 && <LandingPage curUserID = {user._id} onRender = {handleRender}/> }
        {user.lastSolved == 1 && <Puzzle1 curUserID = {user._id} onRender = {handleRender}/> }
        {user.lastSolved == 2 && <Puzzle2 curUserID = {user._id} onRender = {handleRender}/> }
        {user.lastSolved == 3 && <Puzzle3 curUserID = {user._id} onRender = {handleRender}/> }
        {user.lastSolved == 4 && <Puzzle4 curUserID = {user._id} onRender = {handleRender}/> }
        {user.lastSolved == 5 && <Puzzle5 curUserID = {user._id} onRender = {handleRender}/> }
        {user.lastSolved == 6 && <Puzzle6 curUserID = {user._id} onRender = {handleRender}/> }
        {user.lastSolved == 7 && <FinalPage curUserEmail = {user.email} onRender = {handleRender}/> }
        </>
    )
}

export default HomePage;