import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import {
  Card,
  Container,
  Form,
  FormText,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

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

export default function CreateJob() {
  const redirect = useHistory();
  let classes = useStyles();

  let [company, setCompany] = React.useState({});
  const [user, setUser] = React.useState({});

  useEffect(async () => {
    setCompany(() => {
      // let data = await axios.post(backend.settings.baseURL + backend.settings.getCompany);
      return {
        name: "My Company",
        logo: "https://via.placeholder.com/150",
      };
    });
  }, []);

  let initialValues = {
    title: "",
    position: "",
    salary: "",
    requirements: "",
    companyName: "",
  };

  let validationScheme = Yup.object({
    title: Yup.string().required("Required"),
    position: Yup.string().required("Required"),
    salary: Yup.string().required("Required"),
    requirements: Yup.string().required("Required"),
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
        <Row
          style={{
            textAlign: "center",
            width: "100%",
            height: "90vh",
            margin: "0",
            padding: "0",
            alignItems: "center",
          }}
        >
          <Col md={6} style={{ color: "#ffffff" }}>
            <h1>Create Jobs</h1>
          </Col>

          <Col md={6}>
            <Card className={classes.card}>
              <Card.Title className={classes.cardTitle}>
                {" "}
                Create an Opening{" "}
              </Card.Title>
              <Card.Subtitle> Enter the Job Details </Card.Subtitle>

              <Formik
                validationScheme={validationScheme}
                initialValues={initialValues}
                onSubmit={async (values) => {
                  // let data = await axios.post(
                  //   "http://localhost:8000/api/gettext",
                  //   {
                  //     title: values.title,
                  //     position: values.position,
                  //     requ: ["kathan", "devcon", "react", "delegate"],
                  //   },
                  //   {
                  //     headers: { "x-access-token": localStorage.getItem("token") },
                  //   }
                  // );
                  // setUser(data.data);
                  // console.log(data.data);
                  let passData = values;
                  passData.requirements = values.requirements.split(" ");
                  passData.salary = Number(values.salary);
                  console.log("hellon");
                  let data = await axios.post(
                    backend.settings.baseURL + "/offers/create",
                    passData,
                    {
                      headers: {
                        "x-access-token": localStorage.getItem("token"),
                      },
                    }
                  );
                  console.log("Response: ");
                  console.log(data.data);
                  redirect.push("/dashboard");
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
                      <Form.Label>Job Title</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <Form.Label>Position</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Position"
                        name="position"
                        value={values.position}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <Form.Label>Salary</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Salary"
                        name="salary"
                        value={values.salary}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <Form.Label>Requirements</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Seperate with spaces"
                        name="requirements"
                        value={values.requirements}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {/* <Form.Label>Pre Requisites</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Position"
                    name="position"
                    value={values.position}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  /> */}
                    </Form.Group>

                    <Button type="submit" variant="primary" type="submit">
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
