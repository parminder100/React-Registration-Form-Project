import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../UiForm/UiForm.css";
import { useState } from "react";

const UiForm = () =>{
  const [record, setRecord] = useState([]);
  const [successmessage, setSuccessMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const[userregistration, setUserRegistration] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({...userregistration, [name]: value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newrecord = {...userregistration, id: new Date().getTime().toString()}
    setRecord([...record, newrecord]);
    setSubmitted(true);
    setSuccessMessage(true);
    setUserRegistration({firstname:"", lastname:"", email:""});
  }

  return(
    <>
        { successmessage ? (<p className="success-message">Successfully registered</p>) : ("")}
        <Form onSubmit={handleSubmit} className="form-content">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value = {userregistration.firstname}
            onChange = {handleInput}
            name = "firstname"
            type="text"
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value = {userregistration.lastname}
            onChange = {handleInput}
            name = "lastname"
            type="text"
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value = {userregistration.email}
            onChange = {handleInput}
            name = "email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
      <div style={{display: submitted ? "block" : "none"}} className="form-data-content">
        <div className="form-data">
          {
            record.map((e)=>{
              return(
                <>
                  <p>{e.firstname}</p>
                  <p>{e.lastname}</p>
                  <p>{e.email}</p>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default UiForm;