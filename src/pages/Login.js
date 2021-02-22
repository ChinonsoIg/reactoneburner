import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// My Components
import Menu from "../components/Menu";

// Images
import ms_outlook from '../svgs/constants/ms_outlook.svg';
import linkedin from '../svgs/constants/linkedin.svg';
import google from '../svgs/constants/google.svg';

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
    width: "40%",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Menu 
        menuProps1={null} 
        menuProps1Icon={null} 
        menuProps2={null}
        menuProps3={null}
        menuProps4={null}
        menuProps5={null}
        menuProps6="New Customer?"
       />
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
            <Button className={classes.button}>
              <Link to="/demo"  style={{color:"white", textDecoration:"none"}}>Log In</Link>
            </Button>
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
            <Box 
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              height="10vmin"
              width="30%"
              >
              Or sign in with: 
              <img src={ms_outlook} style={{width:"6%", margin:"3px"}} />
              <img src={linkedin} style={{width:"6%", margin:"3px"}} />
              <img src={google} style={{width:"6%", margin:"3px"}} />
            </Box>
            <p>&copy; 2020 Oneburner.com. All Rights Reserved.</p>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Login;
