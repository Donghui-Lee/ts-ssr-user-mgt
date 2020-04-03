import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterState } from '../../../modules/authRegister';
import {
  AuthFormBlock,
  StyledInput,
  ButtonWidthMarginTop,
  Footer,
} from '../AuthForm';

type AuthFromPros = {
  form: RegisterState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function AuthRegisterForm({ form, onChange, onSubmit }: AuthFromPros) {
  return (
    <AuthFormBlock>
      <h3>회원가입</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          onChange={onChange}
          value={form.username}
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          type="password"
          onChange={onChange}
          value={form.password}
          placeholder="비밀번호"
        />

        <StyledInput
          autoComplete="new-password"
          name="passwordConfirm"
          type="password"
          onChange={onChange}
          value={form.passwordConfirm}
          placeholder="비밀번호 확인"
        />

        <ButtonWidthMarginTop cyan fullWidth>
          회원가입
        </ButtonWidthMarginTop>
      </form>
      <Footer>
        <Link to="/login">로그인</Link>
      </Footer>
    </AuthFormBlock>
  );
}

export default AuthRegisterForm;