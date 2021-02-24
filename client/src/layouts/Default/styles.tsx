import styled from 'styled-components';
import MdiIcon from '@mdi/react';
import { mdiCog } from '@mdi/js';

import Dropdown from '~/components/Dropdown';

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  grid-template-rows: 80px 1fr 80px;
  grid-template-areas:
    'h h h'
    'b b b'
    'f f f';

  background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const Header = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  grid-area: h;

  z-index: 99;

  padding: 0 10%;

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.1);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 45px;

  background: ${({ theme }) => theme.colors.black};

  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.3);
`;

export const Name = styled.span`
  margin-left: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};

  & > span {
    color: ${({ theme }) => theme.colors.lemoney};
  }
`;

export const Body = styled.section`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  flex: 1;
  display: block;
  grid-area: b;

  padding: 30px 0 30px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lemoney};
    transition: all 200ms ease;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    transition: all 200ms ease;
  }
`;

export const Footer = styled.header`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-area: f;

  box-shadow: -1px -1px 12px 0px rgba(0, 0, 0, 0.1);
`;

export const Regards = styled.span`
  font: 12px/14px 'OpenSans', sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};

  & > span {
    color: ${({ theme }) => theme.colors.lemoney};
  }
`;

export const Icon = styled(MdiIcon).attrs(({ theme }) => ({
  size: 1,
  color: theme.colors.black,
  path: mdiCog,
}))``;

export const SwitchContainer = styled(Dropdown.Item)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: 15px;
  padding-bottom: 25px;

  width: 180px;

  &:hover {
    cursor: default;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const OptionText = styled.span`
  font-weight: bold;
`;

export const LogoutButton = styled(Dropdown.Item)`
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.tableBorders};
  margin-bottom: 5px;
`;
