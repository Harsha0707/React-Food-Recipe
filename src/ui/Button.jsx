import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.4rem 0.8rem;
    cursor: pointer;
  `,
  medium: css`
    font-size: 1.1rem;
    text-transform: uppercase;
    padding: 1.2rem 1.6rem;
    cursor: pointer;
  `,
  large: css`
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1.2rem 2.4rem;
    cursor: pointer;
  `,
};

const variation = {
  primary: css`
    background-color: #000;
    border: 1px solid #000;
    color: #fff;
    transition: all 0.4s ease;
    border-radius: 5px;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  `,
  secondary: css`
    background-color: #efefef;
    border: 1px solid #efefef;
    color: #fff;
    transition: all 0.4s ease;
    border-radius: 5px;

    &:hover {
      background-color: #fff;
      color: #efefef;
    }
  `,
};

const Button = styled.button`
  ${(props) => sizes[props.sizes]}
  ${(props) => variation[props.variation]}
`;

Button.defaultProps = {
  sizes: "small",
  variation: "primary",
};

export default Button;
