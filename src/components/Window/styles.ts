import styled from 'styled-components';

import { Props } from './index';

export const Container = styled.div<Props>`
  min-width: 400px;
  min-height: 300px;
  width: 100%;
  height: 100%;
  background: #BDBEBD;
  border-top: 1px solid #fff;
  display: flex;
  width: ${(props) => props.maximize ?  '100vw' : 'auto'};
  height: ${(props) => props.maximize ?  '100vh' : 'auto'};
  flex-direction: column;

`;

export const Header = styled.div<Props>`
  background: ${(props) => props.headerBackgroundColor ?  props.headerBackgroundColor : "#00007B"};
  height: 18px;
  margin: 2px;
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

export const Content = styled.div`
  background: #fff;
  flex: 1;
  margin: 2px;
  border-top: 1px solid #7B7D7B;
  border-left: 1px solid #7B7D7B;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  display: flex;
`;

export const BorderInside = styled.div<Props>`
  flex: 1;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-bottom: 1px solid #dedede;
  border-right: 1px solid #dedede;
  overflow: auto;
  max-width: ${(props) => props.maxWidth ?  `${props.maxWidth}px` : 'none'};
  max-height: ${(props) => props.maxHeight ?  `${props.maxHeight}px` : 'none'}; 
`;

export const BorderReverse = styled.div`
  flex: 1;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  border-top: 1px solid #dedede;
  border-left: 1px solid #dedede;
`;

export const Footer = styled.div`
  display: flex;
  margin: 2px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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