import React, {useState} from 'react';

// const WindowsLogo  = require('../../assets/icons/windows_start.png');
const WindowsLogo  = require('../../assets/icons/windows_start.png');
import { Container, StartButton, Timer } from './styles';


export const StartMenu: React.FC = ({
  ...props
}) => {
  const [time, setTime] = useState("");

  setInterval(()=> {
    setTime(new Date().toLocaleTimeString());
  }, 1000)


  return (
    <Container {...props}>
      <div className="border-inside-menu">
        <StartButton>
          <div className="border-inside-button">
            <img src={WindowsLogo} alt="logo" />
            Start
          </div>
        </StartButton>
        <Timer>
          <span>{time}</span>
        </Timer>
      </div>
    </Container>
  )
};