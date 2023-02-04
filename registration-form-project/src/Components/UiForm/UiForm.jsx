import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../UiForm/UiForm.css";
import { useState } from "react";

// const UiForm = () => {
//   const [record, setRecord] = useState([]);
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [userregistration, setUserRegistration] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//   });
//   const [formErrors, setFormErrors] = useState(userregistration);

//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     console.log(name, value);

//     setUserRegistration({ ...userregistration, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newrecord = {
//       ...userregistration,
//       id: new Date().getTime().toString(),
//     };
//     console.log(record);
//     setRecord([...record, newrecord]);
//     console.log(record);

//     setIsSubmit(true);

//     setFormErrors(validate(userregistration));

//     setUserRegistration({ firstname: "", lastname: "", email: "" });
//   };

//   const validate = (values) => {
//     const errors = {};
//     if (!values.firstname) {
//       errors.firstname = "firstname is required!";
//     }
//     if (!values.lastname) {
//       errors.lastname = "lastname is required!";
//     }
//     if (!values.email) {
//       errors.email = "email is required!";
//     }
//     return errors;
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit} className="form-content">
//         {Object.keys(formErrors).length === 0 && isSubmit ? (
//           <div className="ui message success">Signed in successfully</div>
//         ) : (
//           ""
//         )}
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control
//             name="firstname"
//             id="firstname"
//             type="text"
//             value={userregistration.firstname}
//             onChange={handleInput}
//             placeholder="First Name"
//           />
//         </Form.Group>
//         <p>{formErrors.firstname}</p>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control
//             name="lastname"
//             id="lastname"
//             value={userregistration.lastname}
//             onChange={handleInput}
//             type="text"
//             placeholder="Last Name"
//           />
//         </Form.Group>
//         <p>{formErrors.lastname}</p>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             name="email"
//             id="email"
//             value={userregistration.email}
//             onChange={handleInput}
//             type="email"
//             placeholder="Enter email"
//           />
//         </Form.Group>
//         <p>{formErrors.email}</p>
//         <Button type="submit" variant="primary">
//           Register
//         </Button>
//         <div>
//           {record.map((e) => {
//             return (
//               <>
//                 <p>{e.firstname}</p>
//                 <p>{e.lastname}</p>
//                 <p>{e.email}</p>
//               </>
//             );
//           })}
//         </div>
//       </Form>
//     </>
//   );
// };
// export default UiForm;


const UiForm = () =>{
  const [record, setRecord] = useState([]);
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
    setUserRegistration({firstname:"", lastname:"", email:""});
  }

  return(
    <>
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