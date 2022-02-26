import React from "react";
import Order from "./Order";
const Orders = (props) => {
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
