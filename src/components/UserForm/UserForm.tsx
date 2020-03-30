import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  align-items: column;
  background: #ffffff;
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-color: #555555;
  padding: 5px 10px;
  justify-content: center;
  border-radius: 3px;
`;

const StyledFormContainer = styled.div`
  display: inline-flex;
  width: 100%;
`;

const StyledContainer = styled.div`
  display: inline-flex;
  width: 100%;
  padding-right: 20px;
`;

const StyledLabel = styled.div`
  display: inline-flex;
  font-family: Roboto;
  font-weight: bold;
  justify-content: center;
  padding: 5px;
  width: 30%;
  border-radius: 3px;
`;

const StyledInput = styled.input`
  display: inline-flex;
  font-family: Roboto;
  padding: 5px;
  width: 70%;
  border-radius: 3px;
`;

const StyledButton = styled.button`
  display: inline-flex;
  font-family: Roboto;
  color: #3c4858;
  font-weight: bold;
  width: 10%;
  padding: 5px;
  margin-right: 5px;
  justify-content: center;
  /* background-color: #00acc1; */
  border-radius: 3px;
  font-size: 12pt;
`;

type UserFormProps = {
  onSearch: (username: string, email: string) => void;
};

function UserForm({ onSearch }: UserFormProps) {
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(usernameValue, emailValue);
    setUsernameValue("");
    setEmailValue("");
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledFormContainer>
        <StyledContainer>
          <StyledLabel>사용자명</StyledLabel>
          <StyledInput
            value={usernameValue}
            onChange={onChangeUsername}
            placeholder="사용자명을 입력하세요."
          ></StyledInput>
        </StyledContainer>
        <StyledContainer>
          <StyledLabel>이메일</StyledLabel>
          <StyledInput
            value={emailValue}
            onChange={onChangeEmail}
            placeholder="이메일을 입력하세요."
          ></StyledInput>
        </StyledContainer>
      </StyledFormContainer>

      <StyledButton type="submit">조회</StyledButton>
    </StyledForm>
  );
}

export default UserForm;
