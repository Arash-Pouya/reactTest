import React from "react";
import "./Order.css";
import axios from "axios";

import { MDBTable, MDBListGroup, MDBBtn, MDBListGroupItem, MDBTableBody } from "mdb-react-ui-kit";

const Order = ({ person }) => {
  const person ={}
  return (
    <div className="order">
      <MDBTable responsive>
        <MDBTableBody>
          <tr>
            <th scope="row">نام مشتری</th>
            <td>{person[0].customer.name}</td>
          </tr>
          <tr>
            <th scope="row">مشخصات محصول</th>
            <td>{person[0].customer.email}</td>
          </tr>
          <tr>
            <th scope="row">شرایط انجام پروژه</th>
            <td>
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem>{person[0].content}</MDBListGroupItem>
              </MDBListGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">قیمت</th>
            <td>{person[0].price}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBBtn outline rounded color="success" onClick={() =>{
      axios
      .post(`https://rapdana.herokuapp.com/api/pay?name=${person.[0].customer.name}&order_id=${person.[0].order_id}`)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
      }
  
      
      
      }>
        پرداخت
      </MDBBtn>
    </div>
  );
};

export default Order;
