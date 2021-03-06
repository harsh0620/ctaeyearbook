import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login } from "../Context/authContext";
import { useAuth } from "../Context/authContext";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://www.ctae.ac.in/">
        CTAE YearBook
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Auth = ({ signUp: isSignUp, setSignUp: setIsSignup }) => {
  const { login, signUp } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const form_data = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      branch: data.get("branch"),
      batch: data.get("batch"),
    };
    if (
      form_data.name == null ||
      form_data.email == null ||
      form_data.password == null ||
      form_data.branch == null ||
      form_data.batch == null
    ) {
      alert("Please fill the form correctly");
    } else if (form_data.password.length != 8) {
      alert("Make sure your password is greater or equal to length 8");
    }
    isSignUp ? signUp(form_data) : login(data.get("email"), data.get("password"));
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {isSignUp && (
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
              )}

              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              {isSignUp && (
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-branch"
                    name="branch"
                    required
                    fullWidth
                    id="branch"
                    label="Branch"
                    autoFocus
                  />
                </Grid>
              )}
              {isSignUp && (
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-batch"
                    name="batch"
                    required
                    fullWidth
                    id="batch"
                    label="Batch(ex.2018-2022)"
                    autoFocus
                  />
                </Grid>
              )}
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
export default Auth;
