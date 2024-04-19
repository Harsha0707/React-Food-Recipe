import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import Heading from "./Heading";

Country.propTypes = {
  countryLoader: PropTypes.any,
};

const StyledCountryList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
`;

const CountryNav = styled(NavLink)`
  color: #121212;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

function Country({ countryLoader }) {
  return (
    <>
      <Heading as="h2">Browse by Country</Heading>
      <StyledCountryList>
        {countryLoader.map((country, index) => (
          <CountryNav key={index} to={`country/${country.strArea}`}>
            {country.strArea}
          </CountryNav>
        ))}
      </StyledCountryList>
    </>
  );
}

export default Country;
