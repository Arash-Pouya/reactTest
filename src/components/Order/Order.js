import React,{useEffect} from "react";
import "./Order.css";
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';

import { MDBTable, MDBListGroup, MDBBtn, MDBListGroupItem, MDBTableBody } from "mdb-react-ui-kit";

const Order = ({ person }) => {
	const location = useLocation();

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		// const query = new URLSearchParams(window.location.search);
		const values = QueryString.parse(location.search);

		if (values.success) {
			console.log(
				'Order placed! You will receive an email confirmation.'
			);
		}

		if (values.canceled) {
			console.log(
				"Order canceled -- continue to shop around and checkout when you're ready."
			);
		}
	}, []);
  return (
    <section className="order">
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
      <form
				action={`https://rapdana.herokuapp.com/api/pay?name=${person.[0].customer.name}&order_id=${person.[0].order_id}`}
				method='POST'
			>
				<button type='submit'>
					Checkout
				</button>
			</form>
      {/* <MDBBtn outline rounded color="success" onClick={()=>{
        window.open(`https://rapdana.herokuapp.com/api/pay?name=${person.[0].customer.name}&order_id=${person.[0].order_id}`)
      
      }}>
        پرداخت
      </MDBBtn> */}
    </section>
  );
};

export default Order;

// https://rapdana.herokuapp.com/api/pay/cart/4W8SSVQXES/?Authority=A00000000000000000000000000319670799&Status=NOK