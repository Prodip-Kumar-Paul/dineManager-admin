import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";

import signIn from "../../services/api/signin";
import errorService from "../../services/error-service";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        dinemanager.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

interface Credentials {
  email: {
    value: string;
    hasError: boolean;
  };
  password: {
    value: string;
    hasError: boolean;
  };
}

export default function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<Credentials>({
    email: {
      value: "",
      hasError: false,
    },
    password: {
      value: "",
      hasError: false,
    },
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const field = event.currentTarget.id;
    const value = event.currentTarget.value;
    if (field === "email") {
      setCredentials({
        ...credentials,
        email: {
          value,
          hasError:
            value === "" || !value.includes("@") || !value.includes(".")
              ? true
              : false,
        },
      });
    } else if (field === "password") {
      setCredentials({
        ...credentials,
        password: { value, hasError: value === "" ? true : false },
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const res = await signIn(
        credentials.email.value,
        credentials.password.value
      ) 
      console.log(res);
    } catch (err) {
      if( err instanceof Error) {
        errorService("Please provide correct credentials!");
      }
    }
    setIsLoading(false);
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={changeHandler}
              error={credentials.email.hasError}
              helperText={
                credentials.email.hasError
                  ? "Please enter a valid email address"
                  : ""
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={changeHandler}
              error={credentials.password.hasError}
              helperText={
                credentials.password.hasError
                  ? "Please enter a valid password"
                  : ""
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoading && (
                <CircularProgress
                  size={25}
                  thickness={6}
                  sx={{
                    color: green[500],
                    marginRight: "0.5rem",
                  }}
                />
              )}
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
