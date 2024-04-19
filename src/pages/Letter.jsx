import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../services/apiURL";
import Spinner from "../ui/Spinner";
import LetterList from "../letter/LetterList";

import styled from "styled-components";
import ButtonBack from "../ui/ButtonBack";
import AlphabetList from "../ui/AlphabetList";

const StyledLetter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function Letter() {
  const { letters } = useParams();

  const [letter, setLetter] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(
    function () {
      async function getLetter() {
        try {
          setLoading(true);
          const res = await fetch(`${API_URL}/search.php?f=${letters}`);
          if (!res.ok) throw Error("Failed to load letter data");
          const data = await res.json();

          setLetter(data.meals);
        } catch (err) {
          console.log(err.message);
        } finally {
          setLoading(false);
        }
      }
      getLetter();
    },
    [letters]
  );

  if (isLoading) return <Spinner />;

  return (
    <div>
      {letter ? (
        <StyledLetter>
          {letter?.map((letterList) => (
            <LetterList key={letterList.idMeal} letterlist={letterList} />
          ))}
        </StyledLetter>
      ) : (
        <>
          <h4 className="letter-result-not-found">
            No recipe found for letter {letters}
          </h4>
          <div className="back-btn-block">
            <ButtonBack />
          </div>
        </>
      )}

      <div className="aplhabet-list">
        <AlphabetList />
      </div>
    </div>
  );
}

export default Letter;
