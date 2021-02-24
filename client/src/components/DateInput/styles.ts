import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 46px;
  left: 6px;

  font: 10px/12px 'OpenSans', sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.error};
`;

export const TInput = styled(DatePicker)`
  width: 100%;
  height: 36px;

  margin: 8px 0 12px;
  padding: 4px 8px;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.tableBorders};

  background: ${({ theme }) => theme.colors.backgroundSecondary};
  transition: all 200ms ease;

  color: ${({ theme }) => theme.colors.black};

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lemoney};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
