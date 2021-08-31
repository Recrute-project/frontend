import { FormControl } from "@material-ui/core";
import React, {useEffect} from "react"
import axios from "./../Utils/axios_setup"
import backend from "./../Utils/backend"
import {Formik} from "formik"
import {Form, Container, Button, Card} from "react-bootstrap"
import { useHistory } from "react-router";

export default function CompanyProfileEditer() {
   const redirect = useHistory();
   let [company, setCompany] = React.useState(null);
   let [initialData, setInitialData] = React.useState();

   useEffect(async () => {
      console.log("Begin")
      let data = await axios.get(backend.settings.baseURL + "/company/get",
      {
         headers: { "x-access-token": localStorage.getItem("token") },
      });
      console.log("Setting...")
      console.log(data);
      setCompany(data.data);
   }, []);


   return ( company ?
      <Container 
         fluid
         style={{
            backgroundColor: "#161616",
            height: "100vh",
            // width: "100vw",
            textAlign: "center",
            alignItems: "center",
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
          >
         
         <Card style={{      
            width: "60%",
            padding: "5rem",
            borderRadius: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",  }}>

               <Card.Title style={{
                  padding: "0px 4px",
                  size: "40px",
                  textDecoration: "bold"
               }}>
                 {" "}
                 Edit Company Profile{" "}
               </Card.Title>
               {/* <Card.Subtitle> Enter the Job Details </Card.Subtitle> */}
      <Formik
         initialValues={company}// || {name: "My Company", address: "Address", phone: "9123443233", description: "Our Company aims to revolutionize the way we make payments", email:"mycompany@mail.com", website: "www.somewebsite.com"}}
         onSubmit={async (values)=> {
            let response = await axios.post(backend.settings.baseURL + "/company/update",
               values,
               {
                  headers: { "x-access-token": localStorage.getItem("token") },
               })
            console.log("Update Successful");
            console.log(response);
            redirect.push("/dash");
         }}
      >
         { ({handleChange, handleSubmit, values, handleBlur}) => {
            return (

               <Form style={{
                  backgroundColor: "#ffffff"
               }} onSubmit={(e) => {e.preventDefault(); handleSubmit();}} >
               <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Company Name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
               </Form.Group>

               <Form.Group className="mb-3" >
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                          required
                          type="text"
                          placeholder="Address"
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
               </Form.Group>

               <Form.Group className="mb-3" >
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                          required
                          type="text"
                          placeholder="Phone"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
               </Form.Group>

               <Form.Group className="mb-3" >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                          required
                          type="text"
                          placeholder="Description"
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
               </Form.Group>

               <Form.Group className="mb-3" >
                  <Form.Label>Website</Form.Label>
                  <Form.Control
                          required
                          type="text"
                          placeholder="Link"
                          name="website"
                          value={values.website}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
               </Form.Group>

               <Form.Group className="mb-3" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                          required
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
               </Form.Group>

               


               <Button type="submit"> Save </Button> 

               </Form>
            )}}
      </Formik>
      </Card>
      </Container> : <div></div>
   )
   
}