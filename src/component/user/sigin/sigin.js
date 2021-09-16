/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./sigin.css";
const SignIn = (props) => {
  const [errormessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    if (username === " ") {
      setErrorMessage("نام کاربری نباید خالی باشد");
      return false;
    } else if (!username.includes("@") || !username.includes(".")) {
      setErrorMessage("ایمیل به درستی وارد نشده است");
      return false;
    } else if (password === " ") {
      setErrorMessage("پسورد نباید خالی باشد");
      return false;
    } else if (password.length < 1) {
      setErrorMessage("پسورد نباید کمتر از 5 کارکتر باشد");
      return false;
    }
    setErrorMessage(" ");
    return true;
  };
  const loginHandler = () => {
    setErrorMessage("");
    const validateResult = validate();
    if (validateResult) {
      fetch("http://192.168.1.51/student/user_login.php", {
        method: "POST",
        headers: {
          Accept: "applicaion/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson === "Data Matched") {
            alert(responseJson);
          } else {
            setErrorMessage(responseJson);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setErrorMessage("یه جمع سادست بخدا!!");
      return false;
    }
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <React.Fragment>
      <div className="sigin">
        <p style={{ color: "red" }}>{errormessage}</p>
        <input type="text" placeholder="username" value={username} onChange={usernameHandler} />
        <input type="password" placeholder="password" value={password} onChange={passwordHandler} />
        <button btnType="success" clicked={loginHandler}>
          ورود
        </button>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
