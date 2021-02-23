import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import Flatbutton from '~/components/Flatbutton';
import DefaultForm from '~/components/Form';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Welcomes = styled.h2`
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 40px;

  & > span {
    color: ${({ theme }) => theme.colors.lemoney};
  }
`;

export const Form = styled(DefaultForm)`
  flex: 1;
`;

export const Button = styled(Flatbutton)`
  margin-top: 30px;
`;

export const Link = styled(RouterLink)`
  margin: 20px auto 0;
  color: ${({ theme }) => theme.colors.black};
`;
