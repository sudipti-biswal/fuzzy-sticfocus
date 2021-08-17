import React, { Fragment } from "react";
// import Footer from '../../components/Footer'
import "./AuthLayout.scss";

const AuthLayout = ({ children }) => {
  return (
    <Fragment>
      {children}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default AuthLayout;
