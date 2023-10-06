import styled from 'styled-components';

export const Header = styled.header`
  min-height: 80px;
  background-color: #0d4d5d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a{
    text-decoration: none;
  }
`;

export const MainTitle = styled.h1`
  color: #ffffff;
  font-size: 40px;
  padding-left: 50px;

  @media screen and (max-width: 425px){
    font-size: 30px;
  }


  @media screen and (max-width: 320px){
    font-size: 25px;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  border: none;
  padding: 5px 300px 5px 20px;
  border-radius: 20px;

  @media screen and (max-width: 768px){
    padding: 5px 100px 5px 20px;
  }
  
  @media screen and (max-width: 768px){
    padding: 5px 100px 5px 20px;
  }

  @media screen and (max-width: 426px){
display: none  }
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  height: 50px;
  margin-right: 80px;
  cursor: pointer;

  @media screen and (max-width: 320px){
    margin-right: 20px;
  }
`;
