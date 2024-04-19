import { useEffect, useState } from "react";
import { API_URL } from "../services/apiURL";
import { useParams } from "react-router-dom";
import CategoryMeal from "./CategoryMeal";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import Heading from "../ui/Heading";
import ButtonBack from "../ui/ButtonBack";

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Text = styled.p`
  text-align: center;
  font-weight: 600;
`;

function CategoryList() {
  const { foodItemName } = useParams();

  const [categoryName, setCategoryName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getFilter() {
        try {
          setIsLoading(true);
          const res = await fetch(`${API_URL}/filter.php?c=${foodItemName}`);
          if (!res.ok) throw Error("Failed to get Food");
          const data = await res.json();
          console.log(data);
          setCategoryName(data.meals);
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      getFilter();
    },
    [foodItemName]
  );

  if (isLoading) return <Spinner />;

  console.log(categoryName);

  return (
    <>
      <Heading as="h1">{foodItemName}</Heading>
      <Text>
        {categoryName
          ? ` Total ${foodItemName} ${categoryName?.length} `
          : "No result found"}
      </Text>
      {!categoryName && (
        <div className="text-center">
          <ButtonBack />
        </div>
      )}
      <StyledList>
        {categoryName?.map((mealName) => (
          <CategoryMeal mealName={mealName} key={mealName.idMeal} />
        ))}
      </StyledList>
    </>
  );
}

export default CategoryList;
