import React from "react";
import GoogleLogin from "react-google-login";
const google = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div>
      <div>
        <h2>welcome!!</h2>
        <GoogleLogin clientId="653993432546-q6jf5t3f60ehn8lnmod9p9li7075hgj5.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={"single_host_origin"} />
        <a href="/Signup">signup</a>
      </div>
    </div>
  );
};

export default google;
