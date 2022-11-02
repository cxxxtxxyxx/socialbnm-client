import React from 'react';
import styled from '@emotion/styled';
import BookItem from './BookItem/index';
import { AiOutlineMenu } from 'react-icons/Ai';

const BookMarkCardBlock = styled.div`
  border-radius: 7px;
  min-width: 300px;
  padding: 10px;
  background-color: #815854;
  color: #f9ebde;
  margin: 10px;
  max-height: 500px;
  overflow: auto;

  .card__header {
    display: flex;
    justify-content: space-between;
    header {
      font-size: 20px;
    }
    margin-bottom: 10px;
  }
  ul {
    padding: 10px;
    margin: 0;
    width: 280px;
    height: 80%;
    margin-bottom: 12px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  ul::-webkit-scrollbar {
    width: 10px;
  }
  ul::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  ul::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }

  ul li {
    margin-bottom: 10px;
  }
  .add__btn {
    position: sticky;
    background-color: #f9ebde;
    color: #815854;
    &:hover {
      opacity: 0.3;
      color: white;
      background-color: #06000d;
    }
    border-radius: 3px;
    transition: all 300ms ease-in;
    bottom: 0;
    padding: 10px;
    width: 100%;
  }
`;

export default function BookMarkCard() {
  return (
    <BookMarkCardBlock>
      <div className="card__header">
        <header>Category</header>
        <button>
          <AiOutlineMenu />
        </button>
      </div>
      <ul>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
        <li>
          <BookItem />
        </li>
      </ul>
      <button className="add__btn">Add a card</button>
    </BookMarkCardBlock>
  );
}
