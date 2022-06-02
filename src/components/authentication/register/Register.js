import React, { useState, useEffect } from "react";

import useInput from "../../hooks/useInput";

import InputUI from "../../UI/InputUi/InputUI";
import Notification from "../../UI/InputUi/Notification";

import classes from "./Register.module.css";

function Register(props) {
  const {
    value: username,
    hasError: usernameHasError,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputLoseFocusHandler: usernameLoseFocusHandler,
    reset: resetUsernameInput,
  } = useInput((value) => value.trim().length > 5);

  const {
    value: password,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputLoseFocusHandler: passwordLoseFocusHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 6);

  const {
    value: rePassword,
    hasError: rePasswordHasError,
    isValid: rePasswordIsValid,
    valueChangeHandler: rePasswordChangeHandler,
    inputLoseFocusHandler: rePasswordLoseFocusHandler,
    reset: resetRePasswordInput,
  } = useInput((value) => value === password);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {

    if (formSubmitted) {

      let users = {...props.users};

      let isHere = false;
      for (let key in users) {
        if (users[key].username === username) {
          setMessage("Account already exists");
          isHere = true;
          break;
        }
      }

      if (!isHere) {
        const lastKey = Object.keys(users).pop();
        let lastUserID = users[lastKey].id;
        const newUser = {
          id: ++lastUserID,
          username,
          password,
        };
        console.log(newUser);
        const addUser = async (newUser) => {
          const response = await fetch(
            "https://adjaranet-suggested-movies-default-rtdb.firebaseio.com/users.json",
            {
              method: "POST",
              body: JSON.stringify(newUser),
            }
          );

          const someResponseData = await response.json();

          console.log("Some Response Data: ", someResponseData);
        };
        addUser(newUser);
      }
    }
  }, [formSubmitted]);

  const formIsValid = usernameIsValid && passwordIsValid && rePasswordIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <form className={classes.wrapper} onSubmit={submitHandler}>
      <div className={classes.input_wrapper}>
        <label>Username</label>
        <InputUI
          type="text"
          isRequired={true}
          onBlur={usernameLoseFocusHandler}
          onChange={usernameChangeHandler}
        />
        {usernameHasError && (
          <div className={classes.error_message}>
            <Notification
              message="Username must contain more than 5 characters"
              isError={true}
            />
          </div>
        )}
      </div>
      <div className={classes.input_wrapper}>
        <label>Password</label>
        <InputUI
          type="password"
          isRequired={true}
          onChange={passwordChangeHandler}
          onBlur={passwordLoseFocusHandler}
        />
        {passwordHasError && (
          <div className={classes.error_message}>
            <Notification
              message="Password must contain more than 6 characters"
              isError={true}
            />
          </div>
        )}
      </div>
      <div className={classes.input_wrapper}>
        <label>Re-password</label>
        <InputUI
          type="password"
          isRequired={true}
          onChange={rePasswordChangeHandler}
          onBlur={rePasswordLoseFocusHandler}
        />
        {rePasswordHasError && (
          <div className={classes.error_message}>
            <Notification message="Passwords didn't match" isError={true} />
          </div>
        )}
      </div>
      <p className={classes.user_message}>{message}</p>
      <div className={classes.btn_wrapper}>
        <button type="submit" disabled={!formIsValid}>
          Register
        </button>
      </div>
    </form>
  );
}

export default Register;
