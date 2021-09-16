import React from "react";
import "./SideDrawer.css";
import Logo from "../../../components/logo/logo";
import Menuitems from "../Menuitems/Menuitems";
import Button from "../../../components/UI/button/button";
import Backdrop from "../../../components/UI/backdrop/Backdrop";
const SideDrawer = (props) => {
  let classes = ["SideDrawer", "close"];
  if (props.show) {
    classes = ["SideDrawer", "open"];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.show} modalClosed={props.closedrawer} />
      <div className={classes.join(" ")}>
        {/* <div style={{ height: "10%" }}>
        <Logo />
      </div> */}
        <Menuitems />
        <div className="boxbutton">
          <Button btnType="danger" clicked={() => alert("sign in page loaded....")}>
            ورود و ثبت نام
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
