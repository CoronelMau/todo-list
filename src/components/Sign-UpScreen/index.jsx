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
import { useState } from 'react';
import {
  validateEmail,
  validatePassword,
} from '../Validations/LoginValidation';

export default function SignUpScreen() {
  const [name, setName] = useState({
    value: '',
    valid: true,
  });

  const [email, setEmail] = useState({
    value: '',
    valid: true,
  });

  const [password, setPassword] = useState({
    value: '',
    valid: true,
  });

  const [repeatPassword, setRepeatPassword] = useState({
    value: '',
    valid: true,
  });

  const handleName = (e) => {
    const { target } = e;

    setName({
      value: target.value,
      valid: true,
    });
  };

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

  const handleRepeatPassword = (e) => {
    const { target } = e;
    const valid = validatePassword(target.value);

    setRepeatPassword({
      value: target.value,
      valid,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name.value,
      email: email.value,
      password:
        password === repeatPassword
          ? password.value
          : alert('Passwords are different'),
    };

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch('http://localhost:5137/user/sign-up', config)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) return console.log(res);

        alert(res.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <SignUpSec>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Link to='/'>
            <Image src='./arrow.webp' />
          </Link>
          <Input placeholder='name' required onChange={handleName}></Input>
          <Input
            placeholder='email@example.com'
            required
            onChange={handleEmail}
          ></Input>
          <Input
            type='password'
            placeholder='password'
            onChange={handlePassword}
          ></Input>
          <Input
            type='password'
            placeholder='repeat password'
            onChange={handleRepeatPassword}
          ></Input>
          <Button>SIGN-UP</Button>
        </Form>
      </Section>
      <Footer />
    </SignUpSec>
  );
}
