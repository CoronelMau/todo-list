import Header from '../MainHeaderSection';
import Footer from '../MainFooterSection';
import { Main, Container, ProfileImg } from '../Style/Profile';

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
