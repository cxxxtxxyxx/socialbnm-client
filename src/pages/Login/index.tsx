import React from 'react';
import styled from '@emotion/styled';
import LoginForm from './../../components/LoginForm/index';

const LoginBlock = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9ebde;
`;
export default function Login() {
  return (
    <LoginBlock>
      <LoginForm />
    </LoginBlock>
  );
}
