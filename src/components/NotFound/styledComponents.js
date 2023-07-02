import styled from 'styled-components'

export const NotCont = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ImgCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  width: 100%;
  height: 100vh;
`

export const Image = styled.img`
  height: 60vh;
  width: 60vh;
  background-size: cover;
`

export const NotHead = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 20px;
  font-weight: 700;
`

export const NotP = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
`
