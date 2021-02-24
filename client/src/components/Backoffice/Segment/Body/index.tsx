import React from 'react';

import { Container } from './styles';

interface Props {
  noPadding?: boolean;
}

const Body: React.FC<Props> = ({ children, noPadding }) => {
  return <Container noPadding={noPadding}>{children}</Container>;
};

export default Body;
