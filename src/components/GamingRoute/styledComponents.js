import styled from 'styled-components'

export const GameCont = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const GameVideosCont = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const HeadCont = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f4f4f4')};
  height: 20vh;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 40px;
  flex-shrink: 0;
`

export const Head = styled.h1`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#212121')};
  font-size: 26px;
  font-weight: 700;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: 100%;
  height: auto;
  flex-wrap: wrap;
  list-style: none;
`

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40vh;
  height: 60vh;
  margin-right: 15px;
  margin-bottom: 16px;
`

export const LiImg = styled.img`
  height: 45vh;
  width: 100%;
  background-size: cover;
`

export const GameP1 = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 18px;
  font-weight: 600;
`

export const GameP = styled.p`
  color: #424242;
  font-size: 15px;
  font-weight: 500;
`

export const FailedCont = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color = ${props => (props.isDarkTheme ? '#231f20' : '#f9f9f9')};
`

export const FailP = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #909090;
`

export const FailHead = styled.h1`
  font-size: 21px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#231f20' : '#f9f9f9')};
`

export const FailImg = styled.img`
  height: 60vh;
  width: 60vh;
  background-size: cover;
`

export const FailBtn = styled.button`
  height: 33px;
  width: 90px;
  background-color: #3b82f6;
  border-width: 0px;
  font-size: 12px;
  color: white;
  font-weight: 600;
`
