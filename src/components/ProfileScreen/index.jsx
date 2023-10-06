import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';
import {
  Main,
  Container,
  ProfileImg,
  Name,
  Label,
  Functions,
  // EditImgPhoto,
  EditImgName,
} from '../Style/Profile';
import ModalName from '../ModalName';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useModal } from '../../hooks';

export default function ProfileScreen() {
  const navigate = useNavigate();
  const { close, isOpen, open } = useModal();

  const onClose = () => close();

  const [name, setName] = useState();

  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem('token'));

    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };

    fetch('http://localhost:5137/user/profile', config)
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem('token');
          navigate('/');
        }
        return res.json();
      })
      .then((res) => {
        setName(res.name);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <MainHeader />
      <Main>
        <ModalName isOpen={isOpen} onClose={onClose} />
        <Container>
          <ProfileImg src='../user.webp' />
          <Name>
            <div style={{ flex: 1 }}>{name}</div>
            <EditImgName src='../edit.webp' onClick={open} />
          </Name>
          <Functions>
            <Link to='/change-pwd'>
              <Label>CHANGE PASSWORD</Label>
            </Link>
          </Functions>
          {/* <EditImgPhoto src='../edit.webp' /> */}
        </Container>
      </Main>
      <MainFooter />
    </div>
  );
}
