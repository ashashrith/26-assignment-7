import styled from 'styled-components'

export const HeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : 'white')};
  width: 100%;
  height: 15vh;
`

export const WebsiteImg = styled.img`
  height: 35px;
  width: 120px;
  background-size: cover;
`

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: auto;
`

export const ThemeButton = styled.button`
  height: auto;
  width: auto;
  background-color: transparent;
  border-width: 0px;
`

export const ThemeImg = styled.img`
  height: 30px;
  width: 30px;
  background-size: cover;
  margin-right: 20px;
`

export const ProfileImg = styled.img`
  height: 40px;
  margin-right: 30px;
  width: 40px;
  background-size: cover;
`

export const LogoutButton = styled.button`
  height: 28px;
  width: 80px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#4f46e5')};
  font-size: 13px;
  font-weight: 600;
  border-color: ${props => (props.isDarkTheme ? '#ffffff' : '#4f46e5')};
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
`

export const CancelBtn = styled.button`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#616e7c')};
  border-color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#616e7c')};
  font-size: 13px;
  height: 30px;
  width: 90px;
  margin-right: 16px;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
`
export const CloseDiv = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : 'white')};
  height: 30vh;
  width: 60vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const CloseP = styled.p`
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#616e7c')};
  font-weight: 500;
  font-family: 'Roboto';
`

export const ConfirmBtn = styled.button`
  color: white;
  font-size: 13px;
  height: 30px;
  width: 90px;
  margin-right: 16px;
  background-color: #4f46e5;
  border-width: 0px;
  border-style: solid;
`

export const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
