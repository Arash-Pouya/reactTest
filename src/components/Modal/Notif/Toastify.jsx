import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastify.css";
export default function Toastify({ type = "info", message = "", theme = "dark" }) {
  useEffect(() => {
    if (message) {
      toast[type](message, { theme: "dark" });
    }
  }, [message, theme, type]);
  return <ToastContainer position="top-center" autoClose={4000} hideProgressBar={false} newestOnTop={false} theme="light" closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />;
}
