import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faAward } from "@fortawesome/free-solid-svg-icons";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

// Components
import Menu from "../components/Menu";
import Footer from "../components/Footer";

// Images
import section_one_landing from '../svgs/landing-page/section_one_landing.svg';
import africa from '../svgs/landing-page/africa.svg';
import ceo from '../svgs/landing-page/ceo.svg';
import companies from '../svgs/constants/companies.svg';
import fav_tools from '../svgs/constants/fav_tools.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  sectionOneLanding: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  sectionThreeLanding: {
    backgroundColor: "white",
    // height: "100vmin",
  },
  sectionFourLanding: {
    // height: "100vh",
  },
  sectionFiveLanding: {
    height: "50vh",
  },
  sectionSixLanding: {
    height: "50vh",
    backgroundColor: "lightgray",
    padding: theme.spacing(5),
  },
  button: {
    backgroundColor: "#0039a6",
    color: "white",
    borderRadius: "40px",
    padding: "2%",
    fontSize: "2.5vw",
    width: "40%",
    height: "10%"
    // alignSelf: "center",
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Menu 
          menuProps1="Products" 
          menuProps1Icon={<ExpandMoreIcon/>} 
          menuProps2="Pricing"
          menuProps3="Enterprise"
          menuProps4="Support"
          menuProps5="Contact Sales"
          menuProps6="Login"
        />
        <CssBaseline />
        <Container className={classes.sectionOneLanding}>
          <Box width="100%" height="100vmin" marginTop="40px">
            <img src={section_one_landing} style={{width:"100%"}} />
          </Box>          
        </Container>

        <Container className="sectionTwoLanding">
          <Box>
            <h3>Over 500+ companies bond teams together with Oneburner</h3>
            <img src={companies} style={{width:"100%"}} />
          </Box>
        </Container>

        <Container className={classes.sectionThreeLanding}>
          <h4
            style={{ 
              paddingTop: "20px",
              paddingBottom: "0",
              marginBottom: "0",
              height: "fit-content",
              width: "100%",
              backgroundColor: "blue",
              color: "white",
             }}>
            How Oneburner can help enterprises grow
          </h4>
          <Box
            style={{ 
              marginBottom: "10px",
              paddingTop: "0px",
              height: "120vmin",
              position: "relative",
              width: "100%" }}>
            <Box
              position="absolute"
              top={0}
              height="48%"
              color="white"
              bgcolor="blue"
              zIndex="modal">
              <Box
                display="flex"
                flexWrap="nowrap"
                p={2}
                m={2}
                justifyContent="flex-start"
                alignItems="flex-start"
                width="100%"
                >
                <div style={{textAlign:"left", width:"48%", marginRight:"1%"}}>Oneburner software solution helps your business by creating an enabling environment for easy communication and feedbacks in real time. Oneburner brings all your user and teams in a single place with 99.99% uptime SLA and Data security.
                </div>
                <div style={{textAlign:"left", width:"48%", marginLeft:"1%"}}>
                  <p style={{paddingTop:"0", marginTop:"0"}}>
                    <FontAwesomeIcon icon={faCheckCircle} />&nbsp;
                    Data protection and control
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} />&nbsp;
                    Reporting analytics
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} />&nbsp;
                    Use signgle sign-on and multi-factor authentication to secure accounts
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} />&nbsp;
                    Enterprise integration with other tools
                  </p>
                </div>
              </Box>
            </Box>
            <Box
              bgcolor="background.paper"
              color="black"
              p={1}
              position="absolute"
              top="40%"
              left="25%"
              height="20%"
              width="50%"
              borderRadius="5px"
              boxShadow={2}
              zIndex="tooltip"
              >
              <Box
                display="flex"
                flexWrap="nowrap"
                justifyContent="space-evenly"
                alignItems="center"
                width="100%"
                >
                <FontAwesomeIcon icon={faAward} size="5x" color="gold" />
                <div style={{fontSize:"2vw"}}>
                  <h6>Best Collaboration Software</h6>
                  <p>Africa tech coalition award 2020</p>
                </div>
              </Box>
                
            </Box>
            <Box
              position="absolute"
              top="62%"
              height="32%"
              width="100%"
              bgcolor="white"
              zIndex="modal"
              >
              <img src={fav_tools} style={{width:"100%"}} />
            </Box>
          </Box>

        </Container>

        <Container className={classes.sectionFourLanding}>
          <Box width="100%" height="100vmin" margin="auto">
            <img src={africa} style={{width:"100%"}} />
          </Box>
        </Container>

        <Container className={classes.sectionFiveLanding}>
          <Box
            display="flex"
            flexDirection="column"
            p={2}
            m={2}
            justifyContent="space-between"
            alignItems="center"
            height="50vmin"
            width="100%"
          >
            <p style={{marginBottom:"20px"}}>Best. Product. Ever! We like Oneburner more and more each day because it makes our work a lot easier. It's just amazing. Very easy to use, impressed us on all levels. Thank you so much for your help and is worth much more than we paid. We were treated like royalty.</p>
            <div style={{borderTop:"2px solid black", width:"100%"}}>
            <img src={ceo} alt="Image of CEO" style={{marginTop:"-60px", padding:"0 10px", width:"35%", backgroundColor:"white"}} />
            </div>
          </Box>
        </Container>
        
        <Container className={classes.sectionSixLanding}>
          <Box >
            <h4>Want to learn more on how we can impact your enterprise?</h4>
            <button className={classes.button}>
              <Link 
                to="/register"  
                style={{
                  color:"white", 
                  textDecoration:"none", 
                  display:"flex",
                  flexDirection:"row",
                  flexWrap:"nowrap",
                  justifyContent:"space-evenly",
                  alignItems:"center"
                }}>
                Contact Sales
                <KeyboardArrowRightIcon />
              </Link>
            </button>
          </Box>
        </Container>

        <Footer />

    </React.Fragment>
  );
}


export default Landing;
