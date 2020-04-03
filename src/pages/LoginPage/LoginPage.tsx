import React from 'react';
import AuthTemplate from '../../components/Auth/AuthTemplate';
import LoginForm from '../../container/AuthLogin';

function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}

export default LoginPage;