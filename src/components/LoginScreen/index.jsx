import Footer from '../MainFooter';
import { LoginSec, Section, Form, Input, Button, Label } from '../Style/Login';

export default function LoginScreen() {
  return (
    <LoginSec>
      <Section>
        <Form>
          <Input placeholder='email@example.com'></Input>
          <Input type='password' placeholder='password'></Input>
          <Button>LOGIN</Button>
          <Label>FORGOT PASSWORD?</Label>
          <Button>SIGN-UP</Button>
        </Form>
      </Section>
      <Footer />
    </LoginSec>
  );
}
