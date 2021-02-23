import styled from 'styled-components';
import MdiIcon from '@mdi/react';

export const Container = styled.div`
  display: block;
  padding: 10px 20px;
  text-align: left;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
  font-family: 'OpenSans', sans-serif;
  box-shadow: none;
  height: auto;
  line-height: 1em;
  white-space: nowrap;
  user-select: none;
  display: flex;
  align-items: center;
  transition: color 200ms ease;

  svg {
    margin-right: 5px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.lemoney};
  }
`;

export const Icon = styled(MdiIcon)``;
