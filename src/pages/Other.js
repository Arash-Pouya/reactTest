import axios from "axios";
import React, { useState } from "react";
import Order from "../components/Order/Order";

const Other = () => {
  const [result, setResult] = useState([]);
  const handleOnChange = async (event) => {
    event.preventDefault();
    const { data } = await axios.get(`https://rapdana.herokuapp.com/api/order/?name=${event.target.value}`);
    console.log(data[0].customer);
    setResult(data);
  };
  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      {/* <Order person={result} /> */}
    </div>
  );
};

export default Other;
