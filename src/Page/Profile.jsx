import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Form,
  InputGroup,
  FormControl,
  Modal,
} from "react-bootstrap";

import { Formik } from "formik";
import axios from "axios";

function Profile() {
  const [user, setUser] = React.useState({});
  const [loaded, setLoaded] = React.useState(false);
  useEffect(async () => {
    let data = await axios.get("http://localhost:8000/api/user/getuser", {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    setUser(data.data);
    console.log(data.data);
    setLoaded(true);
  }, []);
  let initalValues = {
    email: user.email || "",
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    phone: user.phone || "",
    location: user.location || "",
    experience: user.experience || "",
  };
  let validationSchema = {};
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#161616",
        height: "100vh",
        textAlign: "center",
        padding: "3rem 4rem",
      }}
    >
      <h1 style={{ color: "#e0aaff", fontSize: "2rem" }}>Jennie</h1>
      {loaded && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Card
            style={{
              padding: "2rem",
              border: "2px solid #ccc",
              borderRadius: "1rem",
              width: "30%",
            }}
          >
            {" "}
            <Formik
              initialValues={initalValues}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter fname"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter lname"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exp">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter location"
                      name="location"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exp">
                    <Form.Label>Experience</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter experience"
                      name="experience"
                      value={values.experience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
        </div>
      )}
    </Container>
  );
}

export default Profile;
