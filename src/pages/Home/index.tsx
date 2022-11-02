import React from 'react';
import styled from '@emotion/styled';
import MainHeader from '../../components/MainHeader';
import MainBoard from './../../components/MainBoard/index';

const HomeBlock = styled.div`
  overflow-y: hidden;
`;

export default function Home() {
  return (
    <HomeBlock>
      <MainBoard></MainBoard>
    </HomeBlock>
  );
}
