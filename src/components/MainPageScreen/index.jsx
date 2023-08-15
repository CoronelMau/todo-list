import Footer from '../MainFooter';
import Header from '../MainHeader';
import { useState } from 'react';
import ModalTodo from '../ModalTodo';
import Note from '../Note';
import { Main, Container, Plus } from '../Style/MainPage';
import { useModal } from '../../hooks';

export default function MainPageScreen() {
  const { close, isOpen, open } = useModal();

  const [notes, updateNotes] = useState([
    {
      title: 'Try',
      tasks: [
        {
          description: 'task1 asd f as dfas d fasdf asdfa sdfasd fasdf',
        },
      ],
    },
  ]);

  const onClose = () => close();

  const registerNote = (newNote) => {
    updateNotes([...notes, newNote]);
  };

  return (
    <div>
      <Header />
      <Main>
        <ModalTodo
          isOpen={isOpen}
          onClose={onClose}
          registerNote={registerNote}
        />

        <Container>
          {notes.map((note) => (
            <Note key={note.title} data={note} />
          ))}
          <Plus src='../plus.webp' onClick={open} />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
