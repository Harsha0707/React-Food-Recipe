import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import { HiBars3BottomLeft, HiMiniHome } from "react-icons/hi2";
import { useState } from "react";
import MainNav from "./MainNav";
import Overlay from "./Overlay";

const StyledHeader = styled.header`
  background-color: #121212;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  gap: 1rem;
`;

const StyledHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 767px) {
    gap: 0.5rem;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledHamburger = styled(HiBars3BottomLeft)`
  width: 30px;
  height: 30px;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenNav() {
    setIsOpen((open) => !open);
  }

  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <StyledButton onClick={handleOpenNav}>
          <StyledHamburger />
        </StyledButton>
        <NavLink to="/" className="home-page-link">
          <HiMiniHome />
        </NavLink>
      </StyledHeaderLeft>
      <h1 className="shop-name">Food Recipe</h1>
      <SearchInput />
      {isOpen && (
        <>
          <MainNav isOpen={open} setIsOpen={setIsOpen} />
          <Overlay setIsOpen={setIsOpen} />
        </>
      )}
    </StyledHeader>
  );
}

export default Header;
