import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

CountryMealList.propTypes = {
  countryMeal: PropTypes.any,
};

const StyledMealsImage = styled.img`
  width: 100%;
`;

const StyledCountryMealList = styled.div`
  text-align: center;
  padding: 20px 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

function CountryMealList({ countryMeal }) {
  const { strMealThumb: image, strMeal: name, idMeal: id } = countryMeal;

  const navigate = useNavigate();

  const formattedName = name.replace(/\s+/g, "-");

  console.log(countryMeal);
  return (
    <StyledCountryMealList>
      <StyledMealsImage src={image} />
      <h3>{name}</h3>
      <Button onClick={() => navigate(`/ingredients/${id}-${formattedName}`)}>
        View More
      </Button>
    </StyledCountryMealList>
  );
}

export default CountryMealList;
