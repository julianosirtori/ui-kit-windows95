import React from 'react';

import { Container } from './styles';

export interface Props  {
  title: string,
  icon: string
}

export const Icon: React.FC<Props> = ({
  title,
  icon,
  ...props
}) => {
  return (
    <Container {...props}>
      <span>{title}</span>
    </Container>
  );
};