import styled from "styled-components";

export const LoginSec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #0d4d5d;
`;

export const Section = styled.div`
  font-weight: lighter;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

export const Form = styled.form`
  background-color: #b1cdd8;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 670px;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 50px;

  @media screen and (max-width: 768px){
    width: 580px;
    height: 300px;
  }

  @media screen and (max-width: 426px){
    width: 320px;
  }

  @media screen and (max-width: 320px){
    width: 270px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  padding: 20px 100px 20px 20px;
  font-size: 20px;
  margin: 5px;
  box-sizing: border-box;
  width: 570px;

  @media screen and (max-width: 768px){
    width: 480px;
  }

  @media screen and (max-width: 426px){
    width: 240px;
    padding: 20px 20px 20px 20px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  background-color: #0d4d5d;
  border: none;
  color: #ffffff;
  font-size: 26px;
  padding: 10px 60px 10px 60px;
  border-radius: 10px;
  width: 270px;
  margin-top: 50px;
  margin-bottom: 80px;

  @media screen and (max-width: 426px){
    width: 150px;
    padding: 10px 30px 10px 30px;
    font-size: 16px;
}
`;

export const Header = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #0d4d5d;
  padding: 30px 200px 50px 200px;
  
  @media screen and (max-width: 768px){
    padding: 30px 100px 50px 100px;
    font-size: 24px;
}

@media screen and (max-width: 320px){
    padding: 30px 50px 50px 50px;
    font-size: 18px;
}
`;