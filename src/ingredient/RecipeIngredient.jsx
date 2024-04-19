import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "../ui/Heading";

RecipeIngredient.propTypes = {
  mealIngredient: PropTypes.any,
};

const StyledIngredients = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const IngregientHeading = styled.h2`
  margin-top: 0;
`;

const IngredientList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding-bottom: 2rem;
`;

const IngredientListBlock = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`;

const StyledIngredientsImage = styled.img`
  width: 100%;
`;

const IngredientsListImage = styled.img`
  width: 100%;
`;

const IngredientsText = styled.p`
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
`;

const StyledAnchorBlock = styled.div`
  margin-top: 40px;
`;

const StyledAnchor = styled.a`
  color: #121212;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid #121212;
  border-radius: 10px;
`;

const StyledYtText = styled.p`
  font-weight: 600;
  text-transform: uppercase;
`;

const StyledSticky = styled.div`
  position: sticky;
  top: 10px;
`;

function RecipeIngredient({ mealIngredient }) {
  const {
    strArea: nation,
    strMeal: meal,
    strCategory: mealCategory,
    strInstructions: instruction,
    strMealThumb: image,
    strTags: tags,
    strYoutube: urlYT,
  } = mealIngredient;

  const ingredients = [];
  const measures = [];

  Object.keys(mealIngredient).forEach((key) => {
    if (key.startsWith("strIngredient") && mealIngredient[key]) {
      const number = key.replace("strIngredient", "");
      const measuresKey = `strMeasure${number}`;
      if (mealIngredient[measuresKey]) {
        ingredients.push(mealIngredient[key]);
        measures.push(mealIngredient[measuresKey]);
      }
    }
  });

  return (
    <>
      <div>
        <Heading as="h1">Category: {mealCategory}</Heading>
        <IngredientsText>{nation}</IngredientsText>
      </div>
      <StyledIngredients>
        <div>
          <StyledSticky>
            <StyledIngredientsImage src={image} />
            <div>{tags}</div>
          </StyledSticky>
        </div>
        <div>
          <IngregientHeading>{meal}</IngregientHeading>
          <IngredientList>
            {ingredients.map((ingredient, index) => (
              <IngredientListBlock key={index}>
                <IngredientsListImage
                  src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
                />
                {measures[index]} {ingredient}
              </IngredientListBlock>
            ))}
          </IngredientList>
          <div>{instruction}</div>
          <StyledAnchorBlock>
            {urlYT ? (
              <StyledAnchor target="blank" href={urlYT}>
                Watch on YouTube
              </StyledAnchor>
            ) : (
              <StyledYtText>No YouTube tutorial available</StyledYtText>
            )}
          </StyledAnchorBlock>
        </div>
      </StyledIngredients>
    </>
  );
}

export default RecipeIngredient;
