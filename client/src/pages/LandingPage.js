import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LandingPage = (props) => {
    const navigate = useNavigate();

    const playClick = async () => {
        try {
            const id = props.curUserID;
            const newLvl = 1;
            const res = await axios.post('https://puzzle-game-backend.onrender.com/api/v1/user/update-level', {
                _id : id,
                newLevel : newLvl,
                index : 0,
                timeTaken : 0,
                tries : 0
            })
            if(res.data.success){
                alert(res.data.msg);
                props.onRender();
            }
            else{
                alert('Something Went Wrong');
                navigate('/login');
            }
        } catch (error) {
            console.log('error');
            navigate('/login');
        }
    }

  return (
    <div className="outer-box">
        <div className='landing-page-inner-box'>
            <p className='landingpagetext'> Welcome To The Treasure Hunt</p>
            <button id='landingpagebtn' onClick={playClick}> PLAY NOW </button>
        </div>
    </div>
  )
}
