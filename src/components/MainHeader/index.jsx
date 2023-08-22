import { Header, MainTitle, Input, ProfileImg } from '../Style/MainHeader';
import { Link } from 'react-router-dom';

export default function MainHeader() {
  return (
    <Header>
      <Link to='/main/:id'>
        <MainTitle>Todo - List</MainTitle>
      </Link>
      <Input placeholder='search' />
      <Link to='/profile/:id'>
        <ProfileImg src='https://github.com/CoronelMau.png' />
      </Link>
    </Header>
  );
}
