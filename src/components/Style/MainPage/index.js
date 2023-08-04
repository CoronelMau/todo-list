import styled from 'styled-components';

export const Main = styled.div`
  height: 82vh;
  background-color: #b1cdd8;
  font-family: 'Montserrat', sans-serif;
`;

export const Container = styled.div`
  padding: 10vh 25vh 10vh 25vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Notes = styled.div`
  display: inline-block;
  font-size: 20px;
  color: #ffffff;
  background-color: #0d4d5d;
  border-radius: 10px;
  height: 250px;
`;

export const NotesTitle = styled.h1`
  color: #ffffff;
  padding: 10px 80px 10px 80px;
  margin: auto 20px;
  border-bottom: solid 1px #ffffff;
  font-weight: bold;
`;

export const Tasks = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  flex-wrap: wrap;
`;

export const Text = styled.p`
  margin-left: 5px;
  font-size: 20px;
`;

export const CheckBox = styled.img`
  height: 20px;
`;

export const Plus = styled.img`
  height: 50px;
`;