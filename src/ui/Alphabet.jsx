import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

Alphabet.propTypes = {
  alphabet: PropTypes.any,
};

const StyledLetter = styled.button`
  background-color: #121212;
  color: #fff;
  padding: 5px 10px;
  border: 1px solid #121212;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #121212;
  }
`;

function Alphabet({ alphabet }) {
  const navigate = useNavigate();

  function handleLetter(e) {
    e.preventDefault();
    navigate(`/letter/${alphabet}`);
  }

  return <StyledLetter onClick={handleLetter}>{alphabet}</StyledLetter>;
}

export default Alphabet;
