import React from "react";
import UserForm from "../components/UserForm";
import { useSelector, useDispatch } from "react-redux";
import { getUserListAsync } from "../modules/userform";
import UserList from "../components/UserList";
import styled from "styled-components";
import { RootState } from "../modules";


const StyledForm = styled.div`
    width: 80%;
    margin: 0 auto;
`;

function UserMgtContainer() {
  const {loading, data, error} = useSelector(
    (state: RootState) => state.userForm.userList
  );
  //const { username, email } = useSelector(
  //  (state: RootState) => state.userForm.formInfo
  //);

  const dispatch = useDispatch();

  const onSearch = (username: string, email: string) => {
    dispatch(getUserListAsync.request({ username, email }));
  };

  return (
    <div>
      <h3>Github 사용자 조회</h3>
      <StyledForm>
        <UserForm onSearch={onSearch} />
      </StyledForm>
      {loading && <p style={{ textAlign: "center" }}>로딩중...</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!...</p>}
      {data && (<UserList userList={data} />)}
    </div>
  );
}

export default UserMgtContainer;
