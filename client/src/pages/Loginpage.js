import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Loginpage.css";

const LoginPage = () => {
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
        "http://localhost:8080/api/v1/user/login",
        inputs
      );
      if (res.data.success) {
        console.log(res.data);
        localStorage.setItem("userID", res.data._id);
        alert(res.data.msg);
        navigate("/");
      } else {
        alert(res.data.msg);
      }
    } catch (error) {
      alert(error);
    }
  };

  const validToken = async () => {
    const res = await axios.post(
      "http://localhost:8080/api/v1/user/getUserData",
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

  const goToSignUp = () => {
    console.log('Hello')
    navigate("/register");
  }
  
  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Login Here</h1>
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
          {/* <Link to="/register">Register Here</Link> */}
          <button id="loginbtn"> Login </button>
        </form>
        <button id="signupbtn" onClick={goToSignUp}>
            Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
