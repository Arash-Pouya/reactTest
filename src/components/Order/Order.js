import React from "react";
import "./Order.css";
import { MDBTable, MDBListGroup, MDBBtn, MDBListGroupItem, MDBTableBody } from "mdb-react-ui-kit";

const Order = ({ person }) => {
  return (
    <div className="order">
      <MDBTable responsive>
        <MDBTableBody>
          <tr>
            <th scope="row">نام مشتری :</th>
            <td>{person[0].customer.name}</td>
          </tr>
          <tr>
            <th scope="row">شماره تماس :</th>
            <td>{person[0].customer.phone}</td>
          </tr>
          <tr>
            <th scope="row">آدرس ایمیل :</th>
            <td>{person[0].customer.email}</td>
          </tr>
          <tr>
            <th scope="row">آدرس :</th>
            <td>{person[0].customer.address}</td>
          </tr>
          <tr>
            <th scope="row">شرایط پروژه :</th>
            <td>
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem>{person[0].content}</MDBListGroupItem>
              </MDBListGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">قیمت :</th>
            <td>{person[0].price} (تومان)</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBBtn outline rounded color="success" onClick={()=>{
        window.open(`https://rapadana.ir/api/pay?name=${person.[0].customer.name}&order_id=${person.[0].order_id}`)
      
      }}>
        پرداخت
      </MDBBtn>
    </div>
  );
};

export default Order;
