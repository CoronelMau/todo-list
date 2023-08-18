import MainFooter from '../MainFooter';
import {
  FindSec,
  Section,
  Form,
  Header,
  Text,
  Input,
  Button,
} from '../Style/FindAccount';
import { Image } from '../Style/Sign-Up';
import { Link } from 'react-router-dom';

export default function FindAccountScreen() {
  return (
    <FindSec>
      <Section>
        <Form>
          <Link to='/'>
            <Image src='./arrow.webp' />
          </Link>
          <Header>Find your account</Header>
          <Text>
            PLEASE, ENTER YOUR EMAIL ASSOCIATED WITH YOUR ACCOUNT SO WE CAN
            REESTABLISH YOUR PASSWORD
          </Text>
          <Input placeholder='email@example.com'></Input>
          <Button>SEND EMAIL</Button>
        </Form>
      </Section>
      <MainFooter />
    </FindSec>
  );
}
