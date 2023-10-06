import styled from 'styled-components';

export const Main = styled.div`
  min-height: 82vh;
  background-color: #b1cdd8;
`;

export const Close = styled.img`
  position: relative;
  height: 30px;
  top: 20px;
  left: 330px;
  cursor: pointer;

  @media screen and (max-width: 375px){
    left: 250px;
  }
`

export const Container = styled.div`
  padding: 10vh 25vh 10vh 25vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px){
    padding: 10vh;
  }

  @media screen and (max-width: 425px){
    padding: 8vh 20vh 8vh 20vh;
  }

  @media screen and (max-width: 375px){
    padding: 8vh 10vh 8vh 10vh;
  }
`;

export const Plus = styled.img`
  position: fixed;
  right: 5vh;
  bottom: 5vh;
  height: 50px;
  cursor: pointer;

  @media screen and (max-width: 425px){
    height: 45px;
    right: 2vh;
  }
`;