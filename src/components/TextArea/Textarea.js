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
      let res = await fetch("https://rapadana.ir/api/customer-request/", {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          message: message,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setMessage("");
        setError(<p style={{ color: "green" }}>پیام شما با موفقیت ارسال شد</p>);
      } else {
        setError(<p style={{ color: "red" }}>پیام شما ارسال نشد</p>);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form className="textarea" onSubmit={handleSubmit}>
        <input value={name} placeholder="آدرس ایمیل" onChange={(e) => setName(e.target.value)}></input>
        <textarea value={message} placeholder="متن پیام" onChange={(e) => setMessage(e.target.value)}></textarea>
        <MDBBtn type="submit">ارسال</MDBBtn>
        <div className="setError">{error ? <p>{error}</p> : null}</div>
      </form>
    </div>
  );
};

export default Textarea;
