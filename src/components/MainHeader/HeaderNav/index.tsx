import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderNavBlock = styled.div`
  font-size: 1.05rem;
  ul {
    display: flex;
  }
  li {
    cursor: pointer;
    margin: 5px;
    transition: opacity 300ms ease-out;
  }
  li:hover {
    opacity: 0.5;
  }
`;

export default function HeaderNav() {
  return (
    <HeaderNavBlock>
      <ul>
        <li>
          <NavLink to='/login'>LOGIN</NavLink>
        </li>
        <li>
          <NavLink to='/home'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/about'>ABOUT</NavLink>
        </li>
      </ul>
    </HeaderNavBlock>
  );
}
