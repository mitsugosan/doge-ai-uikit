import React from "react";
import styled from "styled-components";
import PanIcon from "./PanIcon";
import { SpinnerProps } from "./types";

const Container = styled.div`
  position: relative;
`;

const FloatingPanIcon = styled(PanIcon)`
  position: absolute;
  top: 40px;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <FloatingPanIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
