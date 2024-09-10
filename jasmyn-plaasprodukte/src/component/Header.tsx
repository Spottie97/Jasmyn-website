import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Jasmyn Plaasprodukte
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About Us</Button>
          <Button color="inherit" component={Link} to="/strive">We Strive</Button>
          <Button color="inherit" component={Link} to="/departments">Departments</Button>
          <Button color="inherit" component={Link} to="/faq">FAQ</Button>
          <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
