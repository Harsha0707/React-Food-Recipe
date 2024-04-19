import styled from "styled-components";

import Header from "./Header";

import { Outlet } from "react-router-dom";

const StyledMain = styled.main``;

const StyledLayout = styled.div`
  max-width: 1600rem;
  margin: 0 auto;
  padding: 20px;
`;

const StyledMainLayout = styled.div``;

function AppLayout() {
  return (
    <>
      <StyledMainLayout>
        <Header>Food recipe</Header>
        <StyledLayout>
          <StyledMain>
            <Outlet />
          </StyledMain>
        </StyledLayout>
      </StyledMainLayout>
    </>
  );
}

export default AppLayout;
