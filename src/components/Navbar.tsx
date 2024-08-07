import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

export default function NavBar() {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color='transparent' sx={{ zIndex: 100, boxShadow: "none", mt: 0 }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography color={"primary"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button color="primary" onClick={() => handleNavClick("/")}>Home</Button>
          <Button color="primary" onClick={() => handleNavClick("/AboutUs")}>About Us</Button>
          <Button color="primary" onClick={() => handleNavClick("/Services")}>Services</Button>
          <Button color="primary" onClick={() => handleNavClick("/Tips")}>Cider Tips</Button>
          <Button color="primary" onClick={() => handleNavClick("/ContactUs")}>Contact Us</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}