import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f9f9f9')};
  height: 100vh;
  width: 100%;
`

export const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  height: 50vh;
  border-radius: 10px;
  width: 50%;
`

export const LoginWebsiteLogoMobileImg = styled.img`
  height: 40px;
  width: 30%;
  background-size: cover;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const SubmitBtn = styled.button`
  height: auto;
  width: auto;
  background-color: transparent;
  border-width: 0px;
`

export const Label = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`

export const InputText = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const LoginBtn = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`

export const CheckBoxCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`

export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
`

export const CheckBoxLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 12px;
  font-weight: 500;
`
