import React from "react";
import styled from "styled-components";
import { SwipeLeft } from "./animation";

const Coding = () => {
  return (
    <CodingMain>
      <Title>Coding Profile</Title>
    </CodingMain>
  );
};

const CodingMain = styled.h1`
  animation: ${SwipeLeft} 0.3s;
`;
const Title = styled.div``;
export default Coding;
