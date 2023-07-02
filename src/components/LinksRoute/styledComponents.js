import styled from 'styled-components'

export const FeaturesCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  width: 40vh;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f9f9f9')};
`

export const Features = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: transparent;
  list-style: none;
`

export const FeatHead = styled.li`
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  text-decoration: none;
  margin-bottom: 12px;
`

export const ContactCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 20%;
  height: auto;
  background-color: transparent;
`

export const Contact = styled.p`
  font-size: 17px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const ImgCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30vh;
  height: auto;
`

export const Img = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 12px;
  background-size: cover;
`

export const Para = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-weight: 600;
  font-family: 'Roboto';
`
