import styled from "styled-components";

export const Notes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: #ffffff;
  background-color: #0d4d5d;
  border-radius: 10px;
  min-height: 250px;
  width: 250px;
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
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 80%;
  margin-top: 5px;
  padding: 5px;
`;

export const Text = styled.p`
  margin-left: 5px;
  font-size: 20px;
  width: 100px;
  flex: 1;
`;

export const CheckBox = styled.img`
  height: 20px;
  cursor: pointer;
`;