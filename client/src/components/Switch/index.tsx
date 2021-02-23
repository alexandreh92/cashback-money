import React from 'react';

import { Container } from './styles';

interface Props {
  onClick?: () => void;
}

const Switch: React.FC<Props> = ({ onClick }) => {
  return <Container type="checkbox" onClick={onClick} />;
};

export default Switch;
