import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import navBarLogo from '../img/logo/cider-sm-white.png'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';

// Define the type for the props of the ElevationScroll component
interface ElevationScrollProps {
  children: React.ReactElement;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function NavBar(props: any) {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isSelected, setIsSelected] = React.useState('/');

  const handleNavClick = (path: string) => {
    setIsSelected(path)
    navigate(path);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const renderMenuButtons = () => (
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "left" : "right" }}>
      <Button sx={{ fontFamily: 'sans-serif', color: isSelected === '/' ? "#881F1D" : "primary" }} onClick={() => handleNavClick('/')}>
        Home
      </Button>
      <Button color="primary" sx={{ fontFamily: 'sans-serif', color: isSelected === '/AboutUs' ? "#881F1D" : "primary" }} onClick={() => handleNavClick('/AboutUs')}>
        About Us
      </Button>
      <Button color="primary" sx={{ fontFamily: 'sans-serif', color: isSelected === '/Services' ? "#881F1D" : "primary" }} onClick={() => handleNavClick('/Services')}>
        Services
      </Button>
      <Button color="primary" sx={{ fontFamily: 'sans-serif', color: isSelected === '/CiderTips' ? "#881F1D" : "primary" }} onClick={() => handleNavClick('/CiderTips')}>
        Cider Tips
      </Button>
      <Button color="primary" sx={{ fontFamily: 'sans-serif', color: isSelected === '/ContactUs' ? "#881F1D" : "primary" }} onClick={() => handleNavClick('/ContactUs')}>
        Contact Us
      </Button>
    </Box>
  );

  return (
    <>
      <React.Fragment>
        <ElevationScroll {...props}>
          <AppBar sx={{ backgroundColor: "#242523" }} >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
              <Box>
                <img src={navBarLogo} alt='logo' height={'50px'} style={{ marginTop: "5px", cursor: "pointer" }} onClick={() => handleNavClick('/')} />
              </Box>
              {isMobile ? (
                <>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <Box
                      sx={{ width: 250, height: "100%", backgroundColor: "#242523" }}
                      role="presentation"
                      onClick={toggleDrawer(false)}
                      onKeyDown={toggleDrawer(false)}
                    >
                      {renderMenuButtons()}
                    </Box>
                  </Drawer>
                </>
              ) : (
                renderMenuButtons()
              )}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
    </>
  );
}