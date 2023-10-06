import { useEffect, useState } from 'react';
import { useModal } from '../../hooks';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalButton,
  Button,
  InputTitle,
} from '../Style/Modal';

export default function ModalName({ isOpen, onClose, registerNote }) {
  const { close, isOpen: status, open } = useModal();
  const [name, setName] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (isOpen) return open();

    close();
  }, [isOpen]);

  const closeModal = () => {
    close();
    onClose();
    setName('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const jwt = JSON.parse(localStorage.getItem('token'));

    const data = {
      name,
    };

    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    };

    fetch('http://localhost:5137/user/update-data', config)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.error(error));

    closeModal();
  };

  if (!status) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h1>New Name</h1>
          <ModalButton onClick={closeModal}>X</ModalButton>
        </ModalHeader>

        <form onSubmit={handleSubmit}>
          <InputTitle
            required={true}
            value={name}
            onChange={handleChangeName}
            autoFocus
          />

          <Button>Accept</Button>
        </form>
      </ModalContainer>
    </Overlay>
  );
}
