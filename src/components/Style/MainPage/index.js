import styled from 'styled-components';

export const Main = styled.div`
  min-height: 82vh;
  background-color: #b1cdd8;
`;

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
  right: 40px;
  bottom: 100px;
  height: 50px;
  cursor: pointer;
`;