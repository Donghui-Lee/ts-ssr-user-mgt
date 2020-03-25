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
          <StyledLabel>사용자조회</StyledLabel>
        </Link>
      </li>
    </List>
  );
}

export default LeftMenu;
