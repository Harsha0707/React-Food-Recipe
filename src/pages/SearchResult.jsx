import { useEffect, useState } from "react";
import AlphabetList from "../ui/AlphabetList";
import { useParams } from "react-router-dom";
import { API_URL } from "../services/apiURL";
import Spinner from "../ui/Spinner";
import SearchList from "../ui/SearchList";
import styled from "styled-components";

const StyledSearchList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SearchResultsHeader = styled.div``;

function SearchResult() {
  const { searchResults } = useParams();

  const [searchMeals, setSearchMeals] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const searchResult = searchResults.split("=")[1];

  useEffect(
    function () {
      async function getSearchResults() {
        try {
          setIsLoading(true);
          const res = await fetch(`${API_URL}/search.php?s=${searchResult}`);
          if (!res.ok) throw new Error("Failed to fetch search results");
          const data = await res.json();
          setSearchMeals(data.meals);
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      getSearchResults();
    },
    [searchResult]
  );

  if (isLoading) return <Spinner />;

  return (
    <div>
      <SearchResultsHeader>
        {searchMeals?.length ? (
          <h4>
            Total search results for {searchResult} : {searchMeals?.length}
          </h4>
        ) : (
          <h4 className="search-result-text-err">
            No meals found for {searchResult}
          </h4>
        )}
      </SearchResultsHeader>
      <StyledSearchList>
        {searchMeals?.map((searchMeal) => (
          <SearchList key={searchMeal.idMeal} searchMeal={searchMeal} />
        ))}
      </StyledSearchList>
      <AlphabetList />
    </div>
  );
}

export default SearchResult;
