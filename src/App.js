import React from "react";
// import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody } from "mdb-react-ui-kit";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
