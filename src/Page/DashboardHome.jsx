import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
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
import { AiOutlineSearch } from "react-icons/ai";
import data from "./../Assets/Jobs";
import person from "../Assets/person.jpg";

// Components
import JobCard from "./../Components/JobCard";
import { Link } from "@material-ui/core";

let useStyles = makeStyles({
  searchBox: {
    padding: "12px 24px 12px 12px",
    border: "1px transparent",
    borderRadius: "40px",
    color: "#fff",
    backgroundColor: "transparent !important",
  },
  searchBar: {
    border: "0px solid #e6e6e6 !important",
    borderRadius: "40px",
    color: "#fff",
    backgroundColor: "transparent !important",
  },
  filterMenu: {
    padding: "12px 24px 12px 12px",
  },
});

function DashboardHome() {
  let classes = useStyles();

  let [salary, setSalary] = React.useState(0);
  let [search, setSearch] = React.useState("");
  const [show, setShow] = useState(false);
  const [curr, setCurr] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [filterData, setFilterData] = React.useState(data);
  let [displayData, setDisplayData] = React.useState(data);

  let getParsedJobs = () =>
    filterData.filter((job) =>
      search === "" || search === null
        ? true
        : job.companyName.toLowerCase().includes(search) ||
          job.title.toLowerCase().includes(search) ||
          job.position.toLowerCase().includes(search) ||
          job.requirements.includes(search)
    );
  let getFilteredData = () => {
    console.log("Salary: " + salary);
    return data.filter((job) => job.salary >= salary);
  };

  useEffect(() => {
    setDisplayData(getParsedJobs());
    console.log("EXec");
  }, [filterData]);

  useEffect(() => {
    setFilterData(getFilteredData());
  }, [salary]);

  let searchHandle = (e) => {
    let value = e.target.value.toLowerCase();
    setSearch(value);
    setDisplayData(getParsedJobs());
  };

  let filterHandle = (e) => {
    console.log("Clicked ");
    let sal = Number(e.target.name);

    setSalary(sal);
  };

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
          <h1 style={{ color: "#e0aaff", opacity: "60%", fontSize: "2rem" }}>
            RECRUTE
          </h1>
        </Col>
      </Row>
      {/* <Row style={{ margin: "1.5rem 0rem" }}>
        <Col md={6}>
          <h1>RECRUTE</h1>
        </Col>
        <Col md={6}>
          <Form>
            <InputGroup>
              <InputGroup.Text className={classes.searchBox}>
                <AiOutlineSearch />
              </InputGroup.Text>

              <Dropdown
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
              >
                <Dropdown.Toggle id="filter" className={classes.filterMenu}>
                  Filter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" name="20000" onClick={filterHandle}>
                    {" "}
                    20,000{" "}
                  </Dropdown.Item>
                  <Dropdown.Item href="#" name="50000" onClick={filterHandle}>
                    50,000
                  </Dropdown.Item>
                  <Dropdown.Item href="#" name="100000" onClick={filterHandle}>
                    1,00,000
                  </Dropdown.Item>
                  <Dropdown.Item href="#" name="100000" onClick={filterHandle}>
                    {" "}
                    {"1,00,000 < "}{" "}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <FormControl
                id="inlineFormInputGroupSearch"
                placeholder="search"
                className={classes.searchBar}
                onChange={searchHandle}
              />
            </InputGroup>
          </Form>
        </Col>
      </Row> */}
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
              height: "20rem",
              padding: "0rem 1.2rem",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: "100%",
                marginTop: "2rem",
                padding: "0rem 1.2rem",
              }}
            >
              <h1
                style={{
                  color: "#e0aaff",
                  fontSize: "1.5rem",
                  float: "left",
                }}
              >
                Find a perfect job
              </h1>
              <Form
                style={{
                  width: "40%",
                  float: "right",
                  border: "1px transparent",
                  borderRadius: "40px",
                  backgroundColor: "#6A38CD",
                  opacity: "60%",
                }}
              >
                <InputGroup>
                  <InputGroup.Text className={classes.searchBox}>
                    <AiOutlineSearch />
                  </InputGroup.Text>

                  <FormControl
                    id="inlineFormInputGroupSearch"
                    placeholder="search"
                    className={`${classes.searchBar}` + " " + "checksearch"}
                    onChange={searchHandle}
                  />
                </InputGroup>
              </Form>
            </div>
            <div
              style={{
                display: "inline-block",
                width: "100%",
                marginTop: "2rem",
                padding: "0rem 1.2rem",
              }}
            >
              <Dropdown
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
                style={{ float: "right", width: "40%" }}
              >
                <Dropdown.Toggle
                  id="filter"
                  className={classes.filterMenu}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px transparent",
                    width: "100%",
                    borderRadius: "40px",
                    backgroundColor: "#6A38CD",
                    opacity: "60%",
                  }}
                >
                  Filter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" name="20000" onClick={filterHandle}>
                    {" "}
                    20,000{" "}
                  </Dropdown.Item>
                  <Dropdown.Item href="#" name="50000" onClick={filterHandle}>
                    50,000
                  </Dropdown.Item>
                  <Dropdown.Item href="#" name="100000" onClick={filterHandle}>
                    1,00,000
                  </Dropdown.Item>
                  <Dropdown.Item href="#" name="100000" onClick={filterHandle}>
                    {" "}
                    {"1,00,000 < "}{" "}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
                padding: "1rem 1rem",
              }}
            >
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
                  marginTop: "1rem",
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
                  marginTop: "1rem",
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
                  marginTop: "1rem",
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
                  marginTop: "1rem",
                  marginRight: "0.5rem",
                }}
              >
                python
              </span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1rem transparent",
              borderRadius: "1rem",
              display: "flex",
              marginTop: "3rem",
              height: "15rem",
              padding: "0rem 1.2rem",
              flexDirection: "column",
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

              <span
                style={{
                  display: "inline-block",
                  padding: "0.25em",
                  width: "50%",
                  borderRadius: "3rem",
                  backgroundColor: "#a06cd5",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Jobs
              </span>
            </div>
          </div>
        </Col>
        <Col md={1}></Col>
        <Col md={4}>
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
                onClick={() => {
                  setShow(true);
                  setCurr(item);
                }}
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
          {show && (
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>{curr.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {curr.description}
                <br />
                Requirements:{" "}
                {curr.requirements.map((req) => {
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
                {curr.hasCompetition && (
                  <div
                    style={{
                      display: "inline-block",
                      width: "100%",
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
                    <p>Join Competition</p>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Modal>
          )}
        </Col>
      </Row>
    </Container>
  );
}
// const mod = (item) => {
//   return (
//     <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
//       <Modal.Header closeButton>
//         <Modal.Title>{item.title}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         I will not close if you click outside me. Don't even try to press escape
//         key.
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary">Understood</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

export default DashboardHome;
