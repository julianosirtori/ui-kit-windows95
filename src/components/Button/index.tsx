import React from 'react';

import { Container } from './styles';

export interface Props {
  small?: boolean,
  bold ?: boolean, 
  onClick?: any
}

const Button: React.FC<Props> = ({
  children,
  small = false,
  bold = false,
  ...props
}) => {
  return (
  <Container bold={bold} small={small} {...props}>
    {children}
  </Container>);
}

export default Button;