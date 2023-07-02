import {Link} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'

import {
  FeaturesCont,
  Features,
  FeatHead,
  Contact,
  ContactCont,
  ImgCont,
  Img,
  Para,
} from './styledComponents'

const LinksRoute = () => (
  <>
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <FeaturesCont isDarkTheme={isDarkTheme}>
            <Features>
              <FeatHead isDarkTheme={isDarkTheme}>
                <Link to="/">Home</Link>
              </FeatHead>
              <FeatHead>
                <Link to="/trending">Trending</Link>
              </FeatHead>
              <FeatHead>
                <Link to="/gaming">Gaming</Link>
              </FeatHead>
              <FeatHead>
                <Link to="/saved-videos">Saved Videos</Link>
              </FeatHead>
            </Features>
            <ContactCont>
              <Contact isDarkTheme={isDarkTheme}>CONTACT US</Contact>
              <ImgCont>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ImgCont>
              <Para isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </Para>
            </ContactCont>
          </FeaturesCont>
        )
      }}
    </NxtContext.Consumer>
  </>
)

export default LinksRoute
