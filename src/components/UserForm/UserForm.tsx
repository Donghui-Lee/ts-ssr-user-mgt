import React, {useReducer} from "react";
import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  align-items: column;
  background: #ffffff;
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-color: #555555;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: center; 
  border-radius: 3px;
`;

const StyledFormContainer = styled.div`
    display:inline-flex;
    width: 90%;
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

function UserForm() {
  return (
    <StyledForm>
      <StyledFormContainer>
        <StyledContainer>
          <StyledLabel>아이디</StyledLabel>
          <StyledInput  type="text"></StyledInput>
        </StyledContainer>
        <StyledContainer>
          <StyledLabel>이름</StyledLabel>
          <StyledInput type="text"></StyledInput>
        </StyledContainer>
      </StyledFormContainer>

      <StyledButton>조회</StyledButton>
    </StyledForm>
  );
};

export default UserForm;
