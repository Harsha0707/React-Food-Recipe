import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../services/apiURL";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import CountryMealList from "../ui/CountryMealList";
import ButtonBack from "../ui/ButtonBack";

const StyledMeals = styled.div`
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

function CountryMeal() {
  const { country } = useParams();
  const [countryMeals, setCountryMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getCountryMeals() {
        try {
          setIsLoading(true);
          const res = await fetch(`${API_URL}/filter.php?a=${country}`);
          if (!res.ok) throw Error("Failed to fetch country meals");
          const data = await res.json();
          console.log(data);
          setCountryMeals(data.meals);
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      getCountryMeals();
    },
    [country]
  );

  if (isLoading) return <Spinner />;

  console.log(countryMeals);

  return (
    <>
      {countryMeals ? (
        <StyledMeals>
          {countryMeals?.map((countryMeal) => (
            <CountryMealList
              key={countryMeal.idMeal}
              countryMeal={countryMeal}
            />
          ))}
        </StyledMeals>
      ) : (
        <div className="text-center">
          <p>No result found</p>
          <ButtonBack />
        </div>
      )}
    </>
  );
}

export default CountryMeal;
