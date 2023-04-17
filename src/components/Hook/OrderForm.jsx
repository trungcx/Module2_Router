// {someThing && <div></div>}
//const phoneRegex = /^\d{10}$/;
import React, { useState } from "react";

function OrderForm(props) {
  // ***useState**//
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  //
  function componentDidMount() {
    console.log("componentDidMount da chay");
  }
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !address || !phone) {
      setError("Name, address, phone should be entered");
      return false;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
      setError("Phone number length should be 10 nums.");
      return false;
    }
    setSuccess(true);
    setError("");
    console.log("hehre");
  };
  return (
    <div>
      <h4>[Thực hành] 1. Thực hành xây dựng và xử lý form trong ReactJS</h4>
      {!success ? (
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <label>
            Name:
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <br />
          <label>
            Note:
            <textarea
              type="text"
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </label>
          <br />
          <br />
          <button type="submit">Order</button>
        </form>
      ) : (
        <p>Order success</p>
      )}
    </div>
  );
}

export default OrderForm;
