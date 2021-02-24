import React from 'react';
import { NavLinkProps } from 'react-router-dom';

import { Container } from './styles';

interface Props extends NavLinkProps {
  text: string;
}

const SidebarItem: React.FC<Props> = ({ text, ...props }) => {
  return <Container {...props}>{text}</Container>;
};

export default SidebarItem;
