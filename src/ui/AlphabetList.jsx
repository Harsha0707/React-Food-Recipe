import styled from "styled-components";
import Alphabet from "./Alphabet";
import Heading from "./Heading";

const StyledAlphabetList = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: center;
  list-style-type: none;
  flex-wrap: wrap;
`;

const StyledList = styled.li`
  padding: 5px;
`;

function AlphabetList() {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      <Heading as="h2">Browse by Name</Heading>
      <StyledAlphabetList>
        {alphabets.map((alphabet, index) => (
          <StyledList key={index}>
            {index === alphabets.length - 1 ? (
              <Alphabet alphabet={alphabet} />
            ) : (
              <>
                <Alphabet alphabet={alphabet} /> /{" "}
              </>
            )}
          </StyledList>
        ))}
      </StyledAlphabetList>
    </>
  );
}

export default AlphabetList;
