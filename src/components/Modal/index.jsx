import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalButton,
  Input,
  Label,
  Button,
  ButtonContainer,
} from '../Style/Modal';

// eslint-disable-next-line react/prop-types
export default function Modal({ toggleModal }) {
  return (
    <>
      <Overlay>
        <ModalContainer>
          <ModalHeader>
            <h1>New Note</h1>
            <ModalButton onClick={toggleModal}>X</ModalButton>
          </ModalHeader>
          <Label> Title</Label>
          <Input />
          <Label> Task</Label>
          <Input />
          <ButtonContainer>
            <Button>Accept</Button>
          </ButtonContainer>
        </ModalContainer>
      </Overlay>
    </>
  );
}
