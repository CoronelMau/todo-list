import styled from 'styled-components';

export const Main = styled.div`
  background-color: #b1cdd8;
  height: 82vh;
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
  @media screen and (max-width: 768px){
    width: 60vh;
    height: 60vh;
  }
  @media screen and (max-width: 425px){
    width: 40vh;
    height: 40vh;
  }

`;

export const ProfileImg = styled.img`
  height: 45vh;
  border-radius: 50%;

  @media screen and (max-width: 768px){
    height: 35vh;
  }

  @media screen and (max-width: 425px){
    height: 25vh;
  }
`;

export const Name = styled.h1`
  font-size: 35px;
  color: #b1cdd8;
  display: flex;
  align-items: center;
  width: 450px;
  justify-content: right;
  text-align: center;

  @media screen and (max-width: 1024px){
    font-size: 25px;
    width: 250px;
}

  @media screen and (max-width: 425px){
    font-size: 25px;
    width: 300px;
}

@media screen and (max-width: 425px){
    font-size: 25px;
    width: 250px;
}
`

export const Functions = styled.div`
  display: flex;
  align-items: center;
  gap: 15vh;
`

export const Label = styled.p`
  font-size: 14px;
  color: #b1cdd8;

  @media screen and (max-width: 425px){
    font-size: 10px;
}
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
  @media screen and (max-width: 768px){
    top: 9vh;
  }
`

export const EditImgName = styled.img`
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  background-color: #b1cdd8;
  cursor: pointer;

  @media screen and (max-width: 425px){
    height: 15px;
  }
`