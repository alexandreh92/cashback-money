import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  border-radius: 10px;

  box-shadow: 5px 5px 32px -4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const Image = styled.div`
  height: 135px;
  width: 100%;

  background: ${({ theme }) => theme.colors.black};
`;

export const Name = styled.h2`
  font: bold 14px/18px 'OpenSans', sans-serif;
  color: ${({ theme }) => theme.colors.black};

  padding: 0 10%;
  margin: 10px 0 20px;
`;
