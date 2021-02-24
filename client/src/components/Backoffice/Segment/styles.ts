import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 70vh;

  border-radius: 20px;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 3px 5px 10px -4px rgba(0, 0, 0, 0.45);

  overflow-y: auto;
  overflow-x: hidden;
`;
