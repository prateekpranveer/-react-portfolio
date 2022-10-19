import React from "react";
import styled from "styled-components";
import { SwipeLeft } from "./animation";

const Contact = () => {
  return (
    <CodingMain>
      <Title>Contact Me</Title>
    </CodingMain>
  );
};

const CodingMain = styled.h1`
  animation: ${SwipeLeft} 0.3s;
`;
const Title = styled.h1``;

export default Contact;
