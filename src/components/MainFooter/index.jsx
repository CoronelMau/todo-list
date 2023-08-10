import styled from 'styled-components';

const Footer = styled.footer`
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

export default function MainFooter() {
  return (
    <Footer>
      <Logo src='./Logo.png' />
      <Label>Coronel</Label>
    </Footer>
  );
}