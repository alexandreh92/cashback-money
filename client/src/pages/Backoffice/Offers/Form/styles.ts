import styled from 'styled-components';
import Flatbutton from '~/components/Flatbutton';

import Form from '~/components/Form';
import Input from '~/components/Input';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Formulary = styled(Form)`
  padding: 30px;
  flex: 1;
  & > div > div {
    margin: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Submit = styled(Flatbutton)`
  margin-top: 60px;
  max-width: 320px;
`;
