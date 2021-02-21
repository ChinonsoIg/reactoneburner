import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlash, faCheckCircle, faAward, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

// Components
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  section1: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  section3: {
    height: "100vh",
  },
  section4: {
    height: "100vh",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: "40px",
    padding: "1.5rem",
    fontSize: "18px",
    width: "fit-content",
    alignSelf: "center",
  },
}));

const Landing = ({ menuProps1 }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Menu menuProps1="Products" />
        <CssBaseline />
        <Container className={classes.section1}>
          <h1>Modern solutiion built for your enterprise growth</h1>
          <p>Centralise your team in a secure, flexible and managed platform</p>
          <Button className={classes.button}>
            Request a demo
            <KeyboardArrowRightIcon />
          </Button>
          <p>Over 500+ companies bond teams together with Oneburner</p>
          <Box
            display="flex"
            flexWrap="wrap"
            p={1}
            m={1}
            justifyContent="space-between"
            alignItems="center"
            >
            <Box>PayStack</Box>
            <Box>EgyptAir</Box>
            <Box>Dangote</Box>
            <Box>Standard</Box>
            <Box>MTN</Box>
            <Box>GTB</Box>
            <Box>Skooleeo</Box>
          </Box>
        </Container>

        <Container className={classes.section2}>
          <h3
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
          </h3>
          <Box
            style={{ 
              marginBottom: "0",
              paddingTop: "0px",
              height: "100vh",
              position: "relative",
              width: "100%" }}>
            <Box
              position="absolute"
              top={0}
              height="50%"
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
                <div style={{textAlign:"left", width:"48%", marginRight:"1%"}}>Oneburner softwaresolution helps your business by creating an enabling environment for easy communication and feedbacks in real time. Oneburner brings all your user and teams in a single place with 99.99% uptime SLA and Data security.
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
              p={2}
              position="absolute"
              top="40%"
              left="25%"
              height="20%"
              width="50%"
              borderRadius="5px"
              boxShadow={2}
              zIndex="tooltip">
              <FontAwesomeIcon icon={faAward} size={30} />
              <h3>Best Collaboration Software</h3>
              <p>Africa tech coalition award 2020</p>
            </Box>
            <Box
              position="absolute"
              top="50%"
              height="50%"
              width="100%"
              bgcolor="white"
              zIndex="modal"
              >
              <Box marginTop="8%">Integrate with your favourite tools easily in one click</Box>
              <Box
                display="flex"
                flexWrap="wrap"
                p={1}
                m={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box><i class="fab fa-slack"></i></Box>
                <Box><FontAwesomeIcon icon={faSlash} /></Box>
                <Box>PayStack</Box>
                <Box>EgyptAir</Box>
                <Box>Dangote</Box>
                <Box>Standard</Box>
                <Box>MTN</Box>
                <Box>GTB</Box>
                <Box>Skooleeo</Box>
              </Box>
            </Box>
          </Box>

        </Container>

        <Container className={classes.section3}>
          <h3>Our Regional Presence</h3>
          <p>Lorem ipsum is simply dummy text....</p>
          <img src="" alt="Map of Africa" />
        </Container>

        <Container className={classes.section4}>
          <div>Best Product Ever</div>
          <div><img src="" alt="Image of CEO" /></div>
          <div>
            <h4>Want to learn more on how we can impact your enterprise?</h4>
            <button className={classes.button}>
              Contact Sales
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </Container>

        <Footer />

    </React.Fragment>
  );
}


export default Landing;
