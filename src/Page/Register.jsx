import React, { useRef, useEffect } from "react";
import Axios from "../Utils/axios_setup";

// Components
import Navbar from "./../Components/Navbar";
import RegisterCard from "./../Components/RegisterCard";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";

export default function Register() {
  const boxRef = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, { opacity: 1, duration: 2 });
  });
  return (
    // <div>
    //    <Navbar />
    //    <RegisterCard />
    // </div>
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
          opacity: "0",
          alignItems: "center",
        }}
        ref={boxRef}
      >
        <Col md={6}>
          <h1 style={{ color: "#e0aaff", opacity: "60%", fontSize: "8rem" }}>
            recrute
          </h1>
          <h4 style={{ color: "#e0aaff", opacity: "20%", fontSize: "2.5rem" }}>
            recruiting the{" "}
            <span style={{ color: "#e0aaff", fontSize: "2.5rem" }}>
              {" "}
              correct
            </span>{" "}
            way
          </h4>
        </Col>
        <Col md={6}>
          <RegisterCard />
        </Col>
      </Row>
    </Container>
  );
}
