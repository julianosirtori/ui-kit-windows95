import styled from 'styled-components';

interface PropsContainer {
  textBackgroundNone ?: boolean
}

import '../../styles/reset.css';

export const Container = styled.div<PropsContainer>`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img, svg{
    margin-bottom: 4px;
  }

  span{
    background: ${props => props.textBackgroundNone ? 'none' : '#007D7B'} ;
    padding: 2px;
    color: #fff;
    font-size: 14px;
  }

  &:hover{
    cursor: pointer;
  }
`;
