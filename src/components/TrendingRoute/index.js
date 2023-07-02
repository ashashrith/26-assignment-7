import {Component} from 'react'

import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import Cookies from 'js-cookie'
import NxtContext from '../../context/NxtContext'
import Header from '../Header'
import LinksRoute from '../LinksRoute'

import {
  TrenCont,
  TrenVideosCont,
  HeadCont,
  Head,
  Ul,
  Li,
  LiImg,
  DetailsDiv,
  DetailP,
  HeadDetail,
  CountDiv,
  FailedCont,
  FailImg,
  FailP,
  FailBtn,
  FailHead,
} from './styledComponents'

class TrendingRoute extends Component {
  state = {trendingList: [], isLoading: true, isFailed: false}

  componentDidMount() {
    this.getTrendingVideoList()
  }

  getTrendingVideoList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'

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
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        trendingList: fetchedData,
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
    this.getTrendingVideoList()
  }

  render() {
    const {trendingList, isFailed, isLoading} = this.state
    console.log(trendingList)

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
              <TrenCont isDarkTheme={isDarkTheme}>
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
                      <TrenVideosCont
                        isDarkTheme={isDarkTheme}
                        data-testid="trending"
                      >
                        <HeadCont
                          isDarkTheme={isDarkTheme}
                          data-testid="banner"
                        >
                          <Head isDarkTheme={isDarkTheme}>Trending</Head>
                        </HeadCont>
                        <Ul>
                          {trendingList.map(each => (
                            <Li key={each.id}>
                              <Link to={`/videos/${each.id}`}>
                                <LiImg
                                  src={each.thumbnailUrl}
                                  alt="video thumbnail"
                                />
                                <DetailsDiv>
                                  <HeadDetail isDarkTheme={isDarkTheme}>
                                    {each.title}
                                  </HeadDetail>
                                  <DetailP isDarkTheme={isDarkTheme}>
                                    {each.name}
                                  </DetailP>
                                  <CountDiv>
                                    <DetailP isDarkTheme={isDarkTheme}>
                                      {each.viewCount} views
                                    </DetailP>
                                    <BsDot />
                                    <DetailP isDarkTheme={isDarkTheme}>
                                      {each.publishedAt}
                                    </DetailP>
                                  </CountDiv>
                                </DetailsDiv>
                              </Link>
                            </Li>
                          ))}
                        </Ul>
                      </TrenVideosCont>
                    )}
                  </>
                )}
              </TrenCont>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default TrendingRoute
