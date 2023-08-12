import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 500px;
  min-height: 100px;
  background-color: #b1cdd8;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #0d4d5d3e;
  h1 {
    font-weight: bold;
    font-size: 20px;
    color: #0d4d5d;
  }
`;

export const ModalButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  border-radius: 5px;
  color: #0d4d5d;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #d2dbdf;
  }
`;

export const Label = styled.h1`
  font-size: 20px;
  color: #0d4d5d;
  padding-left: 10px;
  padding-bottom: 5px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 50px;
  width: 95%;
  height: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  padding: 10px 0 10px 15px;
`;

export const ButtonContainer = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  color: #fff;
  background-color: #0d4d5d;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
`;