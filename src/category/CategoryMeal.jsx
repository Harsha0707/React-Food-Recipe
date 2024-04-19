import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

CategoryMeal.propTypes = {
  mealName: PropTypes.any,
  meal: PropTypes.any,
  mealImage: PropTypes.any,
  idMeal: PropTypes.any,
};

const MealList = styled.div`
  text-align: center;
  padding: 20px 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const MealImage = styled.img`
  width: 100%;
`;

// const MealHeading = styled.h3``;

function CategoryMeal({ mealName }) {
  const { strMeal: meal, strMealThumb: mealImage, idMeal } = mealName;
  const navigate = useNavigate();

  const formattedMealName = meal.replace(/\s+/g, "-");
  const shortMeal = meal.length > 20 ? `${meal.slice(0, 20)}...` : meal;

  return (
    <MealList>
      <MealImage src={mealImage} />
      <h3>{shortMeal}</h3>
      <Button
        onClick={() => navigate(`/ingredients/${idMeal}-${formattedMealName}`)}
      >
        View Recipe
      </Button>
    </MealList>
  );
}
export default CategoryMeal;
