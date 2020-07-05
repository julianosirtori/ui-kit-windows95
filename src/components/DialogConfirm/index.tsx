import React from 'react';
import { MdClose } from 'react-icons/md';
import Draggable from 'react-draggable';

import Warning from '../../assets/icons/warning.png';

import Button from '../Button';

import { 
  Container,
  Header,
  Content,
  Footer
} from './styles';


const DialogConfirm: React.FC = () => {
  return (
    <Draggable handle=".handle">
      <Container>
        <Header className="handle">
          <span>Confirm Folder Delete</span>
          <button onClick={close}>
            <MdClose />
          </button>
        </Header>
        <Content>
          <img src={Warning} alt="warning" />
          <span>
            Are you sure want to remove the folder ?
          </span>
        </Content>
        <Footer>
          <Button>Yes</Button>
          <Button>No</Button>
        </Footer>
      </Container>
    </Draggable>
    
  );
}

export default DialogConfirm;