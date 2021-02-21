import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import Menu from "../components/Menu";
import Footer from "../components/Footer";

// Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

// Images
import section_one from '../svgs/demo-page/section_one.svg';
import section_four from '../svgs/demo-page/section_four.svg';
import section_five from '../svgs/demo-page/section_five.svg';
import section_six from '../svgs/demo-page/section_six.svg';
import section_eight from '../svgs/demo-page/section_eight.svg';
import section_nine from '../svgs/demo-page/section_nine.svg';
import section_ten from '../svgs/demo-page/section_nine.svg';
import companies from '../svgs/constants/companies.svg';
import fav_tools from '../svgs/constants/fav_tools.svg';

const useStyles = makeStyles((theme) => ({
  sectionThree: {
    // marginBottom: theme.spacing(5),
    marginBottom: "10px",
  },
  sectionThree: {
    marginTop: "50px"
  },
  button: {
    backgroundColor: "blue",
    padding: "0.6rem",
    color: 'white',
    borderRadius: '20px',
  },
}));

const Demo = () => {
  const classes = useStyles();

  return (
    <>
      <Menu />
      <CssBaseline />
      <Container className="sectionOne">
        <Box
          display="flex"
          flexWrap="nowrap"
          p={2}
          m={2}
          justifyContent="space-between"
          alignItems="center"
          height="100vmin"
          width="100%"
        >
          <div style={{textAlign:"center", width:"42%", marginRight:"1%"}}>
            <h2>Collaborate with your team and get more done</h2>
            <p>Communicate effectively with Oneburner for easy collaboration, team work and remote work</p>
            <Button className={classes.button}>
              Start free trial
              <KeyboardArrowRightIcon />
            </Button>
          </div>
          <div style={{width:"56%", marginLeft:"1%"}}>
            <img src={section_one} style={{width:"100%"}} />
          </div>
        </Box>
      </Container>
      <Container className={classes.sectionTwo}>
        <h3>Over 500+ companies bond teams together with Oneburner</h3>
        <img src={companies} alt="List of partner companies" style={{width:"100%"}} />
      </Container>
      <Container className={classes.sectionThree}>
        <Box
          display="flex"
          flexWrap="nowrap"
          justifyContent="space-evenly"
          alignItems="center"
          height="100px"
          width="100%"
          border="1px solid black"
          borderRadius="5px"
        >
          <div style={{backgroundColor:"blue", color:"white", width:"17%", height:"100%", lineHeight:"100px"}}>CRM & Sales</div>
          <div style={{width:"17%", height:"100%", lineHeight:"50px"}}>Human Resourcess</div>
          <div style={{width:"16%", height:"100%", lineHeight:"50px"}}>Marketing</div>
          <div style={{width:"16%", height:"100%", lineHeight:"50px"}}>Remote Work</div>
          <div style={{width:"17%", height:"100%", lineHeight:"50px"}}>Project Management</div>
          <div style={{width:"17%", height:"100%", lineHeight:"50px"}}>Social Media</div>
        </Box>
      </Container>

      <Container className="sectionFour">
        <Box
          display="flex"
          flexWrap="nowrap"
          p={2}
          m={2}
          justifyContent="space-between"
          alignItems="center"
          height="100vmin"
          width="100%"
        >
          <div style={{textAlign:"left"}}>
            <h3>Manage team activities all in one place</h3>
            <p>Keep your team organised and informed with activities that are up to date</p>
          </div>
          <div style={{width:"56%", marginLeft:"1%"}}>
            <img src={section_four} style={{width:"100%"}} />
          </div>
        </Box>
      </Container>

      <Container className="sectionFive">
        <Box
          display="flex"
          flexWrap="nowrap"
          p={2}
          m={2}
          justifyContent="space-between"
          alignItems="center"
          height="100vmin"
          width="100%"
        >
          <div style={{width:"56%", marginRight:"1%"}}>
            <img src={section_five} style={{width:"100%"}} />
          </div>
          <div style={{textAlign:"left"}}>
            <h3>Bring your team up to speed</h3>
            <p>Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner</p>
          </div>
        </Box>
      </Container>

      <Container className="sectionSix">
        <Box
          display="flex"
          flexWrap="nowrap"
          p={2}
          m={2}
          justifyContent="space-between"
          alignItems="center"
          height="100vmin"
          width="100%"
        >
          <div style={{textAlign:"left"}}>
            <h3>Automated task timeline</h3>
            <p>View dates, projects, calendar, sprint and more with reliability.</p>
          </div>
          <div style={{width:"56%", marginLeft:"1%"}}>
            <img src={section_six} style={{width:"100%"}} />
          </div>
        </Box>
      </Container>

      <Container className="sectionSeven">
        <Box>
          <img src={fav_tools} style={{width:"100%"}} />
        </Box>
      </Container>

      <Container className="sectionEight">
        <Box
          display="flex"
          flexWrap="nowrap"
          p={2}
          m={2}
          justifyContent="space-between"
          alignItems="center"
          height="100vmin"
          width="100%"
        >
          <div style={{width:"56%", marginRight:"1%"}}>
            <img src={section_eight} style={{width:"100%"}} />
          </div>
          <div style={{textAlign:"left"}}>
            <h3>Timeless report generator</h3>
            <p>You can generate quick report of activities of all that has to do with the daily running of your business and teams.</p>
          </div>
        </Box>
      </Container>
    
      <Container className="sectionNine">
        <Box style={{width:"100%"}}>
          <img src={section_nine} style={{width:"100%"}} />
        </Box>
      </Container>

      <Container className="sectionTen">
        <Box
          display="flex"
          flexWrap="nowrap"
          p={2}
          m={2}
          justifyContent="space-between"
          alignItems="center"
          height="100vmin"
          width="100%"
        >
          <div style={{width:"56%", marginLeft:"1%"}}>
            <img src={section_ten} style={{width:"100%"}} />
          </div>
          <div style={{textAlign:"left"}}>
            <h3>24/7 customer support</h3>
            <p>Our team of responsible embers is always avaliable to help you all day long and ready to meet your demand. Each out to us and we will always be there</p>
          </div>
        </Box>
      </Container>

      <Container className="sectionEleven">
        <Box 
          style={{backgroundColor:"blue"}}
          display="flex"
          color="white"
          flexDirection="column"
          p={2}
          m={2}
          justifyContent="center"
          alignItems="center"
          height="50vmin"
          width="100%">
          <h2>Choose a better way to work</h2>
          <p>No credit card details | No additional installation | No time wasting</p>
          <Button className={classes.button}>
            Start my free trial
            <KeyboardArrowRightIcon />
          </Button>
        </Box>
      </Container>

      <Footer />
    </>
  )
}

export default Demo;
