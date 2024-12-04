// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  Heading,
  Input,
  Message,
  InfoText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const handlePasswordChange = event => setPassword(event.target.value)

  const isValidPassword = password.length >= 8

  return (
    <AppContainer>
      <Heading>Password Validator</Heading>
      <Input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      {password.length > 0 && (
        <Message isValid={isValidPassword}>
          {isValidPassword
            ? 'Your passwors is valid'
            : 'Your passwors is invalid'}
        </Message>
      )}
      <InfoText>Your password must be at least 8 characters</InfoText>
    </AppContainer>
  )
}

export default PasswordValidator
