import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Menu from "../components/Menu";
import Footer from "../components/Footer";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  form: {
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: '25ch',
    // },
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: "50%",
    border: "2px solid red",
    padding: "5px",
    height: "fit-content",
    padding: "10px"
  },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: '50ch',
  // },
  button: {
    backgroundColor: "purple",
    color: "white",
    borderRadius: "40px",
    padding: "1rem",
    fontSize: "18px",
    width: "90%",
    paddingTop: "20px",
    marginBottom: "20px",
  },
}));

const Register = () => {
  const classes = useStyles();

  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <Menu 
        menuProps1="Products" 
        menuProps1Icon={<ExpandMoreIcon/>} 
        menuProps2="Pricing"
        menuProps3="Enterprise"
        menuProps4="Support"
        menuProps5="Contact Sales"
        menuProps6="Login"
      />
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="space-between"
          minHeight="fit-content"
          width="100%"
          >
          <div className={classes.root}>
            <Paper style={{width:"100%", height:"fit-content"}}>
            <form className={classes.form} noValidate autoComplete="off"
              style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",
                alignItems:"center",
                // height:"fit-content",
                width:"90%",
                border:"2px solid red",
                margin:"auto"
              }}
              >
              <Box style={{width:"100%"}}>
                <TextField 
                  label="Last Name" 
                  variant="outlined" 
                  style={{ margin:"1%", marginTop:"10%",width:"48%"}} />

                <TextField 
                  label="First Name" 
                  variant="outlined" 
                  style={{margin:"1%", marginTop:"10%", width:"48%"}} />
              </Box>

              <TextField 
                label="Work Email" 
                style={{ margin:"2%", marginTop:"10%", width:"98%" }} 
                variant="outlined" />

              <TextField 
                label="Phone Number" 
                style={{ margin:"2%", marginTop:"10%", width:"98%" }} 
                variant="outlined" />

              <TextField 
                label="Product of Interest" 
                style={{ margin:"2%", marginTop:"10%", width:"98%" }} 
                variant="outlined" />

              <Box style={{width:"100%"}}>
                <TextField 
                  label="Company Name" 
                  variant="outlined" 
                  style={{ margin:"1%", marginTop:"10%",width:"48%"}} />

                <TextField 
                  label="Company Size" 
                  variant="outlined" 
                  style={{margin:"1%", marginTop:"10%", width:"48%"}} />
              </Box>

              <TextField 
                label="How can our experts help you?" 
                style={{ margin:"2%",marginTop:"10%", width:"98%" }}
                multiline
                rows={4}
                variant="outlined" />

              <Button className={classes.button}>
                Contact Us
              </Button>
            </form>
          </Paper>
          </div>
            
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            // height="30vmin"
            width="50%"
            padding="5px"
          >
            <Box>
              <h4>Request a call from an expert</h4>
              <p>
                Having thoughts on which product works best for you? Fill the form and our expert will reach out to you.
              </p>
              <h5>Our offices around Africa</h5>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-evenly"
              alignItems="space-evenly"
              height="30vmin"
              width="100%"
              textAlign="left"
            >
              <div style={{padding:"5px"}}>
                <h6>TUNISIA</h6>
                <p>33a, Adeola Odeku,</p>
                <p>Victoria Island, Lagos</p>
                <p>+234-(0)-8000000000</p>
              </div>
              <div style={{padding:"5px"}}>
                <h6>GHANA</h6>
                <p>45, El-Senoussi Street,</p>
                <p>Accra</p>
                <p>+233-(0)-277619819</p>
              </div>
              <div style={{padding:"5px"}}>
                <h6>SOUTH AFRICA</h6>
                <p>474 Cheritan Drive,</p>
                <p>Port Shepstone, Kwazulu Natal</p>
                <p>+27-(0)-857926978</p>
              </div>
              <div style={{padding:"5px"}}>
                <h6>EGYPT</h6>
                <p>72, Gameat El-Dewal,</p>
                <p>El-Arabia St., Giza</p>
                <p>+20-(0)-35924295</p>
              </div>
              <div style={{padding:"5px"}}>
                <h6>KENYA</h6>
                <p>41, Enterprise Rd., Industrial,</p>
                <p>Area, Nairobi</p>
                <p>+254-(0)-20536766</p>
              </div>
              <div style={{padding:"5px"}}>
                <h6>TUNISIA</h6>
                <p>13, Rue de Makthar, Dhraa,</p>
                <p>Governorate Kasserin</p>
                <p>+216-(0)-77367410</p>
              </div>
              <div style={{padding:"5px"}}>
                <h6>MALI</h6>
                <p>22, Badalabougou Est,</p>
                <p>Lome</p>
                <p>+228-(0)-22229600</p>
              </div>
              <div style={{padding:"5px"}}>
                <h6>TANZANIA</h6>
                <p>Mbezi Beach, P.O.Box: 70339,</p>
                <p>Bamako</p>
                <p>+223-(0)-78175387</p>
              </div>
              <div style={{padding:"5px"}}>
                <h6>TOGO</h6>
                <p>10, E rue des Echis,</p>
                <p>Lome</p>
                <p>+228-(0)-22229600</p>
              </div>
            </Box>


          </Box>
          
        </Box>

        <Footer />

      </Container>
      
    </div>
  );
}

export default Register;

// root: {
//   display: 'flex',
//   flexWrap: 'wrap',
// },
// textField: {
//   marginLeft: theme.spacing(1),
//   marginRight: theme.spacing(1),
//   width: '25ch',
// },
