import Footer from '../MainFooter';
import { Section, SignUpSec, Form, Input, Button } from '../Style/Sign-Up';

export default function SignUpScreen() {
  return (
    <SignUpSec>
      <Section>
        <Form>
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
