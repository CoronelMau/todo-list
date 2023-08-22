import Footer from '../MainFooter';
import Header from '../MainHeader';
import { useState } from 'react';
import ModalTodo from '../ModalTodo';
import Note from '../Note';
import { Main, Container, Plus, Close } from '../Style/MainPage';
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

  const deleteNote = (index) => {
    const newNotes = notes
      .slice(0, index)
      .concat(notes.slice(index + 1, notes.legth));

    updateNotes(newNotes);
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
          {notes.map((note, index) => (
            <div key={note.title}>
              <Close src='../close.webp' onClick={() => deleteNote(index)} />
              <Note data={note} />
            </div>
          ))}
        </Container>
        <Plus src='../plus.webp' onClick={open} />
      </Main>
      <Footer />
    </div>
  );
}
