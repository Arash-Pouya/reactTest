import React from "react";

export default function Blog() {
  return (
    <section className="productive">
      <div className="productive-img">
        <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/illustration-stay-productive.png" alt="" />
      </div>
      <div className="productive-content">
        <h2>با ما به روز باشید</h2>
        <h5 className="lg-p">در وبلاگ شرکت آپادانا می&zwnj;تونید از جدیدترین مقالات و اخبار باخبر بشید ، سوالات و نظرات خودتون رو مطرح کنید</h5>
        <p className="lg-p">
          <a className="content-link" href="#">
            وبلاگ <i className="fas fa-arrow-alt-circle-right"></i>
          </a>
        </p>
      </div>
    </section>
  );
}
