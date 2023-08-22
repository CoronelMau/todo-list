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
`

export const Container = styled.div`
  padding: 10vh 25vh 10vh 25vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
`;

export const Plus = styled.img`
  position: absolute;
  right: 5vh;
  bottom: 5vh;
  height: 50px;
  cursor: pointer;
`;