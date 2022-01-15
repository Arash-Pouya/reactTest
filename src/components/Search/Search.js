import React from "react";
import "./Search.css";
import { MDBInput, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn } from "mdb-react-ui-kit";
const Search = () => {
  return (
    <div className="search">
      <MDBInput label="جستجو" type="text" id="formWhite" />
      <div className="result">
        <MDBCard alignment="center">
          <MDBCardHeader>335789921</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>آقای حسین علیزاده</MDBCardTitle>
            <MDBCardTitle>سایت فروشگاه مواد غذایی</MDBCardTitle>
            <MDBBtn href="#">نمایش</MDBBtn>
          </MDBCardBody>
          <MDBCardFooter className="text-muted">در حال انجام</MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
};

export default Search;
