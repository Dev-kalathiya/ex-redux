// Add.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/Action';
import { TextField, Button, Card, CardContent, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // for navigation

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Country, setCountry] = useState("");
  const [State, setState] = useState("");

  const handleUser = (e) => {
    e.preventDefault();

    const user = {
      Name,
      Email,
      Country,
      State
    };

    dispatch(addUser(user));

    // Reset form fields
    setName("");
    setEmail("");
    setCountry("");
    setState("");

    // Navigate to home page after submission
    navigate('/');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Add New User
          </Typography>
          <form onSubmit={handleUser} noValidate autoComplete="off">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Country"
              variant="outlined"
              fullWidth
              margin="normal"
              value={Country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <TextField
              label="State"
              variant="outlined"
              fullWidth
              margin="normal"
              value={State}
              onChange={(e) => setState(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '20px' }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Add;
