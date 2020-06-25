import React from 'react';
import { FaRegWindowMinimize, FaRegWindowMaximize } from "react-icons/fa";
import { MdClose } from 'react-icons/md';

import { 
  Container, 
  Header, 
  Menu, 
  Content, 
  BorderInside, 
  Footer, 
  SmallInfos,
  LargeInfos
} from './styles';

export const Window: React.FC = () => {
  return (
  <Container>
    <Header>
      <span>Online Services</span>
      <div>
        <button>
          <FaRegWindowMinimize />
        </button>
        <button>
          <FaRegWindowMaximize />
        </button>
        <button>
          <MdClose />
        </button>
      </div>
    </Header>
    <Menu>
      <a href="#">File</a>
      <a href="#">Edit</a>
      <a href="#">View</a>
      <a href="#">Help</a>
    </Menu>
    <Content>
      <BorderInside>

      </BorderInside>
    </Content>
    <Footer>
      <SmallInfos>
        <span>6 object(s)</span>
      </SmallInfos>
      <LargeInfos>
        <span>7.39KB</span>
      </LargeInfos>
    </Footer>
  </Container>)
};
