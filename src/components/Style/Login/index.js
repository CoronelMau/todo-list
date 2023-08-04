import styled from "styled-components";

export const LoginSec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #0d4d5d;
  font-family: 'Montserrat', sans-serif;
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
`;

export const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  padding: 20px 100px 20px 20px;
  font-size: 20px;
  margin: 5px;
  box-sizing: border-box;
  width: 570px;
`;

export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  background-color: #0d4d5d;
  border: none;
  color: #ffffff;
  font-size: 30px;
  padding: 10px 60px 10px 60px;
  border-radius: 10px;
  width: 270px;
  margin-top: 20px;
`;

export const Label = styled.h1`
  font-size: 16px;
  color: #0d4d5d;
  margin-bottom: 50px;
  padding: 30px 200px 30px 200px;
  border-bottom: solid 1px #0d4d5d;
`;
