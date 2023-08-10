import styled from 'styled-components';

export const Main = styled.div`
  height: 82vh;
  background-color: #b1cdd8;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65vh;
  height: 65vh;
  border-radius: 20px;
  background-color: #0d4d5d;
  gap: 25px;
`;

export const ProfileImg = styled.img`
  height: 45vh;
  border-radius: 50%;
`;

export const Name = styled.h1`
  font-size: 35px;
  color: #b1cdd8;
`

export const Functions = styled.div`
  display: flex;
  align-items: center;
  gap: 15vh;
`

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 10px;
`

export const Label = styled.p`
  font-size: 14px;
  color: #b1cdd8;
`

export const Button = styled.button`
  color: #0d4d5d;
  font-size: 15px;
  background-color: #b1cdd8;
  border:none;
  border-radius: 5px;
  padding: 5px 15px;
`

export const EditImgPhoto = styled.img`
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  top: 60vh;
  right: 85vh;
  position: absolute;
  background-color: #b1cdd8;
`

export const EditImgName = styled.img`
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  top: 67.5vh;
  right: 75vh;
  position: absolute;
  background-color: #b1cdd8;
`