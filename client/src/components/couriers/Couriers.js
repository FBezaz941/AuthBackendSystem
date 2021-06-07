import axios from "axios";
import React, { useEffect, useState } from "react";
import CourierForm from "./CourierForm";
import CourierList from "./CourierList";

export default function Couriers() {
  const [couriers, setCouriers] = useState([]);

  async function getCouriers() {
    const couriersRes = await axios.get("http://localhost:5000/courier/");
    setCouriers(couriersRes.data);
  }

  useEffect(() => {
    getCouriers();
  }, []);
  return (
    <div>
      <CourierList couriers={couriers} />
    </div>
  );
}
