import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginField, initializeLoginForm } from '../../modules/authLogin';
import { useEffect } from 'react';
import AuthLoginForm from '../../components/Auth/AuthLoginForm';
import { RootState } from '../../modules';

function LoginForm() {
  const dispatch = useDispatch();
  const { form } = useSelector((state: RootState) => ({
    form: state.authLogin,
  }));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(
      changeLoginField({
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 구현예정

    // test
    window.location.href = 'http://localhost:3000/Home';
    
  };

  // 컴포넌트가 처음 렌더링될 때 form 초기화
  useEffect(() => {
    dispatch(initializeLoginForm());
  }, [dispatch]);

  return <AuthLoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
}

export default LoginForm;