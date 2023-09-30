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
import { useState } from 'react';
import { validatePassword } from '../Validations/LoginValidation';

export default function ChangePasswordScreen() {
  const jwt = JSON.parse(localStorage.getItem('token'));

  const [oldPwd, setOldPwd] = useState({
    value: '',
    valid: true,
  });
  const [newPwd, setNewPwd] = useState({
    value: '',
    valid: true,
  });

  const handleOldPwd = (e) => {
    const { target } = e;
    const valid = validatePassword(target.value);

    setOldPwd({
      value: target.value,
      valid,
    });
  };

  const handleNewPwd = (e) => {
    const { target } = e;
    const valid = validatePassword(target.value);

    setNewPwd({
      value: target.value,
      valid,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jwt = JSON.parse(localStorage.getItem('token'));

    const data = {
      oldPassword: oldPwd.value,
      newPassword: newPwd.value,
    };

    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    };

    fetch('http://localhost:5137/user/change-pwd', config)
      .then((res) => res.json())
      .then((res) => alert(res.message))
      .catch((error) => console.error(error));
  };

  return (
    <LoginSec>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Link to={jwt !== '' ? '/profile' : '/'}>
            <Image alt='arrow' src='../arrow.webp' />
          </Link>
          <Header>Change Password</Header>
          <Input
            required
            type='password'
            placeholder='Old password'
            onChange={handleOldPwd}
            onBlur={handleOldPwd}
            {...(oldPwd.valid ? {} : { style: { outlineColor: 'red' } })}
          />
          <Input
            required
            type='password'
            placeholder='New password'
            onChange={handleNewPwd}
            onBlur={handleNewPwd}
            {...(newPwd.valid ? {} : { style: { outlineColor: 'red' } })}
          />
          <Button>SAVE</Button>
        </Form>
      </Section>
      <Footer />
    </LoginSec>
  );
}
