import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2rem;
      text-align: center;
      position: relative;
      padding-bottom: 10px;
      margin: 0 0 20px;
      font-weight: 400;

      &::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 60px;
        background-color: #12372a;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.5rem;
      text-align: center;
      position: relative;
      padding-bottom: 10px;
      margin: 0 0 20px;
      font-weight: 400;

      &::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 60px;
        background-color: #12372a;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.2rem;
      text-align: center;
      position: relative;
      padding-bottom: 10px;
      margin: 0 0 20px;
      font-weight: 400;

      &::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 60px;
        background-color: #12372a;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1rem;
      text-align: center;
      position: relative;
      padding-bottom: 10px;
      margin: 0 0 20px;
      font-weight: 400;

      &::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 60px;
        background-color: #12372a;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    `}
`;

export default Heading;
