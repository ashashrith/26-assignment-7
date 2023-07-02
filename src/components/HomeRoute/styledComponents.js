import styled from 'styled-components'

export const HomeCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  height: auto;
  width: auto;
`

export const FeaturesCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  width: 30vh;
  height: 100%;
  background-color: transparent;
`

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: transparent;
`

export const FeatHead = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  text-decoration: none;
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

export const BannerImg = styled.img`
  height: 30px;
  width: 110px;
  margin-right: 12px;
  background-size: cover;
`

export const Para = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-weight: 600;
  font-family: 'Roboto';
`

export const VideosListCont = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  overflow: auto;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 30px;
`

export const BannerCont = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
  height: 30vh;
  width: 100%;
  background-size: cover;
`

export const RemoveCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
  align-items: center;
`

export const CloseButton = styled.button`
  background-color: transparent;
  font-size: 14px;
  color: #181818;
  font-weight: 500;
  border-width: 1px;
  margin-right: 20px;
`

export const BannerText = styled.p`
  font-size: 16px;
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
`

export const BannerBtn = styled.button`
  color: #181818;
  border-color: #181818;
  font-size: 13px;
  font-weight: 600;
  border-width: 1px;
  background-color: transparent;
  height: 30px;
`

export const InputCont = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: #475569;
  height: 30px;
  width: 300px;
  justify-content: space-between;
  background-color: transparent;
  margin-top: 20px;
`

export const SearchInput = styled.input`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  outline: none;
  border-width: 0px;
  width: 250px;
  height: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const SearchBtn = styled.button`
  height: 30px;
  width: 50px;
`

export const Ul = styled.ul`
  height: auto;
  width: 100%;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const NoSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const NoImg = styled.img`
  height: 60vh;
  width: 60vh;
  background-size: cover;
`

export const NoP = styled.p`
  color: #909090;
  font-size: 15px;
  font-weight: 500;
`

export const NoHead = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 20px;
  font-weight: 600;
`

export const NoBtn = styled.button`
  height: 30px;
  width: 100px;
  color: white;
  background-color: #4f46e5;
  border-width: 0px;
  font-size: 600;
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
