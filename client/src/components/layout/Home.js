import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Wave from "react-wavify";
import Couriers from "../couriers/Couriers";
import AuthContext from "../../context/AuthContext";

function Home() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      <Wave
        className="wave"
        fill="#140a42"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          speed: 0.1,
          points: 5
        }}
      />
      <div>
        
      {loggedIn === true && (
        <>
          <h1>Arrival Feed</h1>
          <Couriers/>
        </>
      )}
      </div>
      <div id="intro" className="intro">
      {loggedIn === false && (
        <>
        <h1>
          Welcome to <em className="highlight">Courier Pals</em>.
        </h1>
        <h3>
           <em className="highlight">Recieve</em> goods from anywhere with little hassle.
        </h3>
        </>
      )}
      </div>
      </div>
    
  );
}

export default Home;
