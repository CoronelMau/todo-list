import styled from 'styled-components';
import MainFooter from '../MainFooter';

const FindSec = styled.div`
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
  width: 320px;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #0d4d5d;
  padding: 30px 200px 0px 200px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #0d4d5d;
  padding: 30px 50px;
`;

export default function FindAccountScreen() {
  return (
    <FindSec>
      <Section>
        <Form>
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
