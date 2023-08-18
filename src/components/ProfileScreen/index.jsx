import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';
import {
  Main,
  Container,
  ProfileImg,
  Name,
  Button,
  ButtonsDiv,
  Label,
  Functions,
  EditImgPhoto,
  EditImgName,
} from '../Style/Profile';
import { Link } from 'react-router-dom';

export default function ProfileScreen() {
  return (
    <div>
      <MainHeader />
      <Main>
        <Container>
          <ProfileImg src='https://github.com/CoronelMau.png' />
          <Name>Coronel</Name>
          <Functions>
            <Link to='/change-pwd/:id'>
              <Label>FORGOT PASSWORD?</Label>
            </Link>
            <ButtonsDiv>
              <Button>Save</Button>
              <Button>Cancel</Button>
            </ButtonsDiv>
          </Functions>
        </Container>
        <EditImgPhoto src='../edit.webp' />
        <EditImgName src='../edit.webp' />
      </Main>
      <MainFooter />
    </div>
  );
}
