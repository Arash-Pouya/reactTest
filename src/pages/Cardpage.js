import React from "react";
import "../pages/Cardpage.css";
const Cardpage = (props) => {
  return (
    <React.Fragment>
      <div className="Cardpage">
        <p>product example</p>
        <div className="card">
          {/* <img src={this.props.img} /> */}
          <div className="card-body">
            <h2>{}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{}</h5>
          </div>
          <button className="buy">asdasd</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cardpage;
