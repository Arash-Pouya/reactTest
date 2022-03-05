import React, { useState } from "react";
import "./Textarea.css";
import { MDBBtn } from "mdb-react-ui-kit";

const Textarea = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://rapadana.ir/api/customer-request", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          message: message,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setMessage("");
        setError("User created successfully");
        console.log(resJson);
      } else {
        setError("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="textarea" onSubmit={handleSubmit}>
        <input value={name} placeholder="نام خود را وارد کنید" onChange={(e) => setName(e.target.value)}></input>
        <textarea value={message} placeholder="پیغام خود را در این قسمت وارد کنید" onChange={(e) => setMessage(e.target.value)}></textarea>
        <MDBBtn type="submit">Submit</MDBBtn>
        <div className="setError">{error ? <p>{error}</p> : null}</div>
      </form>
    </div>
  );
};

export default Textarea;
