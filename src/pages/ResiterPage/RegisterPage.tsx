import React from 'react';
import AuthTemplate from '../../components/Auth/AuthTemplate';
import RegisterForm from '../../container/AuthRegister';


function RegisterPage() {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
}

export default RegisterPage;