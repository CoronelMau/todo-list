import styled from 'styled-components';
import Header from '../MainHeaderSection';
import Footer from '../MainFooterSection';

const Main = styled.div`
  height: 82vh;
  background-color: #b1cdd8;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  background-color: #0d4d5d;
`;

const ProfileImg = styled.img`
  height: 320px;
  border-radius: 50%;
`;

export default function ProfileScreen() {
  return (
    <div>
      <Header />
      <Main>
        <Container>
          <ProfileImg src='https://github.com/CoronelMau.png' />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
