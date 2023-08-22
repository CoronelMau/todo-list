import Footer from '../MainFooter';
import { Link } from 'react-router-dom';
import {
  Section,
  SignUpSec,
  Form,
  Input,
  Button,
  Image,
} from '../Style/Sign-Up';

export default function SignUpScreen() {
  return (
    <SignUpSec>
      <Section>
        <Form>
          <Link to='/'>
            <Image src='./arrow.webp' />
          </Link>
          <Input placeholder='name'></Input>
          <Input placeholder='email@example.com'></Input>
          <Input type='password' placeholder='password'></Input>
          <Input type='password' placeholder='repeat password'></Input>
          <Button>SIGN-UP</Button>
        </Form>
      </Section>
      <Footer />
    </SignUpSec>
  );
}
