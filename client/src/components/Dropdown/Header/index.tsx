import React from 'react';

import { Container } from './styles';

const Header: React.FC = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Header;
