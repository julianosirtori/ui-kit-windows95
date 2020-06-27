import React, {useState, useEffect} from 'react';
import { FaRegWindowMinimize, FaRegWindowMaximize } from "react-icons/fa";
import { MdClose } from 'react-icons/md';

import { 
  Container, 
  Header, 
  Menu, 
  Content, 
  BorderInside, 
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
  visible ?: boolean
}

export const Window: React.FC<Props> = ({
  children,
  title = "Online Services",
  footerMessages = ["6 object(s)", "7,39kb"],
  headerBackgroundColor = "#00007B",
  headerTextColor = "#fff",
  maximize = false,
  visible = true,
  ...props
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    <Container maximize={isMaximized} {...props}>
      <Header headerBackgroundColor={headerBackgroundColor} headerTextColor={headerTextColor}>
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
      <Content>
        <BorderInside>
          {children}
        </BorderInside>
      </Content>
      <Footer>
        <SmallInfos>
          <span>{footerMessages[0]}</span>
        </SmallInfos>
        <LargeInfos>
          <span>{footerMessages[1]}</span>
        </LargeInfos>
      </Footer>
    </Container>) : <div></div>
};
