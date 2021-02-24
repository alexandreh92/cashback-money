import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &,
  & input,
  & label {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  height: 12px;
  margin-right: 4px;
`;

export const Label = styled.label`
  font: bold 12px/14px 'Roboto', sans-serif;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.black};
`;
