import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Menu from "../components/Menu";

const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
  button: {
    backgroundColor: "purple",
    color: "white",
    borderRadius: "40px",
    padding: "1rem",
    fontSize: "18px",
    width: "300px",
  },
}));

const Login = ({ menuProps6 }) => {
  const classes = useStyles();

  return (
    <>
      <Menu menuProps6="New Customer?" />
      <h2>Sign In</h2>
      <p>Welcome Back!</p>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Email/Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </form>

        <Button className={classes.button}>Log In</Button>
      
      <p>Forgot Password?</p>
      
      <div>
        Or sign in with: Email Linkein Google
      </div>
      <p>&copy; Oneburner.com. All Rights Reserved.</p>
    </>
  );
}

export default Login;
