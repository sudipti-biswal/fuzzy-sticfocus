import React from "react";
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux'
import cookie from 'react-cookies'
import forYou from './screens/protected/ForYou'
import trending from './screens/protected/Trending'

import course from './screens/protected/course/Course1'
import enroll from './screens/protected/Enroll/Enroll'
import crs from './screens/protected/create-section1'

import checkout from './screens/protected/Checkout'
import createcourse from './screens/protected/CreateCourse/createcourse'
import shoppingcart from './screens/protected/Purchase/shoppingCart'
import instructor from './screens/protected/course'
import search from './screens/protected/Search/search'
// Importing Theme Toggles Component
import ThemeToggler from "./components/ThemeToggler/";

// Importing General
import AuthRoute from "./routes/AuthRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

// Importing Auth Pages



// Importing Routes
import { authRoutes, protectedRoutes } from "./routes";
import { deleteUser } from './redux/reducers/userSlice'
import { BiSearchAlt } from "react-icons/bi";

// Theme and Brand Colors Configuration For Chakra UI
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      800: "#c40a2ccc",
      900: "#c40a2c",
    },
  },
});

export default function App() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user);
const check = true;

  if (user === "undefined") {
    dispatch(deleteUser(null));
    cookie.save('user', null);
  }

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <Router>
        <Switch>
          {
            authRoutes.map(item => (
              <AuthRoute
                key={item.id}
                exact={true}
                path={item.path}
                component={item.component}
                user={user}
              />
            ))
          }


          {
            protectedRoutes.map(item => (
              <ProtectedRoute
                key={item.id}
                exact={true}
                path={item.path}
                component={item.component}
                user={user}
              />
            ))
          }


          
          <Route path="/course" extact component={course} />
          <Route path="/enrollcourse/:courseId" extact component={enroll} />
          <Route path="/checkout" extact component={checkout} />
          <Route path="/shopping-cart" extact component={shoppingcart} />
          <Route path="/instructor" extact component={instructor} />
          <Route path="/create-course" extact component={createcourse} />
          <Route path="/create-course-section" extact component={crs} />
          {/* <Route path="/search" extact component={search} /> */}
          {/* <Route path="/create-course-section" extact component={crs} /> */}

          <Route
            exact={true}
            path="/"
            render={(props) => (
              <Redirect
                to={{
                  pathname: "/for-you",
                  state: {
                    from: props.location,
                  },
                }}
              />
            )}
          />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
