import React from 'react';

import { Container } from './styles';

import Header from './Header';
import Body from './Body';

interface Props {}

type SectionProps<P> = React.FC<P> & {
  Header: typeof Header;
  Body: typeof Body;
};

const Segment: SectionProps<Props> = ({ children }) => {
  return <Container id="main-segment">{children}</Container>;
};

Segment.Header = Header;
Segment.Body = Body;

export default Segment;
