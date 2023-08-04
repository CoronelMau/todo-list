import styled from 'styled-components';
import Footer from '../footer';
import Header from '../Header';

const Main = styled.div`
  height: 82vh;
  background-color: #b1cdd8;
  font-family: 'Montserrat', sans-serif;
`;

const Container = styled.div`
  padding: 10vh 25vh 10vh 25vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Notes = styled.div`
  display: inline-block;
  font-size: 20px;
  color: #ffffff;
  background-color: #0d4d5d;
  border-radius: 10px;
  height: 250px;
`;

const NotesTitle = styled.h1`
  color: #ffffff;
  padding: 10px 80px 10px 80px;
  margin: auto 20px;
  border-bottom: solid 1px #ffffff;
  font-weight: bold;
`;

const Tasks = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  flex-wrap: wrap;
`;

const Text = styled.p`
  margin-left: 5px;
  font-size: 20px;
`;

const CheckBox = styled.img`
  height: 20px;
`;

const Plus = styled.img`
  height: 50px;
`;

const MainPage = () => {
  return (
    <div>
      <Header />
      <Main>
        <Container>
          <Notes>
            <NotesTitle>TITLE </NotesTitle>
            <Tasks>
              <CheckBox src='./check.png' />
              <Text>Task 1</Text>
            </Tasks>
          </Notes>

          <Notes>
            <NotesTitle>TITLE</NotesTitle>
            <Tasks>
              <CheckBox src='./check.png' />
              <Text>Task 1</Text>
            </Tasks>
            <Tasks>
              <CheckBox src='./check.png' />
              <Text>Task 2</Text>
            </Tasks>
          </Notes>
          <Plus src='./plus.png' />
        </Container>
      </Main>
      <Footer />
    </div>
  );
};

export default MainPage;
