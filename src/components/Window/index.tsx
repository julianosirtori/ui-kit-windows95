import React, {useState, useEffect, useRef} from 'react';
import { FaRegWindowMinimize, FaRegWindowMaximize } from "react-icons/fa";
import Draggable from 'react-draggable';
import { MdClose } from 'react-icons/md';

import { 
  Container, 
  Header, 
  Menu, 
  Content,  
  Footer, 
  SmallInfos,
  LargeInfos
} from './styles';

export interface Props {
  title?: string,
  footerMessages?: string[],
  headerBackgroundColor?: string,
  headerTextColor ?: string,
  maximize?: boolean,
  visible ?: boolean,
  showFooter ?: boolean,
  maxWidth?: number,
  maxHeight?: number
}

const Window: React.FC<Props> = ({
  children,
  maxWidth,
  maxHeight,
  title = "Online Services",
  footerMessages = ["6 object(s)", "7,39kb"],
  headerBackgroundColor = "#00007B",
  headerTextColor = "#fff",
  maximize = false,
  visible = true,
  showFooter = true,
  ...props
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);

  useEffect(()=> {
    setIsVisible(visible)
  }, [visible])

  function handleMaximize(){
    setIsMaximized(!isMaximized);
  }

  function close(){
    setIsVisible(false);
  }


  return isVisible ? ( 
    <Draggable handle=".handle" nodeRef={nodeRef}>
      <Container
        ref={nodeRef} 
        maximize={isMaximized} 
        {...props}>
        <Header className="handle" headerBackgroundColor={headerBackgroundColor} headerTextColor={headerTextColor}>
          <span>{title}</span>
          <div>
            <button>
              <FaRegWindowMinimize />
            </button>
            <button onClick={handleMaximize}>
              <FaRegWindowMaximize />
            </button>
            <button onClick={close}>
              <MdClose />
            </button>
          </div>
        </Header>
        <Menu>
          <a href="#">File</a>
          <a href="#">Edit</a>
          <a href="#">View</a>
          <a href="#">Help</a>
        </Menu>
        <Content   
          maxHeight={maxHeight}
          maxWidth={maxWidth} >
          {children}
        </Content>
        {showFooter && (
        <Footer>
          <SmallInfos>
            <span>{footerMessages[0]}</span>
          </SmallInfos>
          <LargeInfos>
            <span>{footerMessages[1]}</span>
          </LargeInfos>
        </Footer>)}
      </Container>
    </Draggable>) : <div></div>
};

export default Window;