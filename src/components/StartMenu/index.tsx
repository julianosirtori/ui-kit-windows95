import React, { useState, useEffect } from 'react';

// const WindowsLogo  = require('../../assets/icons/windows_start.png');
const WindowsLogo  = require('../../assets/icons/windows_start.png');
import { 
  Container, 
  StartButton, 
  Menu, 
  ContentMenu, 
  Timer 
} from './styles';

export interface Props  {
  isOpen ?: boolean
}

export const StartMenu: React.FC<Props> = ({
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
      <div className="border-inside-menu">
        <StartButton isOpen={isMenuOpen} onClick={handleButtonStart}>
          <div className="border-inside-button">
            <img src={WindowsLogo} alt="logo" />
            Start
          </div>
        </StartButton>
        
        {isMenuOpen && (
          <Menu>
            <ContentMenu></ContentMenu>
          </Menu>
        )}

        <Timer>
          <span>{time}</span>
        </Timer>
      </div>
    </Container>
  )
};