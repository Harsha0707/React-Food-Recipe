import { useState } from "react";
import Heading from "../ui/Heading";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledSearch = styled.div``;

const StyledForm = styled.form`
  max-width: 40rem;
  width: 100%;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input`
  min-height: 2rem;
  border-radius: 10px;
  padding: 5px 15px;
`;

const StyledButton = styled.button`
  min-height: 2rem;
  border-radius: 10px;
  background: #121212;
  color: #fff;
  padding: 15px 15px 10px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`s=${search}`);
    search("");
  }

  return (
    <StyledSearch>
      <Heading as="h1">Search</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <StyledButton type="submit" disabled={!search.length}>
          SUBMIT
        </StyledButton>
      </StyledForm>
    </StyledSearch>
  );
}

export default Search;
