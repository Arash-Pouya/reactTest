import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtnGroup, MDBBtn } from "mdb-react-ui-kit";

const Card = (props) => {
  return (
    <MDBCard alignment="center" style={{ maxWidth: "22rem", color: "black" }}>
      <MDBCardHeader>{props.name}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{props.about}</MDBCardTitle>
        <MDBBtn outline color="success" href={props.gitlink}>
          Github
        </MDBBtn>
        <MDBBtn outline color="success" href={props.gitlink}>
          Github
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
