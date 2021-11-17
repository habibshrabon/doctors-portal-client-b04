import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IeOHdEPKgUGCeOdDicojypIybWT4gSZx9XD79DnLR0y6O2kjWjXBME4YxXGrV81zPTcdM5zHoF57Dq86vy4KYwC00RaTNATG3"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please Pay: {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4>pay: ${appointment.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;

/*
1.install stripe and stripe-react 
2.set Publish key
3.elements
4.Checkout form 
------
5.Create payment method
6.server create payment intent
*/
