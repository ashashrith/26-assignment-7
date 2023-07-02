import styled from 'styled-components'

export const ListCont = styled.li`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 50vh;
`

export const UrlImg = styled.img`
  height: 30vh;
  width: 100%;
  background-size: cover;
`

export const ProfileCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: auto;
  width: 100%;
`

export const ProImg = styled.img`
  height: 35px;
  width: 35px;
  background-size: cover;
  margin-right: 12px;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const Name = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-family: 'Roboto';
  font-weight: 500;
`

export const ViewCont = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
