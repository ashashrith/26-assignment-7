import {Component} from 'react'

import NxtContext from '../../context/NxtContext'
import LinksRoute from '../LinksRoute'
import Header from '../Header'

import {
  Heading,
  SavedCont,
  HeadingCont,
  SaveDetailsCont,
  DetailsList,
  SaveTitle,
} from './styledComponents'

class SavedVideosRoute extends Component {
  state = {savedVideosList: [], emptyView: false}

  render() {
    const {savedVideosList, emptyView} = this.state
    console.log(savedVideosList, emptyView)

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <SavedCont data-testid="savedVideos" isDarkTheme={isDarkTheme}>
                <LinksRoute />
                <SaveDetailsCont isDarkTheme={isDarkTheme}>
                  <HeadingCont isDarkTheme={isDarkTheme}>
                    <Heading isDarkTheme={isDarkTheme}>Ash</Heading>
                  </HeadingCont>
                  <DetailsList>
                    <SaveTitle>Ash</SaveTitle>
                  </DetailsList>
                </SaveDetailsCont>
              </SavedCont>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default SavedVideosRoute
