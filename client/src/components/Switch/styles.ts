import styled from 'styled-components';

export const Container = styled.input`
  cursor: pointer;

  position: relative;
  appearance: none;
  outline: none;
  width: 30px;
  height: 17px;
  background-color: #ffffff;
  border: 1px solid #d9dadc;
  border-radius: 50px;
  box-shadow: inset -20px 0 0 0 #ffffff;
  transition-duration: 200ms;

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 13px;
    height: 13px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:checked {
    border-color: ${({ theme }) => theme.colors.lemoney};
    box-shadow: inset 14px 0 0 0 ${({ theme }) => theme.colors.lemoney};
  }

  &:checked:after {
    left: 14px;
    box-shadow: -2px 4px 3px rgba(0, 0, 0, 0.05);
  }
`;
