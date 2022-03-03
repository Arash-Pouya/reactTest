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
            <td>{person.customer.name}</td>
          </tr>
          <tr>
            <th scope="row">شماره تماس :</th>
            <td>{person.customer.phone}</td>
          </tr>
          <tr>
            <th scope="row">آدرس ایمیل :</th>
            <td>{person.customer.email}</td>
          </tr>
          <tr>
            <th scope="row">آدرس :</th>
            <td>{person.customer.address}</td>
          </tr>
          <tr>
            <th scope="row">شرایط پروژه :</th>
            <td>
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem>{person.content}</MDBListGroupItem>
              </MDBListGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">قیمت :</th>
            <td>{person.price} (تومان)</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBBtn
        outline
        rounded
        color="success"
        onClick={() => {
          window.open(`https://rapadana.ir/api/pay?name=${person.customer.name}&order_id=${person.order_id}`);
        }}
      >
        پرداخت
      </MDBBtn>
    </div>
  );
};

export default Order;
