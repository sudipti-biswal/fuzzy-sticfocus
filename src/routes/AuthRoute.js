import React from "react";
import { Route, Redirect } from "react-router";

import AuthLayout from "../layouts/AuthLayout";

const AuthRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (user === undefined || user === null || user==='null') {
        return (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        );
      } else {
        return (
          <Redirect
            to={{
              pathname: "/for-you",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }

    }}
  />
);

export default AuthRoute;
