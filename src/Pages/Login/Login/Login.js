import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handelLoginSubmit = (e) => {
    alert("Congratulation");
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handelLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handelOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handelOnChange}
              variant="standard"
            />
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
