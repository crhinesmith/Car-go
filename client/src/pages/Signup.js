import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { NEW_USER } from "../utils/mutations";

require("dotenv").config()

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "", admin: "" });
  const [newUser] = useMutation(NEW_USER);
  const [active, isActive]= useState(false) 


  const handleFormSubmit = async (event) => {
    
    event.preventDefault();
    const mutationResponse = await newUser({
      variables: {
        input:{
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
        admin: true
        }
      },
    });
    const token = mutationResponse.data.newUser.token;
    Auth.login(token);
    console.log(mutationResponse);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(event.target.type==="checkbox") {
      isActive(!active) 
      console.log("helloworld", active);
    }
    console.log("value", value)
    setFormState({
      ...formState,
      [name]: value, 
    });
  };

  return (
    <div className="container my-1 signupBox">
      <div className="text-left">
        <Link to="/login">← Go to Login</Link>
      </div>

      <h2>Signup</h2>
      <form className="d-flex flex-column" onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="email@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" name="admin" admin="checked" checked={active} onChange={handleChange}></input>
  <label className="form-check-label" for="Admin">
    Admin
  </label>
</div>
        <div className="flex-row justify-content-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
