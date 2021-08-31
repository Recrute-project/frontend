import React, { useRef, useEffect } from "react";

import { Col, Container, Row, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../Assets/img1.svg";
import img2 from "../Assets/img2.svg";
import img3 from "../Assets/7.png";
import { gsap } from "gsap";

function Landing() {
  const boxRef = useRef();
  const boxRef2 = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, { opacity: 1, duration: 2 });
    gsap.to(boxRef2.current, { opacity: 1, duration: 2 });
  });
  return (
    <Container fluid style={{ padding: "0" }}>
      <Container
        style={{
          backgroundColor: "#161616",
          height: "100vh",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        fluid
      >
        <div style={{ textAlign: "center", opacity: 0 }} ref={boxRef}>
          <h1 style={{ color: "#6A38CD", fontSize: "8rem" }}>RECRUTE</h1>
          <h4
            style={{
              color: "#6A38CD",
              opacity: 0.8,
              fontSize: "2rem",
            }}
          >
            recruiting the correct way
          </h4>
          <div
            style={{ display: "block", width: "100%", backgroundColor: "#ccc" }}
          >
            <Link to="/login">
              <div
                style={{
                  width: "100%",
                  height: "3rem",
                  border: "1px transparent",
                  borderRadius: "0.5rem",
                  backgroundColor: "#6A38CD",
                  marginTop: "0.5rem",
                  float: "left",
                  padding: "0.5em",
                  color: "#ffffff",
                }}
              >
                <h3>Login</h3>
              </div>
            </Link>
            {/* <Link to="/register">
              <div
                style={{
                  width: "40%",
                  height: "2rem",
                  float: "right",
                  border: "1px transparent",
                  borderRadius: "3rem",
                  marginRight: "3rem",
                  backgroundColor: "#6A38CD",
                  marginTop: "0.5rem",
                  padding: "0.28em",
                  color: "#ffffff",
                }}
              >
                <h6>Register</h6>
              </div>
            </Link> */}
          </div>
        </div>
        <Image
          src={img3}
          fluid
          width={600}
          style={{ marginLeft: "5rem", opacity: 0 }}
          ref={boxRef2}
        />
      </Container>
      <Container
        style={{
          backgroundColor: "#161616",
          height: "300vh",
          borderTop: "3px solid #e0aaff",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          padding: "0",
        }}
        fluid
      >
        <Row
          style={{
            textAlign: "center",
            width: "100%",
            height: "60vh",
            margin: "0",
            padding: "0",
            alignItems: "center",
          }}
        >
          <Col md={6} style={{ textAlign: "center", padding: "4rem 1rem" }}>
            <Image src={img1} width={400} />
          </Col>
          <Col md={4} style={{ textAlign: "left", padding: "4rem 1rem" }}>
            <h3
              style={{ color: "#e0aaff", opacity: "80%", lineHeight: "2.1rem" }}
            >
              A platform to{" "}
              <span
                style={{ fontWeight: "bold", opacity: "100%", color: "white" }}
              >
                smoothen
              </span>{" "}
              out and optimize the hiring process of individuals with features
              to curate a personalized hiring structure and filterbased
              methodology for candidates and recruiters.{" "}
            </h3>
          </Col>
        </Row>
        <Row
          style={{
            textAlign: "center",
            borderTop: "3px solid #e0aaff",
            width: "100%",
            height: "90vh",
            alignItems: "center",
            margin: "0",
            padding: "0",
          }}
        >
          <Col md={2}></Col>
          <Col md={4} style={{ textAlign: "left", padding: "4rem 1rem" }}>
            <h3
              style={{ color: "#e0aaff", opacity: "60%", lineHeight: "2.1rem" }}
            >
              Hiring doesn’t just involve a “send resume, give interview”
              process. Companies nowadays wish to conduct competitve rounds like
              aptitude test, coding rounds or hackathons, etc. An applicant
              wishes to express his/her/their achievements at length with the
              precise detail. The Hiring processes are manual and extremely slow
              for they need to go through every applicant one by one.
            </h3>
          </Col>
          <Col md={6} style={{ textAlign: "center", padding: "4rem 1rem" }}>
            <Image src={img2} width={400} />
          </Col>
        </Row>
        <Row
          style={{
            textAlign: "center",
            borderTop: "3px solid #e0aaff",
            width: "100%",
            height: "90vh",
            alignItems: "center",
            justifyContent: "center",
            margin: "0",
            padding: "0",
            flexWrap: "wrap",
          }}
        >
          <Col
            md={6}
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "4rem",
            }}
          >
            <Card
              style={{
                width: "25rem",
                height: "15rem",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Body>
                <Card.Title>Platform for hosting competitions</Card.Title>
                <Card.Text>
                  The companies can organise and host different competitions
                  like Hackathons, Coding Rounds, Marketing Challenges or even
                  Aptitude Tests for their recruitment programs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={6}
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "4rem",
            }}
          >
            <Card
              style={{
                width: "25rem",
                height: "15rem",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Body>
                <Card.Title>Company Dashboard</Card.Title>
                <Card.Text>
                  The company dashboard will allow companies to set up their job
                  opening with all requirements in built.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={6}
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "4rem",
            }}
          >
            <Card
              style={{
                width: "25rem",
                height: "15rem",
                textAlign: "center",
                justifyContent: "center",

                display: "flex",
                alignItems: "center",
              }}
            >
              <Card.Body>
                <Card.Title>Easy-To-Use User Dashboard</Card.Title>
                <Card.Text>
                  Every applicant can keep their portfolio ready with exact
                  details of achievement like Resume, Cover letters, Codechef
                  Profiles, HackTheBox achievements, etc. The user interface
                  would be made simple and heirarchial category for ease.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={6}
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: "4rem",
            }}
          >
            <Card
              style={{
                width: "25rem",
                height: "15rem",
                textAlign: "center",
                justifyContent: "center",

                display: "flex",
                alignItems: "center",
              }}
            >
              <Card.Body>
                <Card.Title>Quicker Selection Process</Card.Title>
                <Card.Text>
                  Using the algorithm set up by Recrute, thousands of
                  application will go through a filter with every check:
                  Statistics of compeitions hosted, Resume, Keywords from
                  application and cover letter to help companies find a quicker
                  mechanism to sort out the elligible candidates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Landing;
