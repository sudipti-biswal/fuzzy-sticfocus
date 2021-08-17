import React, { Fragment } from "react";
import { Box, Flex } from "@chakra-ui/react";

import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./ProtectedLayout.scss";

const Protected = ({ children }) => {

  return (
    <Fragment>
      <Header />
      <Flex className="protected__layout__wrapper" width="full">
        {window.location.pathname !== "/chat" &&
          window.location.pathname !== "/upload_video" && (
            <Box className="sidebar__wrapper">
              <Sidebar />
            </Box>
          )}
        <Flex
          className={
            window.location.pathname !== "/chat" &&
              window.location.pathname !== "/upload_video"
              ? "content__wrapper"
              : "content__wrapper_full"
          }
        >
          {children}
        </Flex>
      </Flex>
      {/* <Footer showMenu /> */}
    </Fragment>
  );
};

export default Protected;
