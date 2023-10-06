import styled from "styled-components";

export const TodoNote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: #ffffff;
  background-color: #0d4d5d;
  border-radius: 10px;
  height: 300px;
  width: 350px;

  @media screen and (max-width: 375px){
    width: 280px;
  }
`;

export const NotesTitle = styled.h1`
  color: #ffffff;
  width: 80%;
  text-align: center;
  padding-bottom: 10px;
  margin: 20px 20px 5px 20px;
  font-weight: bold;
  border-bottom: solid 1px #ffffff;
`;

export const Tasks = styled.div`
  margin: 1rem ;
  width: 90%;
  overflow-y: auto;
`;

export const Text = styled.p`
  margin-left: 5px;
  font-size: 20px;
  width: 100px;
  flex: 1;
`;

export const Task = styled.div`
  margin: 0.5rem 1rem;

  input, ${Text}  {
    display: inline;
  }
`;