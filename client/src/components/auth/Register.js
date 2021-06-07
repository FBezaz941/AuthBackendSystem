import React, {useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Wave from "react-wavify"; 


export default function Register() {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [passwordVerify, setPasswordVerify]=useState("");
  const {getLoggedIn} = useContext(AuthContext);
  const history = useHistory();
  async function register(e) {
      e.preventDefault();
    try {
        const registerData = {
            email, password, passwordVerify,
        };

        await axios.post("http://localhost:5000/auth/", registerData);
        getLoggedIn();
        history.push("/");
    } catch (err) {
        console.error(err);
    }
  }
  return (
    <div id="contact">
      
      <Wave
        className="wave"
        fill="#140a42"
        paused={false}
        options={{
          height: 50,
          amplitude: 100,
          speed: 0.1,
          points: 5
        }}/>
      <Form onSubmit={register}>
        <h1>Become a member!</h1>

        <input type="email" placeholder="Enter email" 
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
        required/>
        
        
        <input type="Password" placeholder="Password"
        onChange={(e)=> setPassword(e.target.value)}
        value={password} 
        required/>
        <input type="password" placeholder="Verify password" 
        onChange={(e)=> setPasswordVerify(e.target.value)}
        value={passwordVerify}
        required/>
        <Button variant="outline-dark"  type="submit">Register</Button>
      </Form>
    </div>
  );
}
