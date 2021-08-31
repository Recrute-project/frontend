import React, { useRef, useEffect } from "react";

// // Components
// import Navbar from "./../Components/Navbar";
import LoginCard from "./../Components/LoginCard";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";

export default function Login() {
  const boxRef = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, { opacity: 1, duration: 2 });
  });
  return (
    //  <div>
    //    <Navbar />
    //    <LoginCard />
    //  </div>

    <Container
      fluid
      style={{
        backgroundColor: "#161616",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
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
          opacity: "0",
        }}
        ref={boxRef}
      >
        <Col md={6}>
          <h1 style={{ color: "#e0aaff", opacity: "60%", fontSize: "8rem" }}>
            Recrute
          </h1>
          <h4 style={{ color: "#e0aaff", opacity: "20%", fontSize: "2rem" }}>
            Bride the recruiter and the applicant.
          </h4>
        </Col>
        <Col md={6}>
          <LoginCard />
        </Col>
      </Row>
    </Container>
  );
}
