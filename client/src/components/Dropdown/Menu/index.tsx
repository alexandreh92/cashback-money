import React from 'react';

import { Container } from './styles';

const Menu: React.FC = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Menu;
