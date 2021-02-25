import styled from 'styled-components';
import MdiIcon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  & > a,
  & > div {
    margin: 3px;
  }
  & > div:last-child {
    margin-right: 0;
  }
`;

export const ActionLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  transition: all 200ms ease;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.lemoney};
  }
`;

export const ActionButton = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  transition: all 200ms ease;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.lemoney};
  }
`;

export const SearchContainer = styled.div`
  position: relative;

  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;

  border-left: 1px solid ${({ theme }) => theme.colors.tableBorders};
  border-right: 1px solid ${({ theme }) => theme.colors.tableBorders};

  padding: 0 6px;

  &:hover,
  &:active {
    & > svg > path {
      fill: ${({ theme }) => lighten(0.2, theme.colors.lemoney)}!important;
      transition: all 200ms ease;
    }
  }
`;

export const SearchIcon = styled(MdiIcon).attrs(({ theme }) => ({
  size: 0.8,
  color: theme.colors.lemoney,
  path: mdiMagnify,
}))`
  position: absolute;
  left: 6px;
  align-self: center;
`;

export const SearchInput = styled.input`
  color: ${({ theme }) => theme.colors.black};

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  padding: 0 0 0 24px;

  &:hover,
  &:focus {
    & ~ svg > path {
      fill: ${({ theme }) => lighten(0.2, theme.colors.lemoney)}!important;
      transition: all 200ms ease;
    }
  }
`;

export const NewButton = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  transition: all 200ms ease;
  text-decoration: none;

  margin: 0 0 0 10px;

  font: bold 14px/16px 'Roboto', sans-serif;

  &:hover {
    color: ${({ theme }) => theme.colors.lemoney};
  }
`;

export const ExternalLink = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  transition: all 200ms ease;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.lemoney};
  }
`;
