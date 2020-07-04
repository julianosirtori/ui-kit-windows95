import styled from 'styled-components';

import {Props} from './index';

//TODO mudar para 100% o width do container
export const Container = styled.div`
  width: 850px; 
  background: #BDBEBD;
  border-top: 1px solid #fff;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 4px;
  padding-bottom: 4px;
  box-shadow:  
    0 -1px 0 0px #DEDEDE;
`;

export const StartButton = styled.button<Props>`
  width: 60px;
  background: ${props => props.isOpen ? '#e3e3e3' : '#BDBEBD'};
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  padding: 2px;
  margin-left: 2px;
  box-shadow:  
    -1px -1px 0 0px #DEDEDE,
    0px 0px 0 1px #7B7D7B;

  &:active{
    border: 1px dotted #000; 
    box-shadow:  
    0px 0px 0 0px #7B7D7B,
    0px 0px 0 1px #000;
  }

  &:hover{
    cursor: pointer;
  }

  img{
    margin-right: 2px 4px;
    height: 16px;
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
  display: flex;
  flex-direction: row;
  border-top: 1px solid #FFFFFF;
  border-left: 1px solid #FFFFFF;
  border-bottom: 1px solid #7B7D7B;
  border-right: 1px solid #7B7D7B;
`;

export const BordaLeft  = styled.div`
  height: 100%;
  width: 21px;
  background: #7B7D7B;
`;

export const Itens = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ItemMenu = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover{
    cursor: pointer;
    background: #00007B;

    span{
      color: #fff;
    }
  }

  img{
    height: 28px;
    margin-right: 10px; 
  }

  span{
    font-size: 12px;
  }
`;

export const ItemSeparator = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid #7B7D7B;
  border-bottom: 1px solid #FFF;
`;