import { Header, MainTitle, Input, ProfileImg } from '../Style/MainHeader';

export default function MainHeader() {
  return (
    <Header>
      <MainTitle>Todo - List</MainTitle>
      <Input placeholder='search' />
      <ProfileImg src='https://github.com/CoronelMau.png' />
    </Header>
  );
}
