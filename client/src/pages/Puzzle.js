import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Puzzle1 = (props) => {
  const navigate = useNavigate();
  const { curUserID, onRender } = props;
  
  const [ans, setAns] = React.useState("");
  const [tries, setTries] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const handleChange = (event) => {
    const value = event.target.value;
    setAns(value);
  };

  const playClick = async () => {
    try {
      const id = curUserID;
      const newLvl = 2;
      const res = await axios.post(
        "https://puzzle-game-backend.onrender.com/api/v1/user/update-level",
        {
          _id: id,
          newLevel: newLvl,
          index : 0,
          timeTaken : (minutes * 60) + seconds,
          tries : tries + 1
        }
      );
      if (res.data.success) {
        alert(res.data.msg);
        onRender();
      } else {
        alert("Something Went Wrong");
        navigate("/login");
      }
    } catch (error) {
      console.log("error");
      navigate("/login");
    }
  };
  

  const validate = async () => {
    const originalAns = "Ydrr";
    setTries(tries + 1);
    if (ans == originalAns) {
      await playClick();
    } else {
      alert("Wrong Ans :( Try Again");
    }
  };


  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds == 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="outer-box">
      <div className="countContainer">
        <div>Tries : {tries}</div>
        <div> {minutes} : {seconds} </div>
      </div>
      <div className="heading">Puzzle 1</div>
      <div className="treasure-body">
        <p>You are given a text. Find the flag into it.</p>
        <p>Vou have fount the tpeasuae</p>
      </div>
      <div className="treasure-hint">
        <p>Hint: What can you do with a ball?</p>
      </div>
      <div>
        Your Answer :
        <input
          type="text"
          name="ans"
          value={ans || ""}
          onChange={handleChange}
        />
      </div>
      <button onClick={validate}>Submit</button>
    </div>
  );
};

const Puzzle2 = (props) => {
  const navigate = useNavigate();
  const { curUserID, onRender } = props;
  
  const [ans, setAns] = React.useState("");
  const [tries, setTries] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleChange = (event) => {
    const value = event.target.value;
    setAns(value);
  };

  const playClick = async () => {
    try {
      const id = curUserID;
      const newLvl = 3;
      const res = await axios.post(
        "https://puzzle-game-backend.onrender.com/api/v1/user/update-level",
        {
          _id: id,
          newLevel: newLvl,
          index : 1,
          timeTaken : (minutes * 60) + seconds,
          tries : tries + 1
        }
      );
      if (res.data.success) {
        alert(res.data.msg);
        onRender();
      } else {
        alert("Something Went Wrong");
        navigate("/login");
      }
    } catch (error) {
      console.log("error");
      navigate("/login");
    }
  };


  const validate = async () => {
    const originalAns = "Answer";
    setTries(tries + 1);
    if (ans == originalAns) {
      await playClick();
    } else {
      alert("Wrong Ans :( Try Again");
    }
  };


  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds == 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="outer-box">
      <div className="countContainer">
        <div>Tries : {tries}</div>
        <div> {minutes} : {seconds} </div>
      </div>
      <div className="heading">Puzzle 2</div>
      <div className="treasure-body">
        <p>
          Ram is a big Indian, who is really fond of number 16. One day he give
          you a strange number consisting of 0's and 1's. Can you find the
          treasure?{" "}
        </p>
        <p>
          00000000 01011001 00000000 01101111 00000000 01110101 00000000
          01110010 00000000 00100000 00000000 01100001 00000000 01101110
          00000000 01110011 00000000 01110111 00000000 01100101 00000000
          01110010 00000000 00100000 00000000 01101001 00000000 01110011
          00000000 00111010 00000000 00100000 00000000 01000001 00000000
          01101110 00000000 01110011 00000000 01110111 00000000 01100101
          00000000 01110010
        </p>
      </div>
      <div className="treasure-hint">
        <p>Hint: Is he really Big Indian?</p>
      </div>
      <div>
        Your Answer :
        <input
          type="text"
          name="ans"
          value={ans || ""}
          onChange={handleChange}
        />
      </div>
      <button onClick={validate}>Submit</button>
    </div>
  );
};

const Puzzle3 = (props) => {
  const navigate = useNavigate();
  const { curUserID, onRender } = props;

  const [ans, setAns] = React.useState("");
  const [tries, setTries] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleChange = (event) => {
    const value = event.target.value;
    setAns(value);
  };

  const playClick = async () => {
    try {
      const id = curUserID;
      const newLvl = 4;
      const res = await axios.post(
        "https://puzzle-game-backend.onrender.com/api/v1/user/update-level",
        {
          _id: id,
          newLevel: newLvl,
          index : 2,
          timeTaken : (minutes * 60) + seconds,
          tries : tries + 1
        }
      );
      if (res.data.success) {
        alert(res.data.msg);
        onRender();
      } else {
        alert("Something Went Wrong");
        navigate("/login");
      }
    } catch (error) {
      console.log("error");
      navigate("/login");
    }
  };
  

  const validate = async () => {
    const originalAns = "India";
    setTries(tries + 1);
    if (ans == originalAns) {
      await playClick();
    } else {
      alert("Wrong Ans :( Try Again");
    }
  };


  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds == 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="outer-box">
      <div className="countContainer">
        <div>Tries : {tries}</div>
        <div> {minutes} : {seconds} </div>
      </div>
      <div className="heading">Puzzle 3</div>
      <div className="treasure-body">
        <p>
          Six friends Adam, Steve, Charlie, Issac, Iago and you goes to a magic
          show. The magician got impressed by all of you and gives you a puzzle.
          Can you all solve it?{" "}
        </p>
        <Link id="links" target="_blank" to="https://admirable-tulumba-e6eb95.netlify.app/">
          Click on this link
        </Link>
      </div>
      <div className="treasure-hint">
        <p>
          Hint: 78 111 32 110 101 101 100 32 116 111 32 99 108 105 99 107 32 116
          104 101 32 108 105 110 107 46 32 89 111 117 114 32 97 110 115 119 101
          114 32 105 115 32 58 32 73 110 100 105 97
        </p>
      </div>
      <div>
        Your Answer :
        <input
          type="text"
          name="ans"
          value={ans || ""}
          onChange={handleChange}
        />
      </div>
      <button onClick={validate}>Submit</button>
    </div>
  );
};

const Puzzle4 = (props) => {
  const navigate = useNavigate();
  const { curUserID, onRender } = props;
  
  const [ans, setAns] = React.useState("");
  const [tries, setTries] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleChange = (event) => {
    const value = event.target.value;
    setAns(value);
  };

  const playClick = async () => {
    try {
      const id = curUserID;
      const newLvl = 5;
      const res = await axios.post(
        "https://puzzle-game-backend.onrender.com/api/v1/user/update-level",
        {
          _id: id,
          newLevel: newLvl,
          index : 3,
          timeTaken : (minutes * 60) + seconds,
          tries : tries + 1
        }
      );
      if (res.data.success) {
        alert(res.data.msg);
        onRender();
      } else {
        alert("Something Went Wrong");
        navigate("/login");
      }
    } catch (error) {
      console.log("error");
      navigate("/login");
    }
  };


  const validate = async () => {
    const originalAns = "NIKE";
    const formattedAns = ans.toUpperCase();
    setTries(tries + 1);
    if (formattedAns == originalAns) {
      await playClick();
    } else {
      alert("Wrong Ans :( Try Again");
    }
  };


  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds == 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="outer-box">
      <div className="countContainer">
        <div>Tries : {tries}</div>
        <div> {minutes} : {seconds} </div>
      </div>
      <div className="heading">Puzzle 4</div>
      <div className="treasure-body">
        <p>Solve the puzzle</p>
        <p>Just Do It</p>
      </div>
      <div className="treasure-hint">
        <p>Hint: You always want this in your answer sheet</p>
      </div>
      <div>
        Your Answer :
        <input
          type="text"
          name="ans"
          value={ans || ""}
          onChange={handleChange}
        />
      </div>
      <button onClick={validate}>Submit</button>
    </div>
  );
};

const Puzzle5 = (props) => {
  const navigate = useNavigate();
  const { curUserID, onRender } = props;
  
  const [ans, setAns] = React.useState("");
  const [tries, setTries] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleChange = (event) => {
    const value = event.target.value;
    setAns(value);
  };

  const playClick = async () => {
    try {
      const id = curUserID;
      const newLvl = 6;
      const res = await axios.post(
        "https://puzzle-game-backend.onrender.com/api/v1/user/update-level",
        {
          _id: id,
          newLevel: newLvl,
          index : 4,
          timeTaken : (minutes * 60) + seconds,
          tries : tries + 1
        }
      );
      if (res.data.success) {
        alert(res.data.msg);
        onRender();
      } else {
        alert("Something Went Wrong");
        navigate("/login");
      }
    } catch (error) {
      console.log("error");
      navigate("/login");
    }
  };
  

  const validate = async () => {
    const originalAns = "Summer";
    setTries(tries + 1);
    if (ans == originalAns) {
      await playClick();
    } else {
      alert("Wrong Ans :( Try Again");
    }
  };


  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds == 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="outer-box">
      <div className="countContainer">
        <div>Tries : {tries}</div>
        <div> {minutes} : {seconds} </div>
      </div>
      <div className="heading">Puzzle 5</div>
      <div className="treasure-body">
        <p>Another Puzzle</p>
        <p>0 1 1 2 3 5 8 13 21 ....</p>
      </div>
      <div className="treasure-hint">
        <p>
          Hint: Hint is not available for this puzzle. You need to show your ID
          card to me
        </p>
      </div>
      <div>
        Your Answer :
        <input
          id="The answer is : Summer"
          type="text"
          name="ans"
          value={ans || ""}
          onChange={handleChange}
        />
      </div>
      <button onClick={validate}>Submit</button>
    </div>
  );
};

const Puzzle6 = (props) => {
  const navigate = useNavigate();
  const { curUserID, onRender } = props;
  
  const [ans, setAns] = React.useState("");
  const [tries, setTries] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  
  const handleChange = (event) => {
    const value = event.target.value;
    setAns(value);
  };

  const playClick = async () => {
    try {
      const id = curUserID;
      const newLvl = 7;
      const res = await axios.post(
        "https://puzzle-game-backend.onrender.com/api/v1/user/update-level",
        {
          _id: id,
          newLevel: newLvl,
          index : 5,
          timeTaken : (minutes * 60) + seconds,
          tries : tries + 1
        }
      );
      if (res.data.success) {
        alert(res.data.msg);
        onRender();
      } else {
        alert("Something Went Wrong");
        navigate("/login");
      }
    } catch (error) {
      console.log("error");
      navigate("/login");
    }
  };
  

  const validate = async () => {
    const originalAns = "WellDone";
    setTries(tries + 1);
    if (ans == originalAns) {
      await playClick();
    } else {
      alert("Wrong Ans :( Try Again");
    }
  };


  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds == 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="outer-box">
      <div className="countContainer">
        <div>Tries : {tries}</div>
        <div> {minutes} : {seconds} </div>
      </div>
      <div className="heading">Puzzle 6</div>
      <div className="treasure-body">
        <p>You are almost at the end. Just find the last puzzle</p>
        <p>
          439 571 557 137 521 607 641 659 557 631 137 577 641 137 277 137 457
          557 599 599 347 613 607 557
        </p>
      </div>
      <div className="treasure-hint">
        <p>
          Hint: Can you become a prime contestent and mark your name in the
          grand leaderboard?
        </p>
      </div>
      <div>
        Your Answer :
        <input
          type="text"
          name="ans"
          value={ans || ""}
          onChange={handleChange}
        />
      </div>
      <button onClick={validate}>Submit</button>
    </div>
  );
};

export { Puzzle1, Puzzle2, Puzzle3, Puzzle4, Puzzle5, Puzzle6 };
