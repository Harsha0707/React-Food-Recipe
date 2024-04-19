import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

SearchList.propTypes = {
  searchMeal: PropTypes.any,
};

const StyledSearchList = styled.li`
  text-align: center;
  padding: 20px 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const StyledListImage = styled.img`
  width: 100%;
`;

function SearchList({ searchMeal }) {
  const { idMeal: id, strMeal: mealName, strMealThumb: mealImage } = searchMeal;
  const navigate = useNavigate();

  const formattedMealName = mealName.replace(/\s+/g, "-");

  return (
    <StyledSearchList>
      <StyledListImage src={mealImage} alt={`${mealName}--${id}`} />
      <h3>{mealName}</h3>
      <Button
        onClick={() => navigate(`/ingredients/${id}-${formattedMealName}`)}
      >
        View Recipe
      </Button>
    </StyledSearchList>
  );
}

export default SearchList;
