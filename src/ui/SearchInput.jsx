import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledInput = styled.input`
  min-height: 30px;
`;

const StyledButton = styled.button`
  min-height: 37px;
  min-width: 44px;
  background-color: #6a6a6a;

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledSearchIcon = styled(HiMagnifyingGlass)`
  color: #fff;
  height: 22px;
  width: 22px;
`;

function SearchInput() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`search/s=${search}`);
    setSearch("");
  }

  return (
    <>
      <StyledForm onSubmit={handleSearch}>
        <StyledInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <StyledButton type="submit" disabled={!search.length}>
          <HiMagnifyingGlass />
        </StyledButton>
      </StyledForm>
      <StyledLink to="search">
        <StyledSearchIcon />
      </StyledLink>
    </>
  );
}

export default SearchInput;
