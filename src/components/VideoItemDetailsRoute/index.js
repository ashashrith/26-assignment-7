import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import Header from '../Header'
import LinksRoute from '../LinksRoute'

import NxtContext from '../../context/NxtContext'

import {
  First,
  ProDiv,
  ProCont,
  ProImg,
  Title,
  Count,
  DetailsCont,
  ItemCont,
  LikeBtn,
  DisBtn,
  SaveBtn,
  Div,
  Line,
  Cont,
  FailedCont,
  FailImg,
  FailP,
  FailBtn,
  FailHead,
} from './styledComponents'

class VideoItemDetailsRoute extends Component {
  state = {
    itemDetails: {},
    isSaved: false,
    isLoading: true,
    isLiked: false,
    isDisLiked: false,
    isSave: false,
    isFailed: false,
  }

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        itemDetails: updatedData,
        isLoading: false,
        isFailed: false,
      })
    }
    if (response.ok !== true) {
      this.setState({isFailed: true, isLoading: false})
    }
  }

  onClickSaveBtn = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
      isSave: !prevState.isSave,
    }))
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickLike = () => {
    this.setState({isLiked: true, isDisLiked: false})
  }

  onClickDisLike = () => {
    this.setState({isLiked: false, isDisLiked: true})
  }

  onClickRetry = () => {
    this.getItemDetails()
  }

  render() {
    const {
      itemDetails,
      isSaved,
      isLoading,
      isLiked,
      isDisLiked,
      isSave,
      isFailed,
    } = this.state

    const saveText = isSaved ? 'Saved' : 'Save'

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const failImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

          return (
            <>
              <Header />
              <First>
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
                      <ItemCont
                        isDarkTheme={isDarkTheme}
                        data-testid="videoItemDetails"
                      >
                        <ReactPlayer url={itemDetails.videoUrl} />
                        <Title isDarkTheme={isDarkTheme}>
                          {itemDetails.title}
                        </Title>
                        <DetailsCont>
                          <Div>
                            <Count isDarkTheme={isDarkTheme}>
                              {itemDetails.viewCount} views
                            </Count>
                            <BsDot />
                            <Count isDarkTheme={isDarkTheme}>
                              {itemDetails.publishedAt}
                            </Count>
                          </Div>
                          <Cont>
                            <LikeBtn
                              isDarkTheme={isDarkTheme}
                              type="button"
                              onClick={this.onClickLike}
                              isLiked={isLiked}
                              isDisLiked={isDisLiked}
                            >
                              Like
                            </LikeBtn>
                            <DisBtn
                              isDarkTheme={isDarkTheme}
                              type="button"
                              onClick={this.onClickDisLike}
                              isDisLiked={isDisLiked}
                              isLiked={isLiked}
                            >
                              Dislike
                            </DisBtn>
                            <SaveBtn
                              isSave={isSave}
                              isDarkTheme={isDarkTheme}
                              type="button"
                              onClick={this.onClickSaveBtn}
                            >
                              {saveText}
                            </SaveBtn>
                          </Cont>
                        </DetailsCont>
                        <Line />
                        <ProCont>
                          <ProImg
                            src={itemDetails.profileImageUrl}
                            alt="channel logo"
                          />
                          <ProDiv>
                            <Title isDarkTheme={isDarkTheme}>
                              {itemDetails.name}
                            </Title>
                            <Count isDarkTheme={isDarkTheme}>
                              {itemDetails.subscriberCount} subscribers
                            </Count>
                          </ProDiv>
                        </ProCont>
                        <Title isDarkTheme={isDarkTheme}>
                          {itemDetails.description}
                        </Title>
                      </ItemCont>
                    )}
                  </>
                )}
              </First>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
