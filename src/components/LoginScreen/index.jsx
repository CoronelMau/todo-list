import Footer from '../MainFooter';
import {
  LoginSec,
  Section,
  Form,
  Input,
  Button,
  Label,
  Container,
} from '../Style/Login';
import { useState } from 'react';
import {
  validatePassword,
  validateEmail,
} from '../Validations/LoginValidation';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const [email, setEmail] = useState({
    value: '',
    valid: true,
  });

  const [password, setPassword] = useState({
    value: '',
    valid: true,
  });

  const navigate = useNavigate();

  const handleEmail = (e) => {
    const { target } = e;
    const valid = validateEmail(target.value);

    setEmail({
      value: target.value,
      valid,
    });
  };

  const handlePassword = (e) => {
    const { target } = e;
    const valid = validatePassword(target.value);

    setPassword({
      value: target.value,
      valid,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email.value,
      password: password.value,
    };

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch('http://localhost:5137/user/login', config)
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.jwt));

        navigate('/main');
      })
      .catch((error) => console.error(error));
  };

  return (
    <LoginSec>
      <Section>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Input
              required
              placeholder='email@example.com'
              onChange={handleEmail}
              onBlur={handleEmail}
              {...(email.valid ? {} : { style: { outlineColor: 'red' } })}
            />
            {!email.valid && <p style={{ color: 'red' }}>Invalid email</p>}
            <Input
              required
              type='password'
              placeholder='password'
              onChange={handlePassword}
              onBlur={handlePassword}
              {...(password.valid ? {} : { style: { outlineColor: 'red' } })}
            />
            {!password.valid && (
              <p style={{ color: 'red' }}>Invalid password</p>
            )}

            <Button>LOGIN</Button>

            <Link to='/find-account'>
              <Label>FORGOT PASSWORD?</Label>
            </Link>
          </Form>

          <Link to='/sign-up'>
            <Button>SIGN-UP</Button>
          </Link>
        </Container>
      </Section>
      <Footer />
    </LoginSec>
  );
}
