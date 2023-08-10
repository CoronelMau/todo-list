import Footer from '../MainFooter';
import Header from '../MainHeader';
import { useState } from 'react';
import Modal from '../Modal';
import {
  Main,
  Container,
  Notes,
  NotesTitle,
  CheckBox,
  Text,
  Tasks,
  Plus,
} from '../Style/MainPage';

export default function MainPageScreen() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Header />
      <Main>
        <Container>
          <Notes>
            <NotesTitle>TITLE </NotesTitle>
            <Tasks>
              <CheckBox src='../check.webp' />
              <Text>Task 1</Text>
            </Tasks>
          </Notes>

          <Notes>
            <NotesTitle>TITLE</NotesTitle>
            <Tasks>
              <CheckBox src='../check.webp' />
              <Text>Task 1</Text>
            </Tasks>
            <Tasks>
              <CheckBox src='../check.webp' />
              <Text>Task 2</Text>
            </Tasks>
          </Notes>
          <Plus src='../plus.webp' onClick={toggleModal} />
        </Container>
        {modal && <Modal toggleModal={toggleModal} />}
      </Main>
      <Footer />
    </div>
  );
}
