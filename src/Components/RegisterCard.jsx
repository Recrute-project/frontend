import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Card } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

// Components
import Copyright from "./Copyright";
import axios from "./../Utils/axios_setup";
import services from "../Utils/services";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Card
        style={{
          padding: "3rem",
          borderRadius: "1.5rem",
          width: "38rem",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              let data = await services.register(values);
              if (data) {
                alert("Registration Successful");
                window.location.href = "/login";
                console.log(data);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => {
              return (
                <form
                  className={classes.form}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <Grid container spacing={2}>
                    {/* <Grid item xs={12} sm={6}>
                      <TextField
                        name="firstName"
                        id="firstName"
                        label="First Name"
                        variant="outlined"
                        required
                        fullWidth
                        autoFocus
                        autoComplete="fname"
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        required
                        fullWidth
                        autoComplete="lname"
                        onChange={handleChange}
                      />
                    </Grid> */}

                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        required
                        fullWidth
                        autoComplete="email"
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        id="username"
                        name="username"
                        label="Username"
                        variant="outlined"
                        required
                        fullWidth
                        autoComplete="username"
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                        fullWidth
                        autoComplete="current-password"
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign Up
                  </Button>

                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/login">Already have an account? Sign in</Link>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </div>
      </Card>
    </Container>
  );
}
