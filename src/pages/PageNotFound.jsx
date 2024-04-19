import ButtonBack from "../ui/ButtonBack";
import styled from "styled-components";

const StyledPageNotFound = styled.div`
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledText = styled.p``;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <StyledText>Page not found 😮</StyledText>
      <div>
        <ButtonBack />
      </div>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
