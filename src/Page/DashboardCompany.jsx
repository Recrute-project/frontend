import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { MdWork } from "react-icons/md";
import { FaChild, FaTrophy, FaFileCsv } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { GoBroadcast } from "react-icons/go";
import axios from "axios";
import google from "../Assets/google.jpeg";
function DashboardCompanyLanding() {
  const [load, setLoad] = React.useState(false);
  const handleClick = async () => {
    setLoad(true);
    let data = await axios.post(
      "http://localhost:8000/api/gettext",
      {
        requ: ["kathan", "devcon", "react", "delegate"],
      },
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    );
    console.log(data.data);
    setLoad(false);
  };
  const handleLoading = async () => {
    console.log("loading");
    return <div>{load ? <h1>hELLO</h1> : <></>}</div>;
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
      <Row
        style={{
          textAlign: "center",
          width: "100%",
          margin: "0",
          padding: "1rem",
        }}
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
              <h1 style={{ color: "#bbbbbb" }}>15hrs</h1>
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
              <h6>Jobs created</h6>
              <h1 style={{ color: "#bbbbbb" }}>8</h1>
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
              <h6>Salary offered</h6>
              <h1 style={{ color: "#bbbbbb" }}>$10,000</h1>
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
        }}
      >
        <Col md={4}>
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
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "15rem",
              padding: "0rem 1.2rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "3rem" }}>
              <h6>Download scorecard </h6>
              <h1 style={{ color: "#bbbbbb" }}>SDE</h1>
              <div
                style={{
                  width: "100%",
                  height: "2rem",
                  border: "1px transparent",
                  borderRadius: "3rem",
                  backgroundColor: "#6A38CD",
                  marginTop: "0.5rem",
                  padding: "0.28em",
                  color: "#ffffff",
                }}
                onClick={handleClick}
              >
                <h6>Download</h6>
              </div>
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
              <FaFileCsv color="#ffffff" size="3rem" />
            </div>
          </div>
        </Col>
        <Col md={4}>
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
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                height: "2rem",
                border: "1px transparent",
                borderRadius: "3rem",
                backgroundColor: "#6A38CD",
                marginTop: "0.5rem",
                padding: "0.25em",
                color: "#ffffff",
              }}
            >
              <h6>Create Jobs</h6>
            </div>
            <div
              style={{
                width: "80%",
                height: "2rem",
                border: "1px transparent",
                borderRadius: "3rem",
                backgroundColor: "#6A38CD",
                marginTop: "0.5rem",
                padding: "0.25em",
                color: "#ffffff",
              }}
            >
              <h6>Manage Jobs</h6>
            </div>
            <div
              style={{
                width: "80%",
                height: "2rem",
                border: "1px transparent",
                borderRadius: "3rem",
                backgroundColor: "#6A38CD",
                marginTop: "0.5rem",
                padding: "0.25em",
                color: "#ffffff",
              }}
            >
              <h6>Create Competition</h6>
            </div>
            <div
              style={{
                width: "80%",
                height: "2rem",
                border: "1px transparent",
                borderRadius: "3rem",
                backgroundColor: "#6A38CD",
                marginTop: "0.5rem",
                padding: "0.25em",
                color: "#ffffff",
              }}
            >
              <h6>Manage Competition</h6>
            </div>
          </div>
        </Col>
        {/* <Col md={5}>
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
          ></div>
        </Col>
        <Col md={4}>
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
          ></div>
        </Col> */}
      </Row>
      <Row
        style={{
          textAlign: "center",
          width: "100%",
          margin: "0",
          padding: "1rem",
        }}
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
              <h6>People available</h6>
              <h1 style={{ color: "#bbbbbb" }}>20</h1>
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
              <h6>Competition created</h6>
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
    </Container>
  );
}

export default DashboardCompanyLanding;
