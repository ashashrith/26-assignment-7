import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-weight: 700;
`

export const SavedCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const HeadingCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  height: 16vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
`

export const SaveDetailsCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: transparent;
`

export const SaveTitle = styled.h1`
  font-size: 17px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const DetailsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
