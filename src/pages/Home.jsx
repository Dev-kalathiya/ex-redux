import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, deleteUser, updateUser, addUser } from "../redux/Action";
import { TextField, Button, Card, CardContent, Typography, Grid } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.student);
  console.log(data);

  const [Name, setname] = useState("");
  const [Email, setEmail] = useState("");
  const [Country, setCountry] = useState("");
  const [State, setState] = useState("");
  const [id, setId] = useState();
  const [Edit, setEdit] = useState(false);
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleEditChange = (ele) => {
    setEdit(true);
    setname(ele.Name);
    setEmail(ele.Email);
    setCountry(ele.Country);
    setState(ele.State);
    setId(ele.id);
    setShowForm(true); // Show form when editing
  };

  const handleAddUserClick = () => {
    setEdit(false);
    setname("");
    setEmail("");
    setCountry("");
    setState("");
    setShowForm(true); // Show form when adding a new user
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let user = {
      name: Name,
      Email,
      country: Country,
      state: State,
      id: id,
    };
    if (Edit) {
      dispatch(updateUser(user));
    } else {
      dispatch(addUser(user));
    }
    setname("");
    setEmail("");
    setCountry("");
    setState("");
    setShowForm(false); // Hide form after submission
  };

  const handleDeleteStudent = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Student List
      </Typography>

      {/* Button to trigger form for adding new user */}
      {!showForm && (
        <Button variant="contained" color="primary" onClick={handleAddUserClick}>
          Add New User
        </Button>
      )}

      {/* Form is only visible when showForm is true */}
      {showForm && (
        <Card style={{ marginBottom: "20px", padding: "20px" }}>
          <CardContent>
            <form onSubmit={handlesubmit} noValidate autoComplete="off">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={Name}
                onChange={(e) => setname(e.target.value)}
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
              <Button type="submit" variant="contained" color="primary">
                {Edit ? "Update User" : "Add User"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <Grid container spacing={2}>
        {data.students.map((e) => (
          <Grid item xs={12} sm={6} md={4} key={e.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{e.Name}</Typography>
                <Typography color="textSecondary">{e.Email}</Typography>
                <Typography color="textSecondary">{e.Country}</Typography>
                <Typography color="textSecondary">{e.State}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteStudent(e.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleEditChange(e)}
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
