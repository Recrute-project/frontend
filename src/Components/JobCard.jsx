import React from "react"
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
 } from "react-bootstrap";
 import { makeStyles } from "@material-ui/core/styles";


 const useStyles = makeStyles((theme) => ({
   card: {
     margin: "0.2rem",
     alignItems: "left",
     borderRadius: "40px",
     
   },
   cardImg: {
     boxShadow: "100px",
     borderRadius: "20px"
   },
   cardBody: {
     alignItems: "left",
     padding: '20px'
   },


   modalCardImg: {
      boxShadow: "4px",
      borderRadius: "6px",
   },

   list: {
     margin: "0.5rem",
   },
   requ: {
     display: "flex",
     flexDirection: "row",
     flexWrap: "wrap",
     justifyContent: "left",
     alignItems: "center",
   },
   requcard: {
     border: "1px transparent",
     borderRadius: "20px",
     width: "4rem", 
     margin: "0.25rem 0.25rem",
     textAlign: "center",
     padding: "0.5rem",
     color: "#7738F1",
     backgroundColor: "#DBC5FC",
   },
 }));

export default function JobCard(props) {
   let [show, setShow] = React.useState(false);
   
   const classes = useStyles();
   let CardContent = () => {
      return (
      <div>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Subtitle>{props.data.companyName}</Card.Subtitle>
        <Card.Header style={{ margin: "1rem 0.5rem" }}>
          Details
        </Card.Header>
        <ListGroup variant="flush" className={classes.list}>
          <ListGroup.Item>salary: {props.data.salary}</ListGroup.Item>
          <ListGroup.Item>position: {props.data.position}</ListGroup.Item>
          <ListGroup.Item className={classes.requ}>
            {props.data.requirements.map((req, ind) => {
              return <div className={classes.requcard}>{req}</div>;
            })}
          </ListGroup.Item>
        </ListGroup>
      </div>

      )
   };


   return (
      <Col key={props.index} md={4} xs={6}>
      <Card className={classes.card}>
      <Card.Img lg={3} variant="right" className={classes.cardImg} src={props.data.image} />
      <Card.Body className={classes.cardBody}>
         <CardContent />
        <Button variant="primary" onClick={() => {
          setShow(true);
        }}>Read More</Button>
      </Card.Body>
      </Card>
      
      


      <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      {/* <Col key={props.index} md={12} xs={12}> */}
         {/* <Card className={classes.card} sm={12} md={12}> */}
         <Card.Img variant="top" className={classes.modalCardImg} src={props.data.image} />
         <Card.Body className={classes.cardBody}>
            <CardContent />
           <Button variant="primary" onClick={() => {
             setShow(false);
           }}>Close</Button>
         </Card.Body>
         {/* </Card> */}
      {/* </Col> */}
      </Modal> 
      </Col>
   )
}