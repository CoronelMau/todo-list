import styled from "styled-components"

export const Overlay = styled.div`
  width: 150px;
  height: 50px;
  background-color: #fff;
  position: absolute;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  top: 4rem;
  right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 320px){
    right: 2rem;
  }
  `

export const Option = styled.h1`
  font-weight: bold;
  color: #0d4d5d;
  cursor: pointer;
  `

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 40px;
width: 190px;
border-radius: 5px;
&:hover{
  background-color: #d2dbdf;
}
`