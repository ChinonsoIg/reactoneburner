import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
    width: "400px",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Menu menuProps6="New Customer?" />
      <Container>
        <Box>
          <h2>Sign In</h2>
          <p>Welcome Back!</p>
          <form className={classes.form} noValidate autoComplete="off"
            style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-evenly",
              alignItems:"center",
              height:"40vmin",
              width:"100%"
            }}
            >
            <TextField id="outlined-basic" label="Email/Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button className={classes.button}>Log In</Button>
          </form>
          
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            height="30vmin"
            width="100%"
          >
            <p>Forgot Password?</p>
            <div>
              Or sign in with: Email Linkein Google
            </div>
            <p>&copy; 2020 Oneburner.com. All Rights Reserved.</p>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Login;
