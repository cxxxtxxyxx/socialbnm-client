import styled from '@emotion/styled';
import BookMarkCard from './BookMarkCard';

const MainBoardBlock = styled.div`
  display: flex;
  padding: 15px;
  background: #f9ebde;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
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
