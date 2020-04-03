import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../modules';
import AuthRegisterForm from '../../components/Auth/AuthRegisterFrom';
import {
  changeRegisterField,
  initializeRegisterForm,
} from '../../modules/authRegister';

function RegisterForm() {
  const dispatch = useDispatch();
  const { form } = useSelector((state: RootState) => ({
    form: state.authRegister,
  }));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(
      changeRegisterField({
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 구현예정
  };

  // 컴포넌트가 처음 렌더링될 때 form 초기화
  useEffect(() => {
    dispatch(initializeRegisterForm());
  }, [dispatch]);

  return (
    <AuthRegisterForm form={form} onChange={onChange} onSubmit={onSubmit} />
  );
}

export default RegisterForm;