import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img, svg{
    margin-bottom: 4px;
  }

  span{
    background: #007D7B;
    padding: 2px;
    color: #fff;
    font-size: 14px;
  }

  &:hover{
    cursor: pointer;
  }
`;
