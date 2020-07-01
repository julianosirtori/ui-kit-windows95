import styled from 'styled-components';

import {Props} from './index';

//TODO mudar para 100%
export const Container = styled.div`
  width: 850px; 
  background: #BDBEBD;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  border-top: 1px solid #fff;
  display: flex;
  align-items: center;
  flex-direction: row;

  .border-inside-menu{
    flex: 1;
    display: flex;
    flex-direction:  row;
    align-items: center;
    justify-content: space-between;
    padding-top: 2px;
    padding-bottom: 2px;
    border-top: 1px solid #DEDEDE;
    border-left: 1px solid #DEDEDE;
    border-bottom: 1px solid #7B7D7B;
    border-right: 1px solid #7B7D7B;
  }
`;

export const StartButton = styled.button<Props>`
  width: 60px;
  background: ${props => props.isOpen ? '#e3e3e3' : '#BDBEBD'};
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  display: flex;

  &:hover{
    cursor: pointer;
  }

  img{
    margin-right: 2px 4px;
    height: 16px;
  }

  .border-inside-button{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    color: #000;
    font-size: 14px;
    font-weight: bold;
    border-top: 1px solid #DEDEDE;
    border-left: 1px solid #DEDEDE;
    border-bottom: 1px solid #7B7D7B;
    border-right: 1px solid #7B7D7B;
  }
`;

export const Timer = styled.div`
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    margin-right: 2px;
    align-items: center;
    padding: 2px 6px;
    flex-direction: row;
    border-bottom: 1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
    border-top: 1px solid #8C8D8C;
    border-left: 1px solid #8C8D8C;
`;

export const Menu = styled.div`
  position: absolute;
  bottom: 28px;
  left: 2px;
  height: 270px;
  width: 160px;
  display: flex;
  background: #BDBEBD;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  border-top: 1px solid #8C8D8C;
  border-left: 1px solid #8C8D8C;
`;

export const ContentMenu = styled.div`
  flex: 1;
  border-top: 1px solid #FFFFFF;
  border-left: 1px solid #FFFFFF;
  border-bottom: 1px solid #7B7D7B;
  border-right: 1px solid #7B7D7B;
`;