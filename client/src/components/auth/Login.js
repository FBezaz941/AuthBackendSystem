import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Wave from "react-wavify"; 
import {Button} from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {getLoggedIn} = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData);
      await getLoggedIn();
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
      <form onSubmit={login}>
      <h1>Login!</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Button variant="outline-dark" type="submit">Login</Button>
      </form>
    </div>
  );
}
