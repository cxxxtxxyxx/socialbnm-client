import styled from '@emotion/styled';

const HeaderTitleBlock = styled.h1`
  cursor: pointer;
  transition: opacity 300ms ease-out;
  &:hover {
    opacity: 0.5;
  }
`;

export default function HeaderTitle() {
  return <HeaderTitleBlock>Social Book & Mark</HeaderTitleBlock>;
}
