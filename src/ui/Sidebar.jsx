import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside``;

function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
