import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DataTable, { createTheme } from "react-data-table-component";

export const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = React.useState({});
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
            alert("invalid token");
            navigate('/login');
        }
    } catch (error) {
        alert('Login Session Expired');
        navigate('/login');
    }
}

React.useEffect(() => {
  if(!localStorage.getItem('userID')){
      alert("login session expired");
      navigate('/login');
  }
  else{
      getUser();
  }
}, []);

  function getTotal(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  function getCnt(arr){
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] > 0){
        cnt++;
      }
    }
    return cnt;
  }
  
  /*
    cntArr
    0 => noOfPuzzleSolved
    1 => totalTries
    2 => totalTime
  */
  
  const sortUsers = (newUsers) => {
    if(newUsers){
      var adminIndex = -1;
      for(let i = 0; i < newUsers.length; i++){
        if(newUsers[i].email == "admin123@gmail.com"){
          adminIndex = i;
          break;
        }
      }
      newUsers.splice(adminIndex, 1);
      for (let i = 0; i < newUsers.length; i++) {
        newUsers[i]["cntArr"] = [getCnt(newUsers[i].tries), getTotal(newUsers[i].tries), getTotal(newUsers[i].timeTaken)];
      }
      newUsers.sort(function(user1, user2){
        var user1Time = user1.cntArr[2];
        var user1Tries = user1.cntArr[1];
        var user1Cnt = user1.cntArr[0];
        var user2Time = user2.cntArr[2];
        var user2Tries = user2.cntArr[1];
        var user2Cnt = user2.cntArr[0];
        if(user1Cnt !== user2Cnt){
          return (user2Cnt - user1Cnt);
        }
        if(user1Time !== user2Time){
          return (user1Time - user2Time);
        }
        return (user1Tries - user2Tries);
      })
      setUsers(newUsers);
    }
  }
  

  const getData = async () => {
    const res = await axios.post("https://puzzle-game-backend.onrender.com/api/v1/user/getAllUsers");
    sortUsers(res.data.users);
  }

  useEffect(() => {
    getData();
  }, [])

  const logout=() => {
    localStorage.removeItem('userID');
    navigate("/login");
  };

  function formatTime(arr){
    var newArr = [];
    for(let i = 0; i < arr.length; i++){
      var min = Math.floor(arr[i] / 60);
      var sec = arr[i] % 60;
      newArr.push(`${min}:${sec}`);
    }
    return newArr.join(' ');
  }

  createTheme('solarized', {
    text: {
      primary: '#dce3d8',
      secondary: '#2aa198',
    },
    background: {
      default: '#090a0896',
    },
    context: {
      background: '#1f3910b8',
      text: '#dce3d8',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

  const columns = [
    {
      name: 'Name',
      selector: row => row.userName,
      sortable : true
    },
    {
      name: 'NoOfSolved',
      selector: row => row.cntArr[0],
      sortable : true
    },
    {
      name: 'TotalTime',
      selector: row => `${Math.floor(row.cntArr[2] / 60)} : ${row.cntArr[2] % 60}`
    },
    {
      name: 'NoOfTries',
      selector: row => row.cntArr[1]
    },
    {
      name: 'Question-Try',
      selector: row => row.tries.join(' ')
    },
    {
      name: 'Question-Time',
      selector: row => (formatTime(row.timeTaken))
    }
  ]

  console.log(users)

  return (
    <>
      <header className="header">
        <p> {user && user.userName} </p>
        <p> {user && user.email} </p>
        <button id="logoutbtn" onClick={logout}> Logout </button>
        {/* <Timer /> */}
      </header>
      <div className='leaderboardBox'>
        <DataTable
          title="LeaderBoard"
          columns={columns}
          data={users} 
          theme='solarized'
        />
      </div>
    </>
  )
}
