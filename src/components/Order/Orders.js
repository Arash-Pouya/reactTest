import React, { useEffect } from "react";
import Order from "./Order";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
const Orders = (props) => {
  // useEffect(() => {
  //console.log(props.orderlist)
  // }, [props.orderlist]);
  // let orders = props.orderlist.map((order) => (
  //   <ErrorBoundary>
  //     <Order name={order.name} email={order.email} created={order.created} updated={order.updated} />
  //   </ErrorBoundary>
  // ));
  // if (props.toggle) {
  //   return { orders };
  // }
  // return orders;
  if (props.toggle) {
    return (
      <div className="student-section">
        {props.personList?.map((person, index) => (
          <Order key={index} id={person.id} name={person.name} email={person.email} />
        ))}
      </div>
    );
  }
  return props.personList.map((person, index) => <Order key={index} id={person.id} name={person.name} email={person.email} />);
};

export default React.memo(Orders);
