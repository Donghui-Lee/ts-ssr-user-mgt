import React from 'react';
import { Link } from 'react-router-dom';
import { LoginState } from '../../../modules/authLogin';
import { AuthFormBlock, StyledInput, ButtonWidthMarginTop, Footer } from '../AuthForm';


type AuthFromPros = {
  form: LoginState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function AuthLoginForm({ form, onChange, onSubmit }: AuthFromPros) {
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
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
        <ButtonWidthMarginTop cyan fullWidth>
          로그인
        </ButtonWidthMarginTop>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
}

export default AuthLoginForm;