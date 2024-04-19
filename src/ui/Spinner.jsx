import styled, { keyframes } from "styled-components";

const StyledSpinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinnerEffect = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid #f7f7f7;
  border-top: 3px solid #121212;
  animation: ${spinAnimation} 1s linear infinite;
`;

function Spinner() {
  return (
    <StyledSpinner>
      <StyledSpinnerEffect></StyledSpinnerEffect>
    </StyledSpinner>
  );
}

export default Spinner;
