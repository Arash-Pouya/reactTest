/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody } from "mdb-react-ui-kit";
import ReactTooltip from "react-tooltip";
import "./App.css";
import Header from "../src/components/Header/Header";
import Intro from "../src/components/Intro/Intro";
import Customer from "./pages/Customer";
import Textarea from "./components/TextArea/Textarea";
import Footer from "../src/components/Footer/footer";
import Sear from "../src/assets/images/search.png";
const App = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <div className="App">
      <Header />
      <Intro />
      <h4 className="titletext">برای ثبت درخواست طراحی سایت و یا ارسال هرگونه پیشنهاد فرم زیر را تکمیل کنید</h4>
      <Textarea />
      <Footer />
      <div className="IMG">
        <a data-tip="در صورتیکه سفارشی برای شما ثبت شده بر روی تصویر ذره بین کلیک کنید">
          <img src={Sear} onClick={toggleShow} />
        </a>
        <ReactTooltip className="extraClass" delayHide={1000} effect="solid" />
      </div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog size="xl">
          <MDBModalContent>
            <MDBModalBody>
              <Customer />
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default App;
