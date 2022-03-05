import React, { useState } from "react";
import "./Customer.css";
import Order from "../components/Order/Order";
import Search from "../components/Search/Search";
import axios from "axios";
const Customer = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrder] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);
    if (searchValue === "") {
      setErrorMessage("لطفا نام را به درستی وارد کنید");
      setLoading(false);
    } else {
      let URL = `https://rapadana.ir/api/order?order_id=${searchValue}`;

      axios({
        method: "get",
        url: URL,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      }).then((response) => {
        if (response.status === 200) {
          const info = response.data;
          setOrder(info);
          setLoading(false);
        } else {
          setErrorMessage("متاسفانه مشتری مورد نظر یافت نشد");
          setLoading(false);
        }
      });
    }
  };
  return (
    <div className="back">
      <div className="Search">
        <Search search={search} />
      </div>
      {loading && !errorMessage ? <span></span> : errorMessage ? <div className="errorMessage">{errorMessage}</div> : <Order person={orders} />}
    </div>
  );
};

export default Customer;
