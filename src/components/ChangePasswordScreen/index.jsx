import Footer from '../MainFooter';
import {
  LoginSec,
  Section,
  Form,
  Header,
  Input,
  Button,
} from '../Style/ChangePassword';

export default function ChangePasswordScreen() {
  return (
    <LoginSec>
      <Section>
        <Form>
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
