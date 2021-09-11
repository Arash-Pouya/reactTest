import React from "react";
import "./homepage.css";
import Header from "../../containers/Header/Header";
import Card from "../../component/Card/Card";
import Example from "../../component/SiteExample/Example";
import python from "../../assets/images/python.png";
import django from "../../assets/images/django.png";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import Grid from "@material-ui/core/Grid";

const Homepage = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Grid container spacing={0}>
        <Grid item xs>
          <Card
            images={python}
            name="پایتون"
            text="پایتون"
            textarea="پایتون یک زبان برنامه نویسی سطح بالا تفسیر شده برای برنامه نویسی عمومی است. این زبان دارای یک فلسفه طراحی است که بر خواندن کد، به خصوص با استفاده از فضای خالی مهم استوار است. Python دارای یک سیستم نوع پویا و مدیریت حافظه خودکار است و پارادایم های چندگانه برنامه نویسی را پشتیبانی می کند. مفسر پایتون برای بسیاری از سیستم عامل ها در دسترس است. این زبان برنامه نویسی معمولا به عنوان یک زبان اسکریپت نویسی برای وب اپلیکیشن ها استفاده می شود به طوری که می تواند به شکل اتوماتیک بسیاری از تسک ها را انجام داده و انجام برنامه نویسی را موثرتر نماید."
          />
        </Grid>
        <Grid item xs>
          {" "}
          <Card
            images={django}
            name="جنگو"
            text="جنگو"
            textarea="جنگو یک چارچوب (یا پلتفرم) سطح بالا برای برنامه‌نویسی وب در پایتون محسوب می‌شود که امکان «توسعه سریع» (Rapid Development) و طراحی عملگرا از برنامه‌های کاربردی تحت وب را برای برنامه‌نویسان و توسعه‌دهندگان فراهم می‌آورد. کتابخانه جنگو به کاربران اجازه می‌دهد تا با کد نویسی کمتر، برنامه‌های کاربردی به مراتب بهتری را با سرعت بیشتری تولید کنند."
          />
        </Grid>
        <Grid item xs>
          <Card
            images={javascript}
            name="جااواسکریپت"
            text="جاوااسکریپت"
            textarea="JavaScript که به اختصار JS نیز نامیده می‌شود، یکی از محبوبترین زبان‌های برنامه نویسی است. جاوا اسکریپت زبانی سطح بالا، داینامیک، شی‌گرا و تفسیری است که از شیوه‌های مختلف برنامه نویسی پشتیبانی می‌کند. از این زبان می‌توان برای برنامه نویسی سمت سرور (Server Side)، اپلیکیشن‌های موبایل، بازی و اپلیکیشن‌های دسکتاپ استفاده کرد. بنابراین می‌توان اینگونه برداشت کرد که زبان برنامه نویسی جاوا اسکریپت ، یک زبان همه فن حریف است."
          />
        </Grid>
        <Grid item xs>
          <Card
            images={react}
            name="ری اکت"
            text="ری اکت"
            textarea="ری اکت (reactjs) اساسا یک کتابخونه open-source جاوا اسکریپتی برای ساخت رابط کاربری(user interfaces) برای single page applications(اپلیکیشن های تک صفحه ای) است.این کتابخونه برای مدیریت لایه View برای وب استفاده می شود.همچنین React این امکان رو در اختیار ما میذاره که reusable UI components(کامپوننت های قابل استفاده مجدد رابط کاریری) ایجاد کنیم.React  در ابتدا توسط Jordan Walke یکی از مهندسین ارشد فیسبوک ایجاد شد.React ابتدا در سال 2011 در فیسبوک مورد استفاده قرار گرفت و سپس در سال 2012 در اینستاگرام استفاده شد.

ری اکت این امکان را در اختیار توسعه دهندگان می گذارد که وب اپلیکیشن های خیلی بزرگ که می تواند date را تغییر بدهد،بدون reload صفحه ایجاد کنند.مهم ترین اهداف React را میتوان سادگی،سرعت و مقیاس پذیر بودن دانست.تمرکز اصلی React بر روی رابط کاربری است و فقط در لایه View  در معماری MVC مطابقت دارد.این کتابخانه می تواند با کتابخانه های و فریمورک های دیگر جاوا اسکریپت مثل Angular ترکیب و مورد استفاده قرار گیرد."
          />
        </Grid>
      </Grid>
      <div className="container">
        <h1 className="head">شرکت رایانه پندار آپادانا</h1>
        <h2>طراحی وبسایت های فروشگاهی، شرکتی، آموزشی و مالی. طراحی برنامه های تحت وب سفارشی. انجام پروژه های مرتبط به علوم داده</h2>
      </div>
      <Example />
      <button
        className="Success"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://arash-pouya.github.io/BigTech/";
        }}
      >
        ثبت سفارش
      </button>
    </React.Fragment>
  );
};

export default Homepage;
