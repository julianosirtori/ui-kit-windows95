import styled from 'styled-components';
import '../../styles/reset.css';
export const Container = styled.div `
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%; 
  height: 32px;
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
export const StartButton = styled.button `
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
  margin-right: 8px;
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
export const Timer = styled.div `
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
export const Menu = styled.div `
  position: absolute;
  bottom: 28px;
  left: 2px;
  width: 160px;
  display: flex;
  background: #BDBEBD;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  border-top: 1px solid #8C8D8C;
  border-left: 1px solid #8C8D8C;
`;
export const ContentMenu = styled.div `
  flex: 1;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #FFFFFF;
  border-left: 1px solid #FFFFFF;
  border-bottom: 1px solid #7B7D7B;
  border-right: 1px solid #7B7D7B;
`;
export const BordaLeft = styled.div `
  height: 100%;
  width: 21px;
  background: #7B7D7B;
`;
export const Itens = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const ItemMenu = styled.div `
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

  img,
  svg,
  div{
    height: 28px;
    margin-left: 8px;
    margin-right: 8px; 
  }

  span{
    font-size: 12px;
  }
`;
export const ItemSeparator = styled.div `
  height: 1px;
  width: 100%;
  border-top: 1px solid #7B7D7B;
  border-bottom: 1px solid #FFF;
`;
export const ItensWindow = styled.div `
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ItemWindow = styled.div `
  max-width: 120px;
  width: 100%;
  margin-right: 6px;
  display: flex;
  height: 22px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-size: 12px;
  padding: 2px 4px;
  background: ${props => props.active ? '#DEDEDE' : '#BDBEBD'} ;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  box-shadow:  
    -1px -1px 0 0px #DEDEDE,
    0px 0px 0 1px #7B7D7B;

  &:hover{
    cursor: pointer;
  }

  &:active{
    border: 1px dotted #000; 
    box-shadow:  
    0px 0px 0 0px #7B7D7B,
    0px 0px 0 1px #000;
  }
  
  span{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100px;
  }

  img{
    height: 12px;
    margin-right: 2px;
  }
`;
//# sourceMappingURL=styles.js.map