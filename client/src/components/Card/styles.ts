import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  border-radius: 10px;

  margin: 20px 0 30px;

  box-shadow: 5px 5px 32px -4px rgba(0, 0, 0, 0.25);

  position: relative;
`;

export const Image = styled.img`
  height: 135px;
  width: 100%;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  padding: 10px;
`;

export const Name = styled.h2`
  font: bold 14px/18px 'OpenSans', sans-serif;
  color: ${({ theme }) => theme.colors.black};

  padding: 0 10%;
  margin: 10px 0 20px;
`;

export const PremiumBadge = styled.span`
  position: absolute;
  top: -12px;
  right: 10px;

  padding: 6px 8px;
  border-radius: 12px;

  box-shadow: 3px 5px 10px -4px rgba(0, 0, 0, 0.45);

  background: ${({ theme }) => theme.colors.error};

  font: bold 10px/12px 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.white};
`;
