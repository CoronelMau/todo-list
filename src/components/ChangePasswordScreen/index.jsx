import Footer from '../MainFooter';
import {
  LoginSec,
  Section,
  Form,
  Header,
  Input,
  Button,
} from '../Style/ChangePassword';
import { Image } from '../Style/Sign-Up';
import { Link } from 'react-router-dom';

export default function ChangePasswordScreen() {
  return (
    <LoginSec>
      <Section>
        <Form>
          <Link to='/'>
            <Image alt='arrow' src='../arrow.webp' />
          </Link>
          <Header>Change Password</Header>
          <Input placeholder='new password'></Input>
          <Input placeholder='repeat password'></Input>
          <Button>SAVE</Button>
        </Form>
      </Section>
      <Footer />
    </LoginSec>
  );
}
