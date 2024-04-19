import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const LetterListImage = styled.img`
  width: 100%;
`;

LetterList.propTypes = {
  letterlist: PropTypes.any,
};

const StyledLetterList = styled.div`
  text-align: center;
  padding: 20px 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

function LetterList({ letterlist }) {
  const { strMealThumb: img, idMeal: id, strMeal: meal } = letterlist;
  const navigate = useNavigate();

  const formattedMealName = meal.replace(/\s+/g, "-");

  console.log(letterlist);

  return (
    <>
      <StyledLetterList>
        <LetterListImage src={img} alt={`${meal}--${id}`} />
        <div>
          <h3>{meal}</h3>
          <Button
            onClick={() => navigate(`/ingredients/${id}-${formattedMealName}`)}
          >
            View more
          </Button>
        </div>
      </StyledLetterList>
    </>
  );
}

export default LetterList;
