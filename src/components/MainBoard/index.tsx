import styled from '@emotion/styled';
import BookMarkCard from './BookMarkCard';

const MainBoardBlock = styled.div`
  display: flex;
  padding: 130px 0 45px 0;
  background: #f9ebde;
  height: 100%;
  overflow-x: auto;
`;

export default function MainBoard() {
  return (
    <MainBoardBlock>
      <BookMarkCard></BookMarkCard>
      <BookMarkCard></BookMarkCard>
      <BookMarkCard></BookMarkCard>
      <BookMarkCard></BookMarkCard>
      <BookMarkCard></BookMarkCard>
      <BookMarkCard></BookMarkCard>
      <BookMarkCard></BookMarkCard>
      <BookMarkCard></BookMarkCard>
    </MainBoardBlock>
  );
}
