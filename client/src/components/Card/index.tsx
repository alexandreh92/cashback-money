import React from 'react';

import Flatbutton from '../Flatbutton';

import { Container, Image, Name } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <Image />
      <Name>Nome</Name>
      <Flatbutton text="Shop Now" />
    </Container>
  );
};

export default Card;
