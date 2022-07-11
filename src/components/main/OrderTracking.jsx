import React from "react";

export default function OrderTracking() {
  return (
    <section className="cta">
      <div className="cta-item">
        <div className="cta-text">
          <h2>Get early access today</h2>
          <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        </div>
        <form className="cta-form mt-2" action="">
          <input className="input-block" type="text" placeholder="example@email.com" /> <button className="btn-block">Get Started For Free</button>
        </form>
      </div>
    </section>
  );
}
