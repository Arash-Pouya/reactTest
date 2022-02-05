import React from "react";
import "./Order.css";
import { MDBTable, MDBListGroup, MDBBtn, MDBListGroupItem, MDBTableBody } from "mdb-react-ui-kit";

const Order = ({ person }) => {
  return (
    <div className="order">
      <MDBTable responsive>
        <MDBTableBody>
          <tr>
            <th scope="row">نام مشتری</th>
            <td>{person.name}</td>
          </tr>
          <tr>
            <th scope="row">مشخصات محصول</th>
            <td>{person.email}</td>
          </tr>
          <tr>
            <th scope="row">شرایط انجام پروژه</th>
            <td>
              <MDBListGroup style={{ minWidth: "22rem" }}>
                <MDBListGroupItem>{person.created}</MDBListGroupItem>
                <MDBListGroupItem>{person.updated}</MDBListGroupItem>
                <MDBListGroupItem>مورد بعدی</MDBListGroupItem>
                <MDBListGroupItem>مورد بعدی</MDBListGroupItem>
              </MDBListGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">قیمت</th>
            <td>3000000</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBBtn outline rounded color="success">
        پرداخت
      </MDBBtn>
    </div>
  );
};

export default Order;
