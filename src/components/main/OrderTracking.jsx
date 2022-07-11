import React, { useState } from "react";
import Spinner from "../../components/main/Spinner/Spinner";
export default function OrderTracking(props) {
  const [searchValue, setSearchValue] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${searchValue}`)
      .then((response) => response.json())
      .then((post) => {
        console.log(post);
        setLoading(false);
        setTitle(post.title);
      });
  };

  return (
    <section className="cta">
      <div className="cta-item">
        <div className="cta-text">
          <h2>Get early access today</h2>
          <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        </div>
        <form className="cta-form mt-2" action="">
          <input ref={props.inputRef} className="input-block" type="text" value={searchValue} onChange={handleSearchInputChanges} />
        </form>
        <button className="btn-block" onClick={callSearchFunction}>
          Get Started For Free
        </button>
        {loading ? <Spinner /> : <h1>{title}</h1>}
      </div>
    </section>
  );
}
