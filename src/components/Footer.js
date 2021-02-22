import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import oneburner_logo from '../svgs/constants/oneburner_logo.svg';
import language from '../svgs/footer/language.svg';

const Footer = () => {

  return (
    <Container>
      <Box
        display="flex"
        flexWrap="nowrap"
        p={2}
        m={2}
        justifyContent="space-between"
        alignItems="space-between"
        width="100%"
        >
        <img src={oneburner_logo} />
        <img src={language} />
      </Box>
      <Box
        display="flex"
        flexWrap="nowrap"
        p={2}
        m={2}
        justifyContent="space-between"
        alignItems="flex-start"
        width="100%"
      >
        <Box flexGrow={1} style={{textAlign:"left", width:"50%"}}>
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
            <Typography>Social media icons</Typography>
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

      <hr />
      <p style={{textAlign:"left"}}>&copy; 2020 Oneburner.com. All Rights Reserved.</p>
    </Container>
  );
}

export default Footer;
