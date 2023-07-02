import styled from 'styled-components'

export const ItemCont = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const First = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const DetailsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 65%;
`

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Count = styled.p`
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#616e7c')};
  font-weight: 500;
`

export const LikeBtn = styled.button`
  margin-right: 12px;
  background-color: transparent;
  border-width: 0px;
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
`

export const DisBtn = styled.button`
  margin-right: 12px;
  background-color: transparent;
  border-width: 0px;
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
`

export const SaveBtn = styled.button`
  margin-right: 12px;
  background-color: transparent;
  border-width: 0px;
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isSave ? '#2563eb' : '#64748b')};
`

export const Line = styled.hr`
  width: 100%;
  color: #616e7c;
`

export const ProCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ProImg = styled.img`
  height: 50px;
  width: 50px;
  background-size: cover;
  margin-right: 20px;
`

export const ProDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 20px;
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
