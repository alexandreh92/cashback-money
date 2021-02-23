import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 230px);
  grid-auto-rows: 240px;
  grid-gap: 30px;
  justify-content: center;
`;
