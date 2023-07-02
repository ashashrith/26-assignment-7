import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'
import NxtContext from '../../context/NxtContext'
import {
  HeaderCont,
  WebsiteImg,
  ThemeButton,
  ThemeImg,
  NavItems,
  ProfileImg,
  LogoutButton,
  CancelBtn,
  ConfirmBtn,
  FirstDiv,
  CloseDiv,
  CloseP,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme, toggleDarkTheme} = value

        const onClickTheme = () => {
          toggleDarkTheme()
        }

        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

        return (
          <HeaderCont isDarkTheme={isDarkTheme}>
            <Link to="/">
              <WebsiteImg src={websiteLogo} alt="website logo" />
            </Link>
            <NavItems>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onClickTheme}
              >
                <ThemeImg src={themeLogo} alt="theme" />
              </ThemeButton>

              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <>
                    <CloseDiv isDarkTheme={isDarkTheme}>
                      <CloseP isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout
                      </CloseP>
                      <FirstDiv>
                        <CancelBtn
                          isDarkTheme={isDarkTheme}
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelBtn>
                        <ConfirmBtn onClick={onClickLogout}>Confirm</ConfirmBtn>
                      </FirstDiv>
                    </CloseDiv>
                  </>
                )}
              </Popup>
            </NavItems>
          </HeaderCont>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default withRouter(Header)
