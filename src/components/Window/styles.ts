import styled from 'styled-components';

import { Props } from './index';

export const Container = styled.div<Props>`
  min-width: 400px;
  min-height: 300px;
  width: 100%;
  height: 100%;
  background: #BDBEBD;
  display: flex;
  width: ${(props) => props.maximize ?  '100vw' : 'auto'};
  height: ${(props) => props.maximize ?  '100vh' : 'auto'};
  flex-direction: column;
  padding: 2px;
  box-shadow:  
    -1px -1px 0 1px #fff,
    0px 0px 0 2px #7B7D7B;

`;

export const Header = styled.div<Props>`
  background: ${(props) => props.headerBackgroundColor ?  props.headerBackgroundColor : "#00007B"};
  height: 18px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;

  span{
    margin-left: 3px;
    color: ${(props) => props.headerTextColor ?  props.headerTextColor : "#fff"};
  }

  div{
    display: flex;
    flex-direction: row;

    button{
      height: 14px;
      display: flex;
      align-items: center;
      background: #BDBEBD;
      justify-content: center;
      width: 16px;
      margin-right: 2px;
      border-top: 1px solid #fff;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #7B7D7B;
      border-right: 1px solid #7B7D7B;
      
      &:hover{
        cursor: pointer;
      }

      svg{
        width: 10px;
        height: 10px;
      }
    }

  }
  
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
  a{
    font-size: 12px;
    font-family: Courier;
    margin-right: 12px;
    color: #000000;
    text-decoration: none;
  }
  
`;

export const Content = styled.div<Props>`
  background: #fff;
  flex: 1;
  overflow: auto;
  max-width: ${(props) => props.maxWidth ?  `${props.maxWidth}px` : 'none'};
  max-height: ${(props) => props.maxHeight ?  `${props.maxHeight}px` : 'none'}; 
  margin: 4px 4px;
  box-shadow:  
    -1px -1px 0 1px #000,
    0px 0px 0 2px #DEDEDE,
    -1px -1px 0 3px #7B7D7B,
    0px 0px 0 4px #FFFFFF;
`;


export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
`;

export const SmallInfos = styled.div`
  min-width: 150px;
  height: 22px;
  display: flex;
  margin-right: 2px;
  border-top: 1px solid #7B7D7B;
  border-left: 1px solid #7B7D7B;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  padding: 2px;
  font-size: 12px;
`;

export const LargeInfos = styled.div`
  flex: 1;
  height: 22px;
  font-size: 12px;
  display: flex;
  border-top: 1px solid #7B7D7B;
  border-left: 1px solid #7B7D7B;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  padding: 2px;
`;