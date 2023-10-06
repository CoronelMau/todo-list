import Footer from '../MainFooter';
import Header from '../MainHeader';
import { useState, useEffect } from 'react';
import ModalTodo from '../ModalTodo';
import Note from '../Note';
import { Main, Container, Plus, Close } from '../Style/MainPage';
import { useModal } from '../../hooks';
import { useNavigate } from 'react-router-dom';

export default function MainPageScreen() {
  const navigate = useNavigate();
  const { close, isOpen, open } = useModal();
  const [idAuthor, setIdAuthor] = useState('');
  const [notes, updateNotes] = useState([]);

  const onClose = () => close();

  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem('token'));

    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };

    fetch('http://localhost:5137/user/note-access', config)
      .then((res) => res.json())
      .then((res) => {
        updateNotes(res);
      })
      .catch((error) => console.error(error));
  }, []);

  const registerNote = (newNote) => {
    updateNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const jwt = JSON.parse(localStorage.getItem('token'));

    const data = {
      _id: String(notes[index]._id),
    };

    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    };

    fetch('http://localhost:5137/user/note-delete', config)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem('token'));

    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };

    fetch('http://localhost:5137/user/profile', config)
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem('token');
          navigate('/');
        }

        return res.json();
      })
      .then((res) => {
        setIdAuthor(res._id);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      <Main>
        <ModalTodo
          isOpen={isOpen}
          onClose={onClose}
          registerNote={registerNote}
          idAuthor={idAuthor}
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
