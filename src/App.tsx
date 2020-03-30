import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserListPage from "./pages/UserListPage";
import LeftMenu from "./components/LeftMenu";

const StyledBoard = styled.div`
  display: flex;
  width: 100%;
  height: 977px;
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

function App() {
  return (
    <BrowserRouter>
      <StyledBoard>
        <StyledLeftMenu>
          <LeftMenu />
        </StyledLeftMenu>
        <StyledContext>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/UserList" component={UserListPage} />
          </Switch>
        </StyledContext>
      </StyledBoard>
    </BrowserRouter>
  );
}

export default App;
