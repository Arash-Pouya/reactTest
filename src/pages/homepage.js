import axios from "axios";
import React, { useState } from "react";

const Homepage = () => {
  const [result, setResult] = useState({});
  const handleOnChange = async (event) => {
    event.preventDefault();
    const { data } = await axios.get(`https://rapdana.herokuapp.com/api/order/?name=${event.target.value}`);
    // setResult(data);
    // console.log(data);
  };
  return (
    <div>
      <input onChange={handleOnChange} />
    </div>
  );
};

export default Homepage;
