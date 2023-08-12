import { useState } from 'react';
import Field from '../Field';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalButton,
  Button,
  ButtonContainer,
} from '../Style/Modal';

// eslint-disable-next-line react/prop-types
export default function Modal({ toggleModal, registerNote }) {
  const [title, updateTitle] = useState('');
  const [task, updateTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const sendData = {
      title,
      task,
    };
    registerNote(sendData);
  };

  return (
    <>
      <Overlay>
        <ModalContainer>
          <ModalHeader>
            <h1>New Note</h1>
            <ModalButton onClick={toggleModal}>X</ModalButton>
          </ModalHeader>
          <form onSubmit={handleSubmit}>
            <Field title='Title' updateValue={updateTitle} info={title} />
            <Field title='Task' updateValue={updateTask} info={task} />
            <ButtonContainer>
              <Button>Accept</Button>
            </ButtonContainer>
          </form>
        </ModalContainer>
      </Overlay>
    </>
  );
}
