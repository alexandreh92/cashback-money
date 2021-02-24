import styled from 'styled-components';
import MdiIcon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { lighten } from 'polished';

export const Title = styled.h1`
  text-align: center;

  color: ${({ theme }) => theme.colors.black};
  transition: all 200ms ease;

  margin-bottom: 30px;

  & > span {
    color: ${({ theme }) => theme.colors.lemoney};
    transition: all 200ms ease;
  }
`;

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 230px);
  grid-auto-rows: 290px;
  grid-gap: 0 30px;
  justify-content: center;

  @media (max-width: 1090px) {
    grid-template-columns: repeat(3, 230px);
  }
  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 230px);
  }
  @media (max-width: 550px) {
    grid-template-columns: 230px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 450px;
  height: 36px;
  border-radius: 36px;

  box-shadow: 5px 5px 32px -4px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  padding: 0 10px 0 38px;

  font: 14px/16px 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.black};

  transition: all 200ms ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:hover,
  &:active {
    & + svg > path {
      fill: ${({ theme }) => lighten(0.2, theme.colors.lemoney)}!important;
      transition: all 200ms ease;
    }
  }

  @media (max-width: 550px) {
    width: 260px;
  }
`;

export const Icon = styled(MdiIcon).attrs(({ theme }) => ({
  path: mdiMagnify,
  size: 1,
  color: theme.colors.lemoney,
}))`
  position: absolute;
  left: 8px;
  top: 7px;
`;
