import React, { useState } from "react";
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit";
import "./App.css";
import Header from "../src/components/Header/Header";
import Intro from "../src/components/Intro/Intro";
import Customer from "./pages/Customer";
import Footer from "./components/Footer/footer";
import Sear from "../src/assets/images/search.png";
const App = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <div className="App">
      <Header />
      <Intro />
      <img className="IMG" src={Sear} onClick={toggleShow} />
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog size="xl">
          <MDBModalContent>
            <MDBModalBody>
              <Customer />
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
