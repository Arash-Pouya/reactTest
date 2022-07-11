import React, { useState } from "react";
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody } from "mdb-react-ui-kit";
import Spinner from "../../components/main/Spinner/Spinner";
import Toastify from "../Modal/Notif/Toastify";
export default function OrderTracking(props) {
  const [optSmModal, setOptSmModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [title, setTitle] = useState("");
  const [toast, setToast] = useState({ type: "info", message: "" });
  // const [notify, setNotify] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${searchValue}`)
      .then((response) => response.json())
      .then((post) => {
        // eslint-disable-next-line eqeqeq
        if (searchValue == post.id) {
          console.log(post);
          setLoading(false);
          setOptSmModal(true);
          setTitle(post.title);
        } else {
          setLoading(false);
          // setNotify(toast.error("متاسفانه سفارش شما ثبت نشده است"));
          setToast({ type: "error", message: "متاسفانه سفارش شما ثبت نشده است" });
        }
      });
  };

  return (
    <section className="cta">
      <div className="cta-item">
        <div className="cta-text">
          <h2>پیگیری سفارش</h2>
          <p>در این بخش با وارد کردن شماره پیگیری می&zwnj;تونید از وضعیت سفارش خودتون مطلع بشید</p>
        </div>
        <form className="cta-form mt-2" action="">
          <input ref={props.inputRef} className="input-block" type="text" value={searchValue} onChange={handleSearchInputChanges} />
        </form>
        <button className="btn-block" onClick={callSearchFunction}>
          پیگیری
        </button>
        {loading ? <Spinner /> : <Toastify type={toast.type} message={toast.message} />}
        <div className="sss">
          <MDBModal show={optSmModal} tabIndex="-1" setShow={setOptSmModal}>
            <MDBModalDialog size="sm">
              <MDBModalContent>
                <MDBModalBody>{title}</MDBModalBody>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
      </div>
    </section>
  );
}
