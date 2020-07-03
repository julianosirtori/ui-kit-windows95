import React from 'react';

import { Container } from './styles';

export interface Props {
  small?: boolean
}

const Button: React.FC<Props> = ({
  children,
  small = true
}) => {
  return (
  <Container>
    {children}
  </Container>);
}

export default Button;