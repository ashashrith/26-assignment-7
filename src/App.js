import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtContext from './context/NxtContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFound from './components/NotFound'
import TrendingRoute from './components/TrendingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import GamingRoute from './components/GamingRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false}

  toggleDarkTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <NxtContext.Provider
        value={{
          isDarkTheme,
          toggleDarkTheme: this.toggleDarkTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
