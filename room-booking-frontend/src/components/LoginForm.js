import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import "./Auth.css";
import Loader from "../display/Loader";
import Error from "../display/Error";
import axios from "axios";
const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  async function login() {
    const user = {
      email,
      password,
    };
    try {
      setloading(true);
      const result = await axios.post("/api/users/login", user);
      setloading(false);

      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/homepage";
    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(true);
    }
  }
  return (
    <div>
      {loading && <Loader />}

      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {error && <Error message="Invalid Credentionals" />}
          <div className="bs">
            <h1>Login</h1>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></input>
            <button className="btn btn-primary" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
