// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, styled } from '@mui/material';

// Custom styled component for the AppBar
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.shadows[4],
}));

const Navbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            My App
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/" sx={{ marginRight: 2 }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/Add">
              Add
            </Button>
          </div>
        </Container>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
