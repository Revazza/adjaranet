import React, { useState, useRef } from "react";

import InputUI from "../../UI/InputUi/InputUI";
//short for register classes
import regClasses from "../register/Register.module.css";

function Login(props) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameLoseFocusHandler = () => {
    setUsername(usernameRef.current.value);
  };

  const passwordLoseFocusHandler = () => {
    setPassword(passwordRef.current.value);
  };

  const submitHandler = (event) =>{
    event.preventDefault();
  }

  return (
    <form className={regClasses.wrapper}>
      <div className={regClasses.input_wrapper}>
        <label>Username</label>
        <InputUI
          ref={usernameRef}
          type="text"
          isRequired={true}
          onBlur={usernameLoseFocusHandler}
        />
      </div>
      <div className={regClasses.input_wrapper}>
        <label>Password</label>
        <InputUI
          ref={passwordRef}
          type="password"
          isRequired={true}
          onBlur={passwordLoseFocusHandler}
        />
      </div>
      <p className={regClasses.user_message}>nothing</p>
      <div className={regClasses.btn_wrapper}>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}

export default Login;
