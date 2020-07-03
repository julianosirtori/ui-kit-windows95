import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  height: 22px;
  width: 80px;
  font-size: 12px;
  text-align: center;
  background: #BDBEBD;
  box-shadow:  
    -1px -1px 0 1px #DEDEDE,
    0px 0px 0 2px #7B7D7B,
    
    -1px -1px 0 3px #fff,
    0px 0px 0 4px #000;

    &:active{
      border: 1px dotted #000; 
      box-shadow:  
      0px 0px 0 2px #7B7D7B,
      0px 0px 0 4px #000;
    }
`;
