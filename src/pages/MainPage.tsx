import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import LeftMenu from "../components/LeftMenu";
import UserListPage from "../pages/UserListPage";
import styled from "styled-components";

const StyledBoard = styled.div`
  display: flex;
  width: 100%;
  height: 650px;
  top: 0;
`;

const StyledLeftMenu = styled.div`
  border-right: 1px solid;
  width: 260px;
  max-height: 100%;
  background-color: #33332f;
`;

const StyledContext = styled.div`
  display: inline-block;
  justify-content: center;
  width: calc(100% - 260px);
  max-height: 100%;
  padding: 10px;
`;

function MainPage() {
  return (
    <StyledBoard>
      <StyledLeftMenu>
        <LeftMenu />
      </StyledLeftMenu>
      <StyledContext>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/UserList" component={UserListPage} />
          <Route path="/UserList2" component={UserListPage} />
        </Switch>
      </StyledContext>
    </StyledBoard>
  );
}

export default MainPage;
