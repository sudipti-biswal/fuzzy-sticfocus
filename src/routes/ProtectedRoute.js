import React from "react";
import { Redirect, Route } from "react-router";
import ProtectedLayout from "../layouts/ProtectedLayout";

const ProtectedRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
     if (user !== undefined && user !== null) {
        return (
          <ProtectedLayout>
            <Component {...props} />
          </ProtectedLayout>
        );
     }
       else {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }

    }
  }

  />
);

export default ProtectedRoute;
