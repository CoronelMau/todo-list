import styled from 'styled-components';
import Footer from '../MainFooterSection';

const LoginSec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #0d4d5d;
  font-family: 'Montserrat', sans-serif;
`;

const Section = styled.div`
  font-weight: lighter;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

const Form = styled.form`
  background-color: #b1cdd8;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 670px;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 50px;
`;

const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  padding: 20px 100px 20px 20px;
  font-size: 20px;
  margin: 5px;
  box-sizing: border-box;
  width: 570px;
`;

const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  background-color: #0d4d5d;
  border: none;
  color: #ffffff;
  font-size: 26px;
  padding: 10px 60px 10px 60px;
  border-radius: 10px;
  width: 270px;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #0d4d5d;
  padding: 30px 200px 50px 200px;
`;

export default function ChangingPasswordScreen() {
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
