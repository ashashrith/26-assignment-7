import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import NxtContext from '../../context/NxtContext'
import VideoItemDetails from '../VideoItemDetails'
import LinksRoute from '../LinksRoute'

import {
  HomeCont,
  BannerImg,
  VideosListCont,
  BannerCont,
  RemoveCont,
  SearchBtn,
  InputCont,
  SearchInput,
  Ul,
  CloseButton,
  BannerBtn,
  BannerText,
  NoSearch,
  NoP,
  NoHead,
  NoBtn,
  NoImg,
  FailedCont,
  FailImg,
  FailP,
  FailBtn,
  FailHead,
} from './styledComponents'

class HomeRoute extends Component {
  state = {
    searchText: '',
    videoList: [],
    bannerSection: true,
    isFailed: false,
    isLoading: true,
    noSearchResults: false,
  }

  componentDidMount() {
    this.getResultsList()
  }

  getResultsList = async () => {
    const {searchText} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
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
        videoList: fetchedData,
        isLoading: false,
        isFailed: false,
        noSearchResults: false,
      })
    }
    if (response.ok !== true) {
      this.setState({isFailed: true, isLoading: false})
    }
  }

  onChangeSearchText = event => {
    this.setState({searchText: event.target.value})
  }

  onClickSearch = () => {
    const {videoList} = this.state
    this.getResultsList()
    if (videoList.length <= 0) {
      this.setState({noSearchResults: true})
    }
  }

  onClickCloseBtn = () => {
    this.setState({bannerSection: false})
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#181818" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getResultsList()
  }

  render() {
    const {
      searchText,
      videoList,
      bannerSection,
      isFailed,
      isLoading,
      noSearchResults,
    } = this.state

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const webImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const failImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

          return (
            <>
              <Header />
              <HomeCont data-testid="home" isDarkTheme={isDarkTheme}>
                <LinksRoute />
                <VideosListCont>
                  {bannerSection && (
                    <BannerCont data-testid="banner">
                      <RemoveCont>
                        <BannerImg src={webImage} alt="nxt watch logo" />
                        <CloseButton
                          type="button"
                          isDarkTheme={isDarkTheme}
                          data-testid="close"
                          onClick={this.onClickCloseBtn}
                        >
                          close
                        </CloseButton>
                      </RemoveCont>
                      <BannerText isDarkTheme={isDarkTheme}>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerBtn type="button">GET IT NOW</BannerBtn>
                    </BannerCont>
                  )}
                  <InputCont>
                    <SearchInput
                      type="search"
                      value={searchText}
                      onChange={this.onChangeSearchText}
                      className="search-input"
                    />
                    <SearchBtn
                      type="button"
                      onClick={this.onClickSearch}
                      className="search-btn"
                      data-testid="searchButton"
                    >
                      <BsSearch className="icon" />
                    </SearchBtn>
                  </InputCont>
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
                        <>
                          {noSearchResults ? (
                            <NoSearch>
                              <NoImg
                                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                                alt="no videos"
                              />
                              <NoHead>No Search Results Found</NoHead>
                              <NoP>
                                Try different Key words or remove search filter
                              </NoP>
                              <NoBtn type="button">Retry</NoBtn>
                            </NoSearch>
                          ) : (
                            <Ul>
                              {videoList.map(each => (
                                <VideoItemDetails item={each} key={each.id} />
                              ))}
                            </Ul>
                          )}
                        </>
                      )}
                    </>
                  )}
                </VideosListCont>
              </HomeCont>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default HomeRoute
