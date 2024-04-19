import styled from "styled-components";

import { useLoaderData } from "react-router-dom";
import { getCategories } from "../services/apiFetch";
import CategoryItem from "../category/CategoryItem";
import Heading from "../ui/Heading";

const StyledCategory = styled.div``;

const CategoryList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 0;
  gap: 1.5rem;

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

function Categories() {
  const { categories } = useLoaderData();

  const totalCategories = categories.length;

  return (
    <StyledCategory>
      <Heading as="h1">Category</Heading>
      <Text>Total {totalCategories} Categories</Text>
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem category={category} key={category.idCategory} />
        ))}
      </CategoryList>
    </StyledCategory>
  );
}

export async function loader() {
  const categories = await getCategories();

  return categories;
}

export default Categories;
