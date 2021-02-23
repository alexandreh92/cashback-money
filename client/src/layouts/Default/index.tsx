import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '~/@types';

import Dropdown from '~/components/Dropdown';
import Switch from '~/components/Switch';

import ThemeActions from '~/store/ducks/theme';

import { lightTheme, darkTheme } from '~/styles/theme';

import {
  Container,
  Header,
  HeaderLeft,
  Avatar,
  Name,
  Icon,
  Body,
  Footer,
  Regards,
  SwitchContainer,
  OptionText,
  Separator,
  LogoutButton,
} from './styles';

const { changeTheme } = ThemeActions;

const Default: React.FC = ({ children }) => {
  /* Hooks */
  const dispatch = useDispatch();

  const { name, email } = useSelector((state: ApplicationState) => state.user);
  const { mode } = useSelector((state: ApplicationState) => state.theme);

  /* Hooks */
  const handleOnThemeChange = useCallback(() => {
    dispatch(changeTheme(mode === 'dark' ? lightTheme : darkTheme));
  }, [dispatch, mode]);

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Avatar
            src={`https://avatars.dicebear.com/api/avataaars/${email}.svg`}
          />
          <Name>
            Hello, <span>{name}</span>
          </Name>
        </HeaderLeft>
        <Dropdown>
          <Dropdown.Header>
            <Icon />
          </Dropdown.Header>
          <Dropdown.Menu>
            <SwitchContainer>
              <OptionText>Dark-Mode</OptionText>
              <Switch onClick={handleOnThemeChange} />
            </SwitchContainer>
            <Separator />
            <LogoutButton>Logout</LogoutButton>
          </Dropdown.Menu>
        </Dropdown>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <Regards>
          Made with ♥ by <span>Alexandre Stapenhorst</span>
        </Regards>
      </Footer>
    </Container>
  );
};

export default Default;
