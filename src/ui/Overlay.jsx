import styled from "styled-components";
import PropTypes from "prop-types";

Overlay.propTypes = {
  open: PropTypes.any,
  setIsOpen: PropTypes.any,
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.4);
  height: 100%;
  width: 100%;
  z-index: 1;
`;

function Overlay({ setIsOpen }) {
  function handleCloseNav() {
    setIsOpen((open) => !open);
  }

  return <StyledOverlay onClick={handleCloseNav}></StyledOverlay>;
}

export default Overlay;
