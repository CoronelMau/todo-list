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

export default function ProfileScreen() {
  return (
    <div>
      <MainHeader />
      <Main>
        <Container>
          <ProfileImg src='https://github.com/CoronelMau.png' />
          <Name>Coronel</Name>
          <Functions>
            <Label>FORGOT PASSWORD?</Label>
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
