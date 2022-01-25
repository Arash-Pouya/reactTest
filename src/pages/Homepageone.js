import React, { useState } from "react";
import "./Homepageone.css";
import Search from "../components/Search/Search";
import Order from "../components/Order/Order";
import axios from "axios";
const Homepageone = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const search = (searchValue) => {
    setLoading(true);

    axios({
      method: "get",
      url: `https://rapdana.herokuapp.com/api/order?name=${searchValue}`,
    })
      .then((response) => {
        console.log(response.data);
        const Flys = response.data[0].customer;
        if (Flys === response.data[0].customer) {
          setOrders(Flys);
        }
        setLoading(false);
      })
      .catch(function (error) {
        alert("مشتری مورد نظر پیدا نشد");
        // <p>{error}</p>;
      });
  };
  return (
    <div className="Search">
      <Search search={search} />
      {loading ? <span></span> : <Order person={orders} />}
    </div>
  );
};

export default Homepageone;
