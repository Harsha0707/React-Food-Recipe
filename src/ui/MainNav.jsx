import { NavLink } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";
import styled from "styled-components";
import PropTypes from "prop-types";

MainNav.propTypes = {
  setIsOpen: PropTypes.any,
};

const List = styled.li`
  padding-bottom: 15px;
`;

const StyledNav = styled.nav`
  position: fixed;
  background-color: #fff;
  height: 100%;
  left: 0;
  top: 0;
  max-width: 25rem;
  width: 100%;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  color: #121212;
  text-decoration: none;
  text-transform: uppercase;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 20px 0;
`;

const StyledCloseBtn = styled(HiMiniXMark)`
  width: 30px;
  height: 30px;
  color: #000;
`;

function MainNav({ setIsOpen }) {
  function handleOpenNav() {
    setIsOpen((open) => !open);
  }

  return (
    <StyledNav>
      <StyledButton onClick={handleOpenNav}>
        <StyledCloseBtn />
      </StyledButton>
      <StyledList>
        <List>
          <StyledNavLink to="category" onClick={handleOpenNav}>
            Category
          </StyledNavLink>
        </List>
        <List>
          <StyledNavLink to="search" onClick={handleOpenNav}>
            Search
          </StyledNavLink>
        </List>
      </StyledList>
    </StyledNav>
  );
}

export default MainNav;
