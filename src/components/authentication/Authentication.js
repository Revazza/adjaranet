import React, { useEffect, useState } from 'react';

import classes from './Authentication.module.css';
import Login from './login/Login';
import Register from './register/Register';
import useFetch from '../hooks/useFetch';

function Authentication() {

  const [users,setUsers] = useState(undefined);
  const { responseData } = useFetch(
    "https://adjaranet-suggested-movies-default-rtdb.firebaseio.com/users.json"
  );

  useEffect( () =>{

    if(responseData!== null && users === undefined)
    {
      setUsers(responseData);
      console.log("responseData: ",responseData);
    }

  },[responseData]);

  return (
    <div className={classes.login_register}>
        <div className={classes.logo}>
            <img src='./assets/logo.png' />
        </div>
        {/* <Register users={users} /> */}
        <Login />
    </div>
  )
}

export default Authentication;
