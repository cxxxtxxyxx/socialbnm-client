import React from 'react';
import styled from '@emotion/styled';
import HeaderTitle from './HeaderTitle/index';
import HeaderNav from './HeaderNav/index';

const MainHeaderBlock = styled.div`
  display: flex;
  padding: 20px 40px;
  color: #f9ebde;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: #815854;
  justify-content: space-between;
  align-items: center;
`;

export default function MainHeader() {
  return (
    <MainHeaderBlock>
      <HeaderTitle />
      <HeaderNav />
    </MainHeaderBlock>
  );
}
