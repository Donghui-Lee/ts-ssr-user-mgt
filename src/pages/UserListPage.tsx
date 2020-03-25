import React from "react";
import styled from "styled-components";
import UserForm from "../components/UserForm/UserForm";
import UserList from "../components/UserList";

const StyledForm = styled.div`
    width: 80%;
    margin: 0 auto;
`;

function UserListPage() {
  return (
    <>
      <h3>사용자 조회</h3>
      <StyledForm>
        <UserForm />
      </StyledForm>
      <UserList />
    </>
  );
};

export default UserListPage;
