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
  a{
    text-decoration: none;
  }
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

export const Label = styled.p`
  font-size: 14px;
  color: #b1cdd8;
`

export const EditImgPhoto = styled.img`
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  top: 11vh;
  right: 20vh;
  position: relative;
  background-color: #b1cdd8;
  cursor: pointer;
`

export const EditImgName = styled.img`
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  top: 20vh;
  right: 15vh;
  position: relative;
  background-color: #b1cdd8;
  cursor: pointer;
`