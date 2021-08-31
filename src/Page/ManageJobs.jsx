import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import data from "./../Assets/Jobs";

function ManageJobs() {
  let [displayData, setDisplayData] = React.useState(data);
  return (
    <Container
      fluid
      style={{
        height: "200vh",
        backgroundColor: "#161616",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <Row style={{ padding: "1.5rem 0rem" }}>
        <Col md={6} style={{ textAlign: "left", paddingLeft: "4rem" }}>
          <h1 style={{ color: "#e0aaff", opacity: "60%", fontSize: "2rem" }}>
            RECRUTE
          </h1>
        </Col>
        <Col md={6} style={{ textAlign: "right", paddingRight: "4rem" }}>
          <h1 style={{ color: "#e0aaff", opacity: "90%", fontSize: "2rem" }}>
            Company Dashboard
          </h1>
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {displayData.map((item, index) => {
            return (
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1rem transparent",
                  borderRadius: "1rem",
                  display: "flex",
                  marginTop: "3rem",
                  height: "12rem",
                  padding: "0rem 1.5rem",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                index={index}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ color: "#bbbbbb" }}>{item.companyName}</h4>
                  <Image
                    src="https://via.placeholder.com/150"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      border: "1px transparent",
                      objectFit: "cover",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <span
                  style={{
                    display: "inline-block",
                    textAlign: "left",
                  }}
                >
                  <h4>{item.title}</h4>
                </span>
                <span
                  style={{
                    display: "inline-block",
                    textAlign: "left",
                  }}
                >
                  <h4>{item.position}</h4>
                </span>
                <div style={{ textAlign: "left" }}>
                  {item.requirements.map((req) => {
                    return (
                      <div
                        style={{
                          display: "inline-block",
                          width: "4rem",
                          textAlign: "center",
                          height: "2rem",
                          border: "1px transparent",
                          borderRadius: "0.25em",
                          marginTop: "0.5rem",
                          marginRight: "0.5rem",
                          backgroundColor: "#6A38CD",
                          padding: "0.25em",
                          color: "#ffffff",
                          fontWeight: "bold",
                        }}
                      >
                        <p>{req}</p>
                      </div>
                    );
                  })}
                  <div
                    style={{
                      display: "inline-block",
                      width: "4rem",
                      textAlign: "center",
                      height: "2rem",
                      border: "1px transparent",
                      borderRadius: "0.25em",
                      marginTop: "0.5rem",
                      marginRight: "0.5rem",
                      backgroundColor: "#6A38CD",
                      padding: "0.25em",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    <p>{item.salary}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default ManageJobs;
