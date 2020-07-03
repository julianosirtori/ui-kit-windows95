import React, { ReactNode } from 'react';

import Draggable from 'react-draggable';
import { Container } from './styles';

export interface Props  {
  title: string,
  iconName?: string,
  customicon?: ReactNode,
  click?: () => void,
}

export const Icon: React.FC<Props> = ({
  title,
  iconName,
  customicon = null,
  click = () => {},
  ...props
}) => {
  let icon;
  if(iconName){
    const icons = require.context('../../assets/icons', true);
    icon = icons(`./${iconName}.png`);
  }
  
  return (
    <Draggable>
      <Container onClick={click} {...props}>
        {icon && (<img src={icon} draggable="false" alt="icon" />)}
        {customicon}
        <span>{title}</span>
      </Container>
    </Draggable>
  );
};