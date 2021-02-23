import styled from 'styled-components';

type ActiveContainer = {
  active?: boolean;
};

export const Container = styled.div<ActiveContainer>`
  position: absolute;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  outline: 0;
  top: 130%;
  text-align: left;
  transition: visibility 0.1s, opacity 0.1s linear, background-color 200ms ease,
    color 200ms ease;
  will-change: transform, opacity;
  min-width: auto;
  height: auto;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 6px;
  box-shadow: 0px 0px 5px #00000029;
  left: auto;
  right: 0;
  box-sizing: border-box;
  z-index: 11;
  padding: 14px 0px 6px 0px;
  &::before {
    transition: border-color 200ms ease;
    content: '';
    position: absolute;
    right: 21px;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: ${({ theme }) =>
      `transparent transparent ${theme.colors.backgroundSecondary} transparent`};
    z-index: 9999;
  }
`;
