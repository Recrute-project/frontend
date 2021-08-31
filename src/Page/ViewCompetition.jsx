import React from "react";
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
  DropdownButton,
  Dropdown,
  Image,
} from "react-bootstrap";
import google from "../Assets/google.jpeg";

function ViewCompetition() {
  return (
    <Container
      fluid
      style={{
        height: "200vh",
        backgroundColor: "#161616",
        textAlign: "center",
      }}
    >
      <Row style={{ padding: "1.5rem 0rem" }}>
        <Col md={6} style={{ textAlign: "left", paddingLeft: "4rem" }}>
          <h1 style={{ color: "#e0aaff", opacity: "70%", fontSize: "2rem" }}>
            RECRUTE
          </h1>
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col md={8}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "100rem",
              padding: "2rem 3rem",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1
              style={{ color: "#161616", fontSize: "4rem", fontWeight: "bold" }}
            >
              Competition
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5rem 0rem",
                width: "100%",
              }}
            >
              <h1
                style={{
                  color: "#161616",
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
              >
                Google
              </h1>
              <Image
                src={google}
                style={{
                  width: "6rem",
                  height: "6rem",
                  border: "1px transparent",
                  objectFit: "cover",
                  marginTop: "1rem",
                  borderRadius: "100%",
                }}
              />
            </div>

            <p style={{ padding: "3rem 0rem", textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem
              odio, gravida ut nunc sed, commodo condimentum ligula. Praesent
              bibendum dolor nec sodales ornare. Sed vel posuere neque.
              Suspendisse tempor urna vitae turpis vulputate lobortis. Vivamus
              enim lacus, consequat aliquet risus vel, rhoncus scelerisque
              justo. Suspendisse posuere quam sit amet consectetur ultrices.
              Suspendisse cursus sem eget cursus eleifend. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Nulla facilisi. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Suspendisse
              sit amet vehicula arcu, non faucibus quam. Nunc est velit,
              consectetur faucibus dictum nec, iaculis nec nisl. Nam molestie
              urna a magna faucibus elementum. Donec laoreet nisl id nunc
              imperdiet ultrices sit amet sed nibh. Vestibulum metus est,
              efficitur in mi non, tincidunt mollis arcu. Aliquam nisi lectus,
              tempus ut metus vel, commodo viverra ex. Nunc egestas molestie
              tortor at mattis. Duis at pretium enim. Nulla elementum purus quis
              est tristique eleifend. Nam libero tortor, ullamcorper non nunc
              vel, laoreet pulvinar est. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Maecenas
              facilisis sit amet lorem ut auctor. Donec non rhoncus urna. Nam
              dapibus, arcu a lobortis finibus, enim ante lobortis lacus, eget
              tempor nisi eros ac risus. Ut blandit at quam vel fermentum. Donec
              convallis sapien in cursus vehicula. Curabitur blandit facilisis
              enim, ut finibus nulla. Quisque sodales nunc ipsum, sed aliquet
              ante consequat at.
            </p>
            <h2 style={{ textAlign: "left" }}>Date: 12/10/2021</h2>
            <h2 style={{ textAlign: "left", marginTop: "1rem" }}>
              Prize Pool: 10,000
            </h2>
            {/* <iframe
              style={{ marginTop: "4rem" }}
              frameborder="0"
              width="100%"
              height="500px"
              src="https://replit.com/@amasad/PitifulLastingWhoopingcrane?lite=true%22%3E"
            ></iframe> */}

            <div
              style={{
                width: "80%",
                height: "20rem",
                border: "5px solid #6A38CD",
                borderRadius: "0.5rem",
                backgroundColor: "#ffffff",
                float: "left",
                marginTop: "3rem",
                marginLeft: "10%",
                padding: "1em 2em",
                color: "#6A38CD",
                textAlign: "left",
              }}
            >
              <Form>
                <Form.Group
                  className="mb-2"
                  controlId="formBasicEmail"
                  style={{ width: "60%" }}
                >
                  <Form.Label>
                    Why are you applying for this position?
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter ans" />
                </Form.Group>
                <Form.Group
                  className="mb-2"
                  controlId="formBasicEmail"
                  style={{ width: "60%" }}
                >
                  <Form.Label>Tell us about your experience</Form.Label>
                  <Form.Control type="text" placeholder="Enter ans" />
                </Form.Group>

                <Form.Group
                  className="mb-1"
                  controlId="formBasicPassword"
                  style={{ width: "60%" }}
                >
                  <Form.Label>
                    What is the average of first five multiples of 12?
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter ans" />
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}
              </Form>
            </div>

            <div
              style={{
                width: "40%",
                height: "3rem",
                border: "1px transparent",
                borderRadius: "0.5rem",
                backgroundColor: "#6A38CD",
                marginTop: "3rem",
                float: "left",
                padding: "0.5em",
                color: "#ffffff",
              }}
            >
              <h3>Submit</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewCompetition;
