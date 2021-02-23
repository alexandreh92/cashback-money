import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Flatbutton: React.FC<Props> = ({ text, ...props }) => {
  return <Container {...props}>{text}</Container>;
};

export default Flatbutton;
