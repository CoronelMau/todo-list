import { useEffect, useState } from 'react';
import Field from '../Field';
import { useModal } from '../../hooks';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalButton,
  Button,
  ButtonContainer,
} from '../Style/Modal';

export default function ModalTodo({ isOpen, onClose, registerNote }) {
  const { close, isOpen: status, open } = useModal();
  const [title, updateTitle] = useState('');
  const [task, updateTask] = useState('');

  useEffect(() => {
    console.log({ isOpen });
    if (isOpen) return open();

    close();
  }, [isOpen]);

  const closeModal = () => {
    close();
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    closeModal();

    const sendData = {
      title,
      task,
    };

    registerNote(sendData);
  };

  if (!status) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h1>New Note</h1>
          <ModalButton onClick={closeModal}>X</ModalButton>
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
  );
}
