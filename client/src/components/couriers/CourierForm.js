import axios from 'axios';
import React, { useState } from 'react';

import Wave from "react-wavify"; 
import { Button, Form } from "react-bootstrap";


export default function CourierForm({getCouriers}) {
    const [courierName, setCourierName]=useState("");
    const [courierDestination, setCourierDestination]=useState("");
    const [courierDate, setCourierDate]=useState("");
    async function saveCourier(e){
        e.preventDefault();
        try {
            const courierData = {
                name: courierName, 
                destination: courierDestination,
                date: courierDate,
            }
            await axios.post("http://localhost:5000/courier/", courierData);
            getCouriers();
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
        
            <Form onSubmit={saveCourier}>
            <h1>Let people know when and where you're going!</h1>
              <input type="text" placeholder="Courier Name" onChange = {
                  (e)=>{setCourierName(e.target.value);}
              }
              />
              <input type="text" placeholder="Courier Destination" onChange = {
                  (e)=>{setCourierDestination(e.target.value);}
              }
             />
              <input type="date" placeholder="Courier Date" onChange = {
                  (e)=>{setCourierDate(e.target.value);}
              }
              value={courierDate}/>
              <Button  variant="outline-dark" type="submit">Save</Button>
            </Form>
        </div>
    );
}
