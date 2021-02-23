import React from 'react';

import { Container, Icon } from './styles';

interface CommonProps {
  children: any;
}

type IconProps = { icon?: false; path?: never } | { icon: true; path: string };

type Props = CommonProps & IconProps;

const Item: React.FC<Props> = ({ children, icon, path, ...props }) => {
  return (
    <Container {...props}>
      {icon && path && <Icon path={path} />}
      {children}
    </Container>
  );
};

export default Item;
