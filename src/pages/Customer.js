import React, { useState, useEffect } from "react";
import "./Customer.css";
import Order from "../components/Order/Order";
import Search from "../components/Search/Search";
import axios from "axios";
const Customer = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrder] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  // useEffect(() => {
  //   fetch("https://rapdana.herokuapp.com/api/order/?name=")
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       console.log(jsonResponse.Search);
  //       setOrder(jsonResponse.Search);
  //       setLoading(false);
  //     });
  // }, []);
  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);
    if (searchValue === "") {
      setErrorMessage("لطفا نام را به درستی وارد کنید");
      setLoading(false);
    } else {
      axios.get(`https://rapdana.herokuapp.com/api/order?name=${searchValue}`).then((response) => {
        // console.log(response.data);
        if (response.status === 200) {
          setOrder(response.data[0].customer);
          console.log(response.data[0].customer);
          setLoading(false);
        } else {
          setErrorMessage("متاسفانه مشتری مورد نظر یافت نشد");
          setLoading(false);
        }
      });
    }
  };
  return (
    <div className="Search">
      <Search search={search} />
      {loading && !errorMessage ? <span></span> : errorMessage ? <div className="errorMessage">{errorMessage}</div> : <Order person={orders} />}
    </div>
  );
};

export default Customer;
