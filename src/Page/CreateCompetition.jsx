import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { Card, Container, Form, FormText, InputGroup, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

import problems from "./../Assets/Problems"

// Components
import Navbar from "../Components/Navbar";
import { Divider } from "@material-ui/core";
import backend from "../Utils/backend";

let useStyles = makeStyles(() => {
  return {
    card: {
      width: "100%",
      padding: "50px",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    cardTitle: {
      padding: "0px 4px",
      size: "10rem",
    },

    form: {
      margin: "40px 0px",
    },
  };
});

export default function CreateCompetition() {
  let classes = useStyles();

  let [company, setCompany] = React.useState({});
  const [user, setUser] = React.useState({});

//   useEffect(async () => {
//     setCompany(() => {
//       // let data = await axios.post(backend.settings.baseURL + backend.settings.getCompany);
//       return {
//         name: "My Company",
//         logo: "https://via.placeholder.com/150",
//       };
//     });
//   }, []);

  let initialValues = {
    name: "",
    date: null,
    prize: "",
    duration: "",
  };

  let validationScheme = Yup.object({
    name: Yup.string().required("Required"),
    prize: Yup.string().required("Required"),
    duration: Yup.string().required("Required"),
  });

  return (
    <div>
      <Container
        fluid
        style={{
          backgroundColor: "#161616",
          height: "100vh",
          textAlign: "center",
          alignItems: "center",
          padding: "3rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row style={{          
          textAlign: "center",
          width: "100%",
          height: "90vh",
          margin: "0",
          padding: "0",
          alignItems: "center",}} >
        <Col md={6} style={{color:"#ffffff"}}>
          <h1>Create Competition</h1>
        </Col>

        <Col md={6} >
        <Card className={classes.card}>
          <Card.Title className={classes.cardTitle}>
            {" "}
            Create Competition{" "}
          </Card.Title>
          <Card.Subtitle> Enter the competition Details. </Card.Subtitle>
          
          <Formik
            validationScheme={validationScheme}
            initialValues={initialValues}
            onSubmit={async (values) => {
               //   setUser(data.data);
               //   console.log(data.data);
               values.problems = problems;
               values.duration = Number(values.duration);
               let data = await axios.post(backend.settings.baseURL + "/competition/create", 
                  values,               
                  {
                     headers: { "x-access-token": localStorage.getItem("token") },
                  });

               console.log(data);
            }}
          >
            {({ handleChange, values, handleBlur, handleSubmit }) => (
              <Form
                className={classes.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="name"
                    placeholder="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Form.Label>Prize</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Prize"
                    name="prize"
                    value={values.prize}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Duration"
                    name="duration"
                    value={values.duration}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />



                  {
                  /* <Form.Label>Pre Requisites</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Position"
                    name="position"
                    value={values.position}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  /> */
                  }
                </Form.Group>

                <Button variant="primary" type="submit">
                  Create Opening
                </Button>
              </Form>
            )}


            
          </Formik>
        </Card>
        </Col>
        </Row>
      </Container>
    </div>
  );
}
