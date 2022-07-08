import styled from 'styled-components';

export const ShuffledPuzzlesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 100%;
  border: 1px solid black;
  margin: 1px;
`;

export const Puzzle = styled.div<{
  image: string;
  size: number;
  leftOffset: number;
  topOffset: number;
}>`
  width: ${({ size }) => size}%;
  height: ${({ size }) => size}%;
  border: 1px solid black;
  background-image: ${({ image }) => `url(${image})`};
  background-position: ${({ leftOffset, topOffset }) => `${leftOffset}px ${topOffset}px`};
  background-size: 500px 500px;
`;
