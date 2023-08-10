import Footer from '../MainFooter';
import Header from '../MainHeader';
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
          <Plus src='../plus.webp' />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
