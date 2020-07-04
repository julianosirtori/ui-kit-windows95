import React, { useState, useEffect } from 'react';

// const WindowsLogo  = require('../../assets/icons/windows_start.png');
const WindowsLogo  = require('../../assets/icons/windows_start.png');
const ShutDown  = require('../../assets/icons/shut_down.png');
const Standby  = require('../../assets/icons/standby.png');
const Run  = require('../../assets/icons/application_hourglass.png');

import { 
  Container, 
  StartButton, 
  Menu, 
  ContentMenu, 
  Timer,
  BordaLeft,
  ItemMenu,
  Itens,
  ItemSeparator
} from './styles';

export interface Props  {
  isOpen ?: boolean
}

const StartMenu: React.FC<Props> = ({
  isOpen = false,
  ...props
}) => {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(isOpen);
  }, [isOpen])

  setInterval(()=> {
    setTime(new Date().toLocaleTimeString());
  }, 1000)

  function handleButtonStart(){
    setIsMenuOpen(!isMenuOpen);
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
              <ItemMenu>
                <img src={Run} alt="run" />
                <span>Run...</span>
              </ItemMenu>
              <ItemSeparator/>
              <ItemMenu>
                <img src={Standby} alt="suspend" />
                <span>Suspend</span>
              </ItemMenu>
              <ItemMenu>
                <img src={ShutDown} alt="shutdown" />
                <span>Shut Down</span>
              </ItemMenu>
            </Itens>
          </ContentMenu>
        </Menu>
      )}

      <Timer>
        <span>{time}</span>
      </Timer>
    </Container>
  )
};

export default StartMenu;