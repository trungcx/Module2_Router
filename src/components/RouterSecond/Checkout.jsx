import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

function Checkout(props) {
  const isCheckout = false;
  return isCheckout ? <Home /> : <Navigate to="/login" />;
}

export default Checkout;
