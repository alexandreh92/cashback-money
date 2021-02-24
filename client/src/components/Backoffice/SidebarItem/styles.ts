import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled(NavLink)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  align-items: center;
  padding: 0 0 0 20px;

  height: 55px;

  font: bold 16px/18px 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  position: relative;

  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.colors.placeholder};
  border-right-style: solid;
  transition: all 200ms ease;

  &:hover,
  &.active {
    background: ${({ theme }) => lighten(0.02, theme.colors.backgroundPrimary)};
    color: ${({ theme }) => theme.colors.lemoney};
    border-right-color: ${({ theme }) => theme.colors.lemoney};
    transition: all 200ms ease;
  }
`;
