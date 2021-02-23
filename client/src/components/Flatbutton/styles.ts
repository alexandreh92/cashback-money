import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
  width: 80%;
  height: 36px;

  margin: 0 auto;

  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.lemoney};
  color: ${({ theme }) => theme.colors.black};

  font: bold 14px/16px 'Roboto', sans-serif;
  text-transform: uppercase;

  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => lighten(0.2, theme.colors.lemoney)};
  }
`;
