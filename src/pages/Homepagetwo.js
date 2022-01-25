import React, { useState, useEffect } from "react";
import Order from "../components/Order/Order";
import Search from "../Search";
const Homepagetwo = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrder] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    fetch("https://rapdana.herokuapp.com/api/order/?name=")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setOrder(jsonResponse.Search);
        setLoading(false);
      });
  }, []);
  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://rapdana.herokuapp.com/api/order?name=${searchValue}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setOrder(jsonResponse.Search);
          console.log(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };
  return (
    <>
      <Search search={search} />

      {loading && !errorMessage ? <span>در حال بارگذاری ...</span> : errorMessage ? <div className="errorMessage">{errorMessage}</div> : <Order orders={orders} />}
    </>
  );
};

export default Homepagetwo;
