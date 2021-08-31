import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { MdWork } from "react-icons/md";
import { FaChild, FaTrophy } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { GoBroadcast } from "react-icons/go";
import person from "../Assets/person.jpg";
import person2 from "../Assets/persocn.jpg";
import google from "../Assets/google.jpeg";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

function DashboardLanding() {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  const box4Ref = useRef();
  useEffect(() => {
    gsap.to(box1Ref.current, { opacity: 1, duration: 3 });
    gsap.to(box2Ref.current, { opacity: 1, duration: 3 });
    gsap.to(box3Ref.current, { opacity: 1, duration: 3 });
    gsap.to(box4Ref.current, { opacity: 1, duration: 3 });
  });
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#161616",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Row style={{ padding: "1.5rem 0rem", opacity: "0" }} ref={box1Ref}>
        <Col
          md={12}
          style={{
            textAlign: "left",
            paddingLeft: "4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "#e0aaff",
              opacity: "80%",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            RECRUTE
          </h1>
          <div
            style={{
              width: "20%",
              height: "3rem",
              border: "1px transparent",
              borderRadius: "0.5rem",
              backgroundColor: "#6A38CD",
              marginTop: "0.5rem",
              textAlign: "center",
              padding: "0.5em",

              color: "#ffffff",
            }}
            onClick={handleLogout}
          >
            <h3>Logout</h3>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          textAlign: "center",
          width: "100%",
          margin: "0",
          padding: "1rem",
          opacity: "0",
        }}
        ref={box2Ref}
      >
        <Col md={3}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "10rem",
              padding: "0rem 1.2rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "3rem" }}>
              <h6>Acitve hours</h6>
              <h1 style={{ color: "#bbbbbb" }}>10hrs</h1>
            </div>
            <div
              style={{
                width: "6rem",
                height: "6rem",
                border: "1px transparent",
                borderRadius: "100%",
                backgroundColor: "#6A38CD",
                padding: "1.5rem",
                color: "#ffffff",
                marginRight: "2rem",
              }}
            >
              <FaChild color="#ffffff" size="3rem" />
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "10rem",
              padding: "0rem 1.2rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "3rem" }}>
              <h6>Jobs applied</h6>
              <h1 style={{ color: "#bbbbbb" }}>5</h1>
            </div>
            <div
              style={{
                width: "6rem",
                height: "6rem",
                border: "1px transparent",
                borderRadius: "100%",
                backgroundColor: "#6A38CD",
                padding: "1.5rem",
                color: "#ffffff",
                marginRight: "2rem",
              }}
            >
              <MdWork color="#ffffff" size="3rem" />
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "10rem",
              padding: "0rem 1.2rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "3rem" }}>
              <h6>Amount earned</h6>
              <h1 style={{ color: "#bbbbbb" }}>$100</h1>
            </div>
            <div
              style={{
                width: "6rem",
                height: "6rem",
                border: "1px transparent",
                borderRadius: "100%",
                backgroundColor: "#6A38CD",
                padding: "1.5rem",
                color: "#ffffff",
                marginRight: "2rem",
              }}
            >
              <BiDollar color="#ffffff" size="3rem" />
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "10rem",
              padding: "0rem 1.2rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "3rem" }}>
              <h6>Success rate</h6>
              <h1 style={{ color: "#bbbbbb" }}>56%</h1>
            </div>
            <div
              style={{
                width: "6rem",
                height: "6rem",
                border: "1px transparent",
                borderRadius: "100%",
                backgroundColor: "#6A38CD",
                padding: "1.5rem",
                color: "#ffffff",
                marginRight: "2rem",
              }}
            >
              <BsGraphUp color="#ffffff" size="3rem" />
            </div>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          textAlign: "center",
          width: "100%",
          margin: "0",
          padding: "1rem",
          opacity: "0",
        }}
        ref={box3Ref}
      >
        <Col md={3}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "10rem",
              padding: "0rem 1.2rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "3rem" }}>
              <h6>Jobs available</h6>
              <h1 style={{ color: "#bbbbbb" }}>10</h1>
            </div>
            <div
              style={{
                width: "6rem",
                height: "6rem",
                border: "1px transparent",
                borderRadius: "20%",
                backgroundColor: "#6A38CD",
                padding: "1.5rem",
                color: "#ffffff",
                marginRight: "2rem",
              }}
            >
              <GoBroadcast color="#ffffff" size="3rem" />
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "10rem",
              padding: "0rem 1.2rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "3rem" }}>
              <h6>Competition Won</h6>
              <h1 style={{ color: "#bbbbbb" }}>25</h1>
            </div>
            <div
              style={{
                width: "6rem",
                height: "6rem",
                border: "1px transparent",
                borderRadius: "20%",
                backgroundColor: "#6A38CD",
                padding: "1.5rem",
                color: "#ffffff",
                marginRight: "2rem",
              }}
            >
              <FaTrophy color="#ffffff" size="3rem" />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "10rem",
              padding: "0rem 1.2rem",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "3rem" }}>
              <span
                style={{
                  width: "0.5em",
                  height: "0.5em",
                  backgroundColor: "#6A38CD",
                  borderRadius: "50%",
                  display: "inline-block",
                  position: "relative",
                }}
              ></span>
              <h6>Total</h6>
              <h1 style={{ color: "#bbbbbb" }}>25</h1>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <span
                style={{
                  width: "0.5em",
                  height: "0.5em",
                  backgroundColor: "#ff9900",
                  borderRadius: "50%",
                  display: "inline-block",
                  position: "relative",
                }}
              ></span>
              <h6>Spent</h6>
              <h1 style={{ color: "#bbbbbb" }}>15</h1>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <span
                style={{
                  width: "0.5em",
                  height: "0.5em",
                  backgroundColor: "#ff0000",
                  borderRadius: "50%",
                  display: "inline-block",
                  position: "relative",
                }}
              ></span>
              <h6>Left</h6>
              <h1 style={{ color: "#bbbbbb" }}>10</h1>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          textAlign: "center",
          width: "100%",
          margin: "0",
          padding: "1rem",
          opacity: "0",
        }}
        ref={box4Ref}
      >
        <Col md={3}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "15rem",
              flexDirection: "column",
              padding: "0rem 1.2rem",

              alignItems: "center",
            }}
          >
            <Image
              src={person}
              style={{
                width: "6rem",
                height: "6rem",
                border: "1px transparent",
                objectFit: "cover",
                marginTop: "1rem",
                borderRadius: "100%",
              }}
            />
            <h1 style={{ color: "#bbbbbb" }}>Jennie</h1>
            <div
              style={{
                width: "80%",
                height: "2rem",
                marginTop: "0.5rem",
                backgroundColor: "#6A38CD",
                borderRadius: "3rem",
              }}
            >
              <Link to="/profile">
                <span
                  style={{
                    width: "50%",
                    height: "2rem",
                    display: "inline-block",
                    float: "left",
                    backgroundColor: "#a06cd5",
                    borderRadius: "3rem",
                    padding: "0.25em",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Profile
                </span>
              </Link>
              <Link to="/dashboard">
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.25em",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  Jobs
                </span>
              </Link>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "15rem",
              flexDirection: "column",
              padding: "0rem 1.2rem",

              alignItems: "center",
            }}
          >
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
            <h1 style={{ color: "#bbbbbb" }}>Google</h1>
            <div
              style={{
                width: "80%",
                height: "2rem",
                marginTop: "0.5rem",
                backgroundColor: "#6A38CD",
                borderRadius: "3rem",
              }}
            >
              <Link to="/companyDash">
                <span
                  style={{
                    width: "50%",
                    height: "2rem",
                    display: "inline-block",
                    float: "left",
                    backgroundColor: "#a06cd5",
                    borderRadius: "3rem",
                    padding: "0.25em",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Profile
                </span>
              </Link>
              <Link to="/manageJob">
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.25em",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  Jobs
                </span>
              </Link>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "15rem",
              padding: "0rem 1.2rem",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4 style={{ color: "#bbbbbb" }}>
              {" "}
              <span style={{ color: "#161616", fontSize: "2rem" }}>"</span>
              Jennie is very hard working. <br />
              She is cute as well.
              <span style={{ color: "#161616", fontSize: "2rem" }}>"</span>
            </h4>
            <div style={{ marginTop: "1rem" }}>
              <Image
                src={person2}
                style={{
                  width: "3rem",
                  height: "3rem",
                  border: "1px transparent",
                  objectFit: "cover",
                  float: "left",
                  borderRadius: "100%",
                }}
              />
              <h5 style={{ float: "right", margin: "0.75rem" }}>
                SDE-1, Microsoft
              </h5>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "15rem",
              padding: "0rem 1rem",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "40%",
                height: "2rem",
                backgroundColor: "#6A38CD",
                borderRadius: "3rem",
                padding: "0.25em",
                color: "#ffffff",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              ReactJs
            </span>
            <span
              style={{
                display: "inline-block",
                width: "40%",
                height: "2rem",
                backgroundColor: "#6A38CD",
                borderRadius: "3rem",
                padding: "0.25em",
                color: "#ffffff",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              AngularJs
            </span>
            <span
              style={{
                display: "inline-block",
                width: "30%",
                height: "2rem",
                backgroundColor: "#6A38CD",
                borderRadius: "3rem",
                padding: "0.25em",
                color: "#ffffff",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              PyTorch
            </span>
            <span
              style={{
                display: "inline-block",
                width: "60%",
                height: "2rem",
                backgroundColor: "#6A38CD",
                borderRadius: "3rem",
                padding: "0.25em",
                color: "#ffffff",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              Tensorflow
            </span>
            <span
              style={{
                display: "inline-block",
                width: "50%",
                height: "2rem",
                backgroundColor: "#6A38CD",
                borderRadius: "3rem",
                padding: "0.25em",
                color: "#ffffff",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              sk-learn
            </span>
            <span
              style={{
                display: "inline-block",
                width: "30%",
                height: "2rem",
                backgroundColor: "#6A38CD",
                borderRadius: "3rem",
                padding: "0.25em",
                color: "#ffffff",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              python
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardLanding;
