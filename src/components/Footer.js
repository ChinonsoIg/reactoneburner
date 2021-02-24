import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Material UI Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

// Images
import oneburner_logo from '../svgs/constants/oneburner_logo.svg';
import language from '../svgs/footer/language.svg';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        // pt={5}
        justifyContent="space-between"
        alignItems="space-between"
        width="100%"
        >
        <Box
          display="flex"
          flexWrap="nowrap"
          pt={5}
          justifyContent="space-between"
          alignItems="space-between"
          width="100%"
          >
          <img src={oneburner_logo} style={{width:"25%"}} />
          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select"
                value={language}
                onChange={handleChange}
                label="Language"
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Igbo">Igbo</MenuItem>
                <MenuItem value="Yoruba">Yoruba</MenuItem>
                <MenuItem value="Hausa">Hausa</MenuItem>
                <MenuItem value="Efik">Efik</MenuItem>
                <MenuItem value="Ibibio">Ibibio</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
        <Box
          display="flex"
          flexWrap="nowrap"
          justifyContent="space-between"
          alignItems="flex-start"
          width="100%"
          >
          <Box style={{textAlign:"left", width:"50%"}}>
            <Typography gutterBottom variant="subtitle1">
              No 1 CRM solution in Africa
            </Typography>
            <Typography variant="body2" gutterBottom>
              Terms of Use | Privacy Policy
            </Typography>
            <Box style={{paddingTop:"1rem"}}>
              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                Get in touch
              </Typography>
              <Typography variant="body2" color="textSecondary">
                +234-80-000-000
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="nowrap"
                justifyContent="flex-start"
                alignItems="center"
                width="100%"
              >
                <FacebookIcon style={{color:"#3b5998", fontSize:"200%", margin:"2px"}} />
                <TwitterIcon style={{color:"#00acee", fontSize:"200%", margin:"2px"}} />
                <LinkedInIcon style={{color:"#0e76a8", fontSize:"200%", margin:"2px"}} />
                <YouTubeIcon style={{color:"#FF0000", fontSize:"200%", margin:"2px"}} />
              </Box>
            </Box>
          </Box>

          <Box style={{textAlign:"left", width:"16%", marginLeft:"1%"}}>
          <Typography gutterBottom variant="subtitle1">
            PRODUCT
          </Typography>
          <Typography variant="body2">
            Features
          </Typography>
          <Typography variant="body2">
            Enterprise
          </Typography>
          <Typography variant="body2">
            Security
          </Typography>
          <Typography variant="body2">
            Trust
          </Typography>
          <Typography variant="body2">
            Customer Stories
          </Typography>
          <Typography variant="body2">
            Pricing
          </Typography>
          <Typography variant="body2">
            Integrations
          </Typography>
          <Typography variant="body2">
            Oneburner Partners
          </Typography>
        </Box>
        
          <Box style={{textAlign:"left", width:"16%", marginLeft:"1%"}}>
          <Typography gutterBottom variant="subtitle1">
            COMPANY
          </Typography>
          <Typography variant="body2">
            About Us
          </Typography>
          <Typography variant="body2">
            Contact Us
          </Typography>
          <Typography variant="body2">
            Careers
          </Typography>
          <Typography variant="body2">
            In the News
          </Typography>
        </Box>
        
          <Box style={{textAlign:"left", width:"16%", marginLeft:"1%"}}>
          <Typography gutterBottom variant="subtitle1">
            ONEBURNER FOR TEAMS
          </Typography>
          <Typography variant="body2">
            Engineering
          </Typography>
          <Typography variant="body2">
            Financial Services
          </Typography>
          <Typography variant="body2">
            CRM and Sales
          </Typography>
          <Typography variant="body2">
            IT
          </Typography>
          <Typography variant="body2">
            Marketing
          </Typography>
          <Typography variant="body2">
            Customer Support
          </Typography>
          <Typography variant="body2">
            Human Resources
          </Typography>
          <Typography variant="body2">
            Project Management
          </Typography>
          <Typography variant="body2">
            Remote Work
          </Typography>
        </Box>
        </Box>

      </Box>
      <hr />
      <p style={{textAlign:"left"}}>
        &copy; 2020 Oneburner.com. All Rights Reserved.
      </p>
    </Container>
  );
}

export default Footer;
