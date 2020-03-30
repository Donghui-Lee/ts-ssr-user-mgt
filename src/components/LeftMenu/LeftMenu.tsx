import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  list-style:none;
`;

const StyledLabel = styled.div`
  color: #fff;
`;

function LeftMenu() {
  return (
    <List>
      <li>
      <Link to="/">
          <StyledLabel>HOME</StyledLabel>
        </Link>
      </li>
      <li>
        <Link to="/UserList">
          <StyledLabel>GitHub 사용자</StyledLabel>
        </Link>
      </li>
    </List>
  );
}

export default LeftMenu;
