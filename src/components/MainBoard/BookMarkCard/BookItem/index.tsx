import React from 'react';
import styled from '@emotion/styled';

const BookItemBlock = styled.div`
  background: #f9ebde;
  color: #815854;
  padding: 15px;
  font-size: 18px;
  border-radius: 8px;
  transition: all 200ms ease-in;
  cursor: pointer;
  &:hover {
    opacity: 0.56;
    transform: scale(1.02);
  }
  -webkit-box-shadow: 5px 4px 3px -1px rgba(0, 0, 0, 0.67);
  box-shadow: 5px 4px 3px -1px rgba(0, 0, 0, 0.67);
`;

export default function BookItem() {
  return <BookItemBlock>title</BookItemBlock>;
}
