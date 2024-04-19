import PropTypes from "prop-types";
import Heading from "./Heading";
import styled from "styled-components";

RichText.propTypes = {
  heading: PropTypes.any,
  sentence: PropTypes.any,
  headingSize: PropTypes.any,
};

const StyledRichText = styled.div`
  padding-bottom: 40px;
`;

const StyledText = styled.p`
  max-width: 60rem;
  text-align: center;
  margin: 0 auto;
`;

function RichText({ heading, sentence, headingSize }) {
  return (
    <StyledRichText>
      <Heading as={headingSize}>{heading}</Heading>
      <StyledText>{sentence}</StyledText>
    </StyledRichText>
  );
}

export default RichText;
