import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButtonBack = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  background-color: #000;
  border: 1px solid #000;
  color: #fff;
  transition: all 0.4s ease;
  border-radius: 5px;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

function ButtonBack() {
  const navigate = useNavigate();

  function handleBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return <StyledButtonBack onClick={handleBack}>&larr; Back</StyledButtonBack>;
}

export default ButtonBack;
