import React from "react";
import Toast from "react-bootstrap/Toast";

export default function CourierList({ couriers }) {
  function renderCouriers() {
    return couriers.map((courier, i) => {
      return (
        <div  aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'relative',
          minHeight: '200px',
        }}>
          <Toast
          style={{
            position: 'absolute',
            top: 0,
            right:500,
          }}>
            <Toast.Header>
              <strong className="mr-auto">
                <li key={i}>{courier.name}</li>
              </strong>
            </Toast.Header>
            <Toast.Body>
              {" "}
              Arriving to <h4>{courier.destination}</h4> on{" "}
              <h4>{courier.date}</h4>{" "}
            </Toast.Body>
          </Toast>
        </div>
      );
    });
  }

  return (
    <div>
      <ul>{renderCouriers()}</ul>
    </div>
  );
}
