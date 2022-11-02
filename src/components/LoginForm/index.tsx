import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';

const LoginFormBlock = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #815854;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px -6px #000000;
  box-shadow: 5px 5px 15px -6px #000000;
  span {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 7px;
    color: #f9ebde;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      &:focus {
        border: 2px solid #f9ebde;
        -webkit-box-shadow: 5px 5px 15px -6px #000000;
        box-shadow: 5px 5px 15px -6px #000000;
      }
      background-color: #f9ebde;
      color: #815854;
      outline: none;
      padding: 5px 15px;
      margin-bottom: 10px;
      border-radius: 5px;
    }
  }
  button {
    /* -webkit-box-shadow: 5px 5px 15px -6px #000000;
    box-shadow: 5px 5px 15px -6px #000000;
    border-radius: 5px;
    padding: 5px 8px;
    background-color: white; */
    color: #815854;
    &:hover {
      background-color: white;
      opacity: 0.5;
    }
    border-radius: 25px;
    width: 104px;
    height: 40px;
    background-color: #f9ebde;
    cursor: pointer;
    outline: none;
    box-shadow: 1px 4px 0 rgb(0, 0, 0, 0.5);
    &:active {
      box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
      position: relative;
      top: 2px;
    }
  }
`;

export default function LoginForm() {
  return (
    <LoginFormBlock>
      <span>LOGIN</span>
      <form action="POST">
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="PASSWORD" />
      </form>
      <button>Login</button>
    </LoginFormBlock>
  );
}
