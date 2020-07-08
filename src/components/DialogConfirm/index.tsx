import React, { useState } from 'react';
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


export interface Props {
  title: string,
  description: string,
  textBtnYes?: string,
  textBtnNo ?: string,
  callBackClickYes ?: any
}

const DialogConfirm: React.FC<Props> = ({
  title,
  description,
  textBtnYes = "Yes",
  textBtnNo = "No",
  callBackClickYes = () => {},
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);


  function handleClickBtnYes(){
    callBackClickYes();
    closeDialog();
    
  }

  function closeDialog(){
    setIsVisible(false);
  }

  return isVisible ?  (
    <Draggable handle=".handle">
      <Container {...props}>
        <Header className="handle">
          <span>{title}</span>
          <button onClick={closeDialog}>
            <MdClose />
          </button>
        </Header>
        <Content>
          <img src={Warning} alt="warning" />
          <span>
            {description}
          </span>
        </Content>
        <Footer>
          <Button onClick={handleClickBtnYes}>{textBtnYes}</Button>
          <Button onClick={closeDialog}>{textBtnNo}</Button>
        </Footer>
      </Container>
    </Draggable>) : <div></div>;
}

export default DialogConfirm;