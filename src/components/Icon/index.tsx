import React from 'react';

import Draggable from 'react-draggable';
import { Container } from './styles';

export interface Props  {
  title: string,
  iconName: string,
  click?: () => void,
}

export const Icon: React.FC<Props> = ({
  title,
  iconName,
  click = () => {},
  ...props
}) => {
  const icons = require.context('../../assets/icons', true);
  let icon = icons(`./${iconName}.png`);
  return (
    <Draggable>
      <Container onClick={click} {...props}>
        <img src={icon} draggable="false" alt="icon" />
        <span>{title}</span>
      </Container>
    </Draggable>
  );
};