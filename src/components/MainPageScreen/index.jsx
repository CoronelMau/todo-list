import Footer from '../MainFooter';
import Header from '../MainHeader';
import { useState } from 'react';
import Modal from '../Modal';
import Note from '../Note';
import { Main, Container, Plus } from '../Style/MainPage';

export default function MainPageScreen() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [notes, updateNotes] = useState([
    {
      title: 'Try',
      task: 'task1 asd f as dfas d fasdf asdfa sdfasd fasdf',
    },
  ]);

  const registerNote = (newNote) => {
    console.log('Note:' + newNote.title + ' ' + newNote.task);
    updateNotes([...notes, newNote]);
  };

  return (
    <div>
      <Header />
      <Main>
        {modal && (
          <Modal toggleModal={toggleModal} registerNote={registerNote} />
        )}
        <Container>
          {notes.map((note) => (
            <Note key={note.title} data={note} />
          ))}
          <Plus src='../plus.webp' onClick={toggleModal} />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
