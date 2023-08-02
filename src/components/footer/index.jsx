import styled from 'styled-components';

const MainFooter = styled.footer`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  min-height: 10vh;
`;

const Logo = styled.img`
  width: 35px;
`;

const Label = styled.h1`
  font-size: 15px;
`;

const Footer = () => {
  return (
    <MainFooter>
      <Logo src='./Logo.png' />
      <Label>Coronel</Label>
    </MainFooter>
  );
};

export default Footer;
