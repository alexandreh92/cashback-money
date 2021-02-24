import React from 'react';

import { Container, Icon } from './styles';

interface CommonProps {
  children: any;
  onClick?: () => void;
}

type IconProps = { icon?: false; path?: never } | { icon: true; path: string };

type Props = CommonProps & IconProps;

const Item: React.FC<Props> = ({ children, icon, path, onClick, ...props }) => {
  return (
    <Container onClick={onClick} {...props}>
      {icon && path && <Icon path={path} />}
      {children}
    </Container>
  );
};

export default Item;
