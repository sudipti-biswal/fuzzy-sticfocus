import React from "react";
import { HStack, Text } from "@chakra-ui/react";

import "./SocialAuthButton.scss";

function SocialAuthButton({ socialIconImage, text, socialName, disabled, onClick }) {
  return (
    <button className="social__auth__button" disabled={disabled} onClick={onClick}>
      <HStack justify="space-evenly" >
        <img src={socialIconImage} alt="Social Icon" />
        <Text>
          <span className="text">{text} </span>
          <span className="social__name">{socialName}</span>
        </Text>
      </HStack>
    </button>
  );
}

export default SocialAuthButton;
