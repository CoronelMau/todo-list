import styled from 'styled-components';

const MainHeader = styled.header`
  height: 8vh;
  background-color: #0d4d5d;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MainTitle = styled.h1`
  color: #ffffff;
  font-size: 40px;
`;

const Input = styled.input`
  font-size: 18px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  padding: 5px 400px 5px 20px;
  border-radius: 20px;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  height: 50px;
`;

const Header = () => {
  return (
    <MainHeader>
      <MainTitle>Todo - List</MainTitle>
      <Input placeholder='search' />
      <ProfileImg src='https://github.com/CoronelMau.png' />
    </MainHeader>
  );
};

export default Header;
