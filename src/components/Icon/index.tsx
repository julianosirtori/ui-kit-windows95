import React, { ReactNode, useState, useRef } from 'react';

import Draggable from 'react-draggable';
import { Container } from './styles';

export interface Props  {
  title: string,
  iconName?: string,
  customicon?: ReactNode,
  textBackgroundNone ?: boolean
  click?: () => void,
}

const Icon: React.FC<Props> = ({
  title,
  iconName,
  customicon = null,
  textBackgroundNone = false,
  click = () => {},
  ...props
}) => {
  const [isDragging, setIsDragging] = useState(false);
  
  let icon;
  if(iconName){
    const icons = require.context('../../assets/icons', true);
    icon = icons(`./${iconName}.png`);
  }
  const nodeRef = useRef(null);

  function handleClickIcon(){
    click();
  }

  function onStop(){
    if(isDragging){
      setIsDragging(false)
    }else{
      handleClickIcon();
    }
  }

  function onDrag(){
    setIsDragging(true)
  }
  
  return (
    <Draggable onStop={onStop} onDrag={onDrag} nodeRef={nodeRef}>
      <Container textBackgroundNone={textBackgroundNone} ref={nodeRef} {...props}>
        {icon && (<img src={icon} draggable="false" alt="icon" />)}
        {customicon && (customicon)}
        <span>{title}</span>
      </Container>
    </Draggable>
  );
};

export default Icon;