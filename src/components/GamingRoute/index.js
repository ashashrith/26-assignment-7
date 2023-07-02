import {Component} from 'react'

import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import NxtContext from '../../context/NxtContext'
import Header from '../Header'
import LinksRoute from '../LinksRoute'

import {
  GameCont,
  GameVideosCont,
  HeadCont,
  Head,
  Ul,
  Li,
  GameP,
  GameP1,
  LiImg,
  FailedCont,
  FailImg,
  FailP,
  FailBtn,
  FailHead,
} from './styledComponents'

class TrendingRoute extends Component {
  state = {gamingList: [], isLoading: true, isFailed: false}

  componentDidMount() {
    this.getGamingVideoList()
  }

  getGamingVideoList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const fetchedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingList: fetchedData,
        isFailed: false,
        isLoading: false,
      })
    }
    if (response.ok !== true) {
      this.setState({isFailed: true, isLoading: false})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getGamingVideoList()
  }

  render() {
    const {gamingList, isFailed, isLoading} = this.state

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const failImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

          return (
            <>
              <Header />
              <GameCont isDarkTheme={isDarkTheme}>
                <LinksRoute />
                {isLoading ? (
                  this.renderLoader()
                ) : (
                  <>
                    {isFailed ? (
                      <FailedCont isDarkTheme={isDarkTheme}>
                        <FailImg src={failImg} alt="failure view" />
                        <FailHead isDarkTheme={isDarkTheme}>
                          Oops! Something Went Wrong
                        </FailHead>
                        <FailP>
                          We are having some trouble to complete your request.
                          Please try again.
                        </FailP>
                        <FailBtn onClick={this.onClickRetry}>Retry</FailBtn>
                      </FailedCont>
                    ) : (
                      <GameVideosCont
                        isDarkTheme={isDarkTheme}
                        data-testid="gaming"
                      >
                        <HeadCont
                          isDarkTheme={isDarkTheme}
                          data-testid="banner"
                        >
                          <Head isDarkTheme={isDarkTheme}>Gaming</Head>
                        </HeadCont>

                        <Ul>
                          {gamingList.map(each => (
                            <Li key={each.id}>
                              <Link to={`/videos/${each.id}`}>
                                <LiImg
                                  src={each.thumbnailUrl}
                                  alt="video thumbnail"
                                />
                                <GameP1 isDarkTheme={isDarkTheme}>
                                  {each.title}
                                </GameP1>
                                <GameP>
                                  {each.viewCount} Watching Worldwide
                                </GameP>
                              </Link>
                            </Li>
                          ))}
                        </Ul>
                      </GameVideosCont>
                    )}
                  </>
                )}
              </GameCont>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default TrendingRoute
