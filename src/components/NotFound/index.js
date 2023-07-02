import NxtContext from '../../context/NxtContext'
import Header from '../Header'
import LinksRoute from '../LinksRoute'

import {NotCont, ImgCont, NotHead, Image, NotP} from './styledComponents'

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotCont>
            <LinksRoute />
            <ImgCont isDarkTheme={isDarkTheme}>
              <Image src={themeImage} alt="not found" />
              <NotHead isDarkTheme={isDarkTheme}>Page Not Found</NotHead>
              <NotP isDarkTheme={isDarkTheme}>
                we are sorry, the page you requested could not be found.
              </NotP>
            </ImgCont>
          </NotCont>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
