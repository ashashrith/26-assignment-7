import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtContext from '../../context/NxtContext'
import {
  LoginFormContainer,
  LoginBtn,
  ErrorMsg,
  FormCont,
  LoginWebsiteLogoMobileImg,
  Form,
  InputContainer,
  Label,
  InputText,
  CheckBox,
  CheckBoxCont,
  CheckBoxLabel,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state

    const typePassword = showPassword ? 'text' : 'password'

    return (
      <>
        <Label htmlFor="password">PASSWORD</Label>
        <InputText
          type={typePassword}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <Label htmlFor="username">USERNAME</Label>
        <InputText
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const themeWebsiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <>
              <LoginFormContainer isDarkTheme={isDarkTheme}>
                <FormCont isDarkTheme={isDarkTheme}>
                  <LoginWebsiteLogoMobileImg
                    src={themeWebsiteLogo}
                    alt="website logo"
                  />

                  <Form onSubmit={this.submitForm}>
                    <InputContainer>
                      {this.renderUsernameField()}
                    </InputContainer>
                    <InputContainer>
                      {this.renderPasswordField()}
                    </InputContainer>
                    <CheckBoxCont>
                      <CheckBox
                        id="checkBox"
                        type="checkbox"
                        onClick={this.onClickCheckBox}
                      />
                      <CheckBoxLabel
                        htmlFor="checkBox"
                        isDarkTheme={isDarkTheme}
                      >
                        Show Password
                      </CheckBoxLabel>
                    </CheckBoxCont>
                    <LoginBtn type="submit">Login</LoginBtn>
                    {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                  </Form>
                </FormCont>
              </LoginFormContainer>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default LoginForm
