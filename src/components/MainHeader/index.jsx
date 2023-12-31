import { Header, MainTitle, Input, ProfileImg } from '../Style/MainHeader';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import { useState } from 'react';

export default function MainHeader() {
  const [menu, handleMenu] = useState(false);

  return (
    <Header>
      <Link to='/main'>
        <MainTitle>Todo - List</MainTitle>
      </Link>
      <Input placeholder='search' />
      <ProfileImg
        src='../user.webp'
        onClick={() => {
          handleMenu(!menu);
        }}
      />
      {menu && <Menu />}
    </Header>
  );
}
