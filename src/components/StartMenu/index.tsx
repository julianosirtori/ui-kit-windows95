import React, { useState, useEffect, ReactNode } from 'react';

// const WindowsLogo  = require('../../assets/icons/windows_start.png');
const WindowsLogo  = require('../../assets/icons/windows_start.png');
const ShutDown  = require('../../assets/icons/shut_down.png');
const Standby  = require('../../assets/icons/standby.png');
const Run  = require('../../assets/icons/application_hourglass.png');
const Appwiz = require('../../assets/icons/appwiz.png');

import { 
  Container, 
  StartButton, 
  Menu, 
  ContentMenu, 
  Timer,
  BordaLeft,
  ItemMenu,
  Itens,
  ItemSeparator,
  ItensWindow,
  ItemWindow
} from './styles';
export interface Props  {
  isOpen ?: boolean,
  menuItens ?: {title: string, icon: ReactNode, click: any}[]
  windowsItens?: { title: string, active: boolean, click: any }[]
}

const StartMenu: React.FC<Props> = ({
  isOpen = false,
  windowsItens =  [],
  menuItens = [],
  ...props
}) => {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(isOpen);
  }, [isOpen])

  useEffect(() => {
    const timer = 
      setInterval(()=> {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      
      return () => {
        clearInterval(timer);
      }
  }, [])


  function handleButtonStart(){
    setIsMenuOpen(!isMenuOpen);
  }

  function handleClickItemMenu(item: {click: any} ){
    setIsMenuOpen(false);
    item.click();
  }

  return (
    <Container {...props}>  
      <StartButton isOpen={isMenuOpen} onClick={handleButtonStart}>
        <img src={WindowsLogo} alt="logo" />
        Start
      </StartButton>
      {isMenuOpen && (
        <Menu>
          <ContentMenu>
            <BordaLeft/>
            <Itens>
              {menuItens.map(item => (
                <ItemMenu key={item.title} onClick={() => handleClickItemMenu(item)}>
                  {item.icon}
                  <span>{item.title}</span>
                </ItemMenu>  
              ))}
              <ItemMenu onClick={handleButtonStart}>
                <img src={Run} alt="run" />
                <span>Run...</span>
              </ItemMenu>
              <ItemSeparator/>
              <ItemMenu onClick={handleButtonStart}>
                <img src={Standby} alt="suspend" />
                <span>Suspend</span>
              </ItemMenu>
              <ItemMenu onClick={handleButtonStart}>
                <img src={ShutDown} alt="shutdown" />
                <span>Shut Down</span>
              </ItemMenu>
            </Itens>
          </ContentMenu>
        </Menu>
      )}
      <ItensWindow>
        {windowsItens.map(item => (
          <ItemWindow
            key={item.title} 
            active={item.active} 
            onClick={item.click}>
            <img src={Appwiz} />
            <span>{item.title}</span>
          </ItemWindow>
        ))}
      </ItensWindow>

      <Timer>
        <span>{time}</span>
      </Timer>
    </Container>
  )
};

export default StartMenu;