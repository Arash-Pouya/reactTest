import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Notif({ type = "info", message = "" }) {
  useEffect(() => {
    if (message) {
      toast[type](message);
    }
  }, [type, message]);
  return <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />;
}
