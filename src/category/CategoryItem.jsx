import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

CategoryItem.propTypes = {
  category: PropTypes.any,
  idCategory: PropTypes.any,
  strCategory: PropTypes.any,
  strCategoryThumb: PropTypes.any,
};

const StyledItem = styled.li`
  padding: 20px 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const StyledItemBlock = styled.div`
  text-align: center;
`;

function CategoryItem({ category }) {
  const {
    idCategory,
    strCategory: categoryName,
    strCategoryThumb: categoryImage,
  } = category;

  const navigate = useNavigate();

  return (
    <StyledItem>
      <StyledItemBlock>
        <img src={categoryImage} alt={`${categoryName}--${idCategory}`} />
        <h2>{categoryName}</h2>
        <Button onClick={() => navigate(`/category/${categoryName}`)}>
          Show more
        </Button>
      </StyledItemBlock>
    </StyledItem>
  );
}

export default CategoryItem;
