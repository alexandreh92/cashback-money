import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const Box = styled.section`
  display: flex;

  min-height: 400px;
  width: 400px;

  padding: 40px 30px;

  border-radius: 20px;

  background: ${({ theme }) => theme.colors.backgroundPrimary};

  box-shadow: 5px 5px 32px -4px rgba(0, 0, 0, 0.25);

  @media (max-width: 450px) {
    width: 300px;
  }
`;
