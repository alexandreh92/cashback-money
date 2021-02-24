import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  height: 40px;

  border-bottom-color: ${({ theme }) => theme.colors.tableBorders};
  border-bottom-width: 1px;
  border-bottom-style: solid;

  color: ${({ theme }) => theme.colors.black};
  font: bold 16px/18px 'Roboto', sans-serif;
`;
