/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./footer.css";
import { MDBFooter, MDBContainer, MDBCol, MDBIcon } from "mdb-react-ui-kit";
const Footer = (props) => {
  return (
    <div className="footer">
      <MDBFooter className="text-center text-white">
        <MDBContainer className="p-4">
          <section className="">
            <div className="row d-flex justify-content-center">
              <MDBCol lg="6">
                <div className="text">
                  <p>
                    <img src="https://img.icons8.com/nolan/40/phone.png" />
                    <span> شماره تماس : 0999999</span>
                  </p>
                  <p>
                    <img src="https://img.icons8.com/nolan/40/phone.png" />
                    <span> شماره تماس : 0999999</span>
                  </p>
                  <p>iuasdgasiudtgdui</p>
                </div>
              </MDBCol>
            </div>
          </section>
        </MDBContainer>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
          طراحی شده توسط شرکت رایانه پندار آپادانا
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
