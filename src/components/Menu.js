import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


// Menu
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PowerIcon from '@material-ui/icons/Power';
import SubjectIcon from '@material-ui/icons/Subject';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { purple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  centre: {    
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "white",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  menuItems: {
    // marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  menuItemsRight: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    lineHeight: 'auto',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  dropdownFlex: {
    display: 'flex',
    margin: 'auto',
    width: '100%',
  },
  textLeft: {
    textAlign: 'left',
  },
  button: {
    backgroundColor: "purple",
    padding: "0.6rem",
    color: 'white',
    borderRadius: '20px',
  },
}));

const MenuBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Contact Sales</p>
      </MenuItem>
      <MenuItem>        
        <p>Login</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button className={classes.button}>
          Try For Free
          <KeyboardArrowRightIcon />
        </Button>
      </MenuItem>
    </Menu>
  );

  // Dropdown menu for Products
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (  
    <div className={classes.grow}>
      <AppBar position="static" className={classes.centre}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />oneburner
          </IconButton>

        <p className={classes.menuItems}>
        <span
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Products
          <ExpandMoreIcon />
        </span>
        
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.dropdownFlex}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow"  onKeyDown={handleListKeyDown}>
                    {/* <MenuItem> */}
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm container spacing={1}>
                        <Grid item>
                          <LocalMallIcon />
                        </Grid>
                        <Grid item xs container direction="column" spacing={1} className={classes.textLeft}>
                          <Typography variant="subtitle1">Clients</Typography>
                          <p>See the amazing team that uses Oneburner.</p>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm container spacing={2}>
                        <Grid item>
                          <StorefrontIcon />
                        </Grid>
                        <Grid item xs container direction="column" spacing={1} className={classes.textLeft}>
                          <Typography variant="subtitle1">Oneburner Stores</Typography>
                          <p>Explore our ready made solutions to expand your business.</p>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm container spacing={2}>
                        <Grid item>
                          <PowerIcon />
                        </Grid>
                        <Grid item xs container direction="column" spacing={1} className={classes.textLeft}>
                          <Typography variant="subtitle1">Integrations</Typography>
                          <p>Connect different solution to Oneburner and get more done.</p>
                        </Grid>
                      </Grid>

                      <Grid item xs={6} sm container spacing={2}>
                        <Grid item>
                          <SubjectIcon />
                        </Grid>
                        <Grid item xs container direction="column" spacing={1} className={classes.textLeft}>
                          <Typography variant="subtitle1">Why Oneburner?</Typography>
                          <p>Learn more about our features, success roles,, benefits and demo.</p>
                        </Grid>
                      </Grid>

                    </Grid>
                    {/* </MenuItem> */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </p>


          <p className={classes.menuItems}>Pricing</p>
          <p className={classes.menuItems}>Enterprise</p>
          <p className={classes.menuItems}>Support</p>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <p className={classes.menuItemsRight}>Contact Sales</p>
            <p className={classes.menuItemsRight}>Login</p>
            <Button className={classes.button}>Try for free</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default MenuBar;