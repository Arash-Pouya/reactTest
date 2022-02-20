import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit";
import ReactTooltip from "react-tooltip";
import "./App.css";
import Header from "../src/components/Header/Header";
import Intro from "../src/components/Intro/Intro";
import Customer from "./pages/Customer";
import Sear from "../src/assets/images/search.png";
const App = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <div className="App">
      <Header />
      <Intro />
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
              <Router>
                <Route path="/" component={Customer} />
              </Router>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
