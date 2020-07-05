import styled from 'styled-components';

import '../../styles/reset.css';

export const Container = styled.div`
  background: #BDBEBD;
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
  padding: 2px;
  box-shadow:  
    -1px -1px 0 1px #fff,
    0px 0px 0 2px #7B7D7B;
`;

export const Header = styled.div`
  background: #00007B;
  height: 18px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;

  span{
    margin-left: 3px;
    font-size: 12px;
    color: #fff;
  }
  
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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 8px;

  img{
    margin-right: 8px;
  }
 
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 12px 0;
  height: 45px;

  button{
    margin-right: 16px;
  }
`;