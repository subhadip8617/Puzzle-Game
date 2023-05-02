import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Loginpage.css";


const RegisterPage = () => {
  const [inputs, setInputs] = React.useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await axios.post(
        "https://puzzle-game-backend.onrender.com/api/v1/user/register",
        inputs
      );
      if (res.data.success) {
        alert("Registered Successfully");
        navigate("/login");
      } else {
        alert(res.data.msg);
      }
    } catch (error) {
      alert(error);
    }
  };

  const validToken = async () => {
    const res = await axios.post(
      "https://puzzle-game-backend.onrender.com/api/v1/user/getUserData",
      {
        _id: localStorage.getItem("userID"),
      }
    );
    if (res.data.success) {
      alert(`Hello ${res.data.user.userName}, your token is still valid`);
      navigate("/");
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("userID")) {
      validToken();
    }
  }, []);

  const goToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Register Here</h1>
          Enter Your Name:
          <input
            type="text"
            name="userName"
            value={inputs.userName || ""}
            onChange={handleChange}
          />
          Enter Your Email:
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          Enter Your password:
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          {/* <input type="submit" /> */}
          <button> Submit </button>
        </form>
        {/* <Link to="/login">Already Registered Login Here</Link> */}
        <button id="loginbtn" onClick={goToLogin} >LogIn</button>
      </div>
    </div>
  );
};

export default RegisterPage;
