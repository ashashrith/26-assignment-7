import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import NxtContext from '../../context/NxtContext'

import {
  ListCont,
  ProfileCont,
  Title,
  UrlImg,
  Name,
  ViewCont,
  ProImg,
} from './styledComponents'

const VideoItemDetails = props => {
  const {item} = props
  const {
    title,
    name,
    thumbnailUrl,
    profileImageUrl,
    viewCount,
    publishedAt,
    id,
  } = item

  const time = formatDistanceToNow(new Date(publishedAt))
  console.log(time)

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <ListCont>
            <Link to={`/videos/${id}`}>
              <UrlImg src={thumbnailUrl} alt="video thumbnail" />
              <ProfileCont>
                <ProImg src={profileImageUrl} alt="channel logo" />
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
              </ProfileCont>
              <Name isDarkTheme={isDarkTheme}>{name}</Name>
              <ViewCont>
                <Name isDarkTheme={isDarkTheme}>{viewCount} views </Name>
                <BsDot />
                <Name isDarkTheme={isDarkTheme}>{time}</Name>
              </ViewCont>
            </Link>
          </ListCont>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default VideoItemDetails
