import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../services/apiURL";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import RecipeIngredient from "../ingredient/RecipeIngredient";

const StyledRecipe = styled.div``;

function Recipe() {
  const { ingredients } = useParams();
  const [mealIngredients, setMealIngredients] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const ingredientId = ingredients.split("-");
  const newIngredientId = ingredientId[0];

  useEffect(
    function () {
      async function getIngredients() {
        try {
          setisLoading(true);
          const res = await fetch(`${API_URL}/lookup.php?i=${newIngredientId}`);
          if (!res.ok) throw new Error("Failed to fetch ingredients");
          const data = await res.json();
          setMealIngredients(data.meals);
        } catch (err) {
          console.log(err.message);
        } finally {
          setisLoading(false);
        }
      }
      getIngredients();
    },
    [newIngredientId]
  );

  if (isLoading) return <Spinner />;

  return (
    <StyledRecipe>
      {mealIngredients.map((mealIngredient) => (
        <RecipeIngredient
          mealIngredient={mealIngredient}
          key={mealIngredient.idMeal}
        />
      ))}
    </StyledRecipe>
  );
}

export default Recipe;
