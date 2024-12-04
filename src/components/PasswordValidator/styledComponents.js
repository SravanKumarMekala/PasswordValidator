// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #24263c;
  padding: 20px;
`

export const Heading = styled.h1`
  font-family: Roboto;
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
`

export const Input = styled.input`
  font-family: Roboto;
  font-size: 16px;
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
  border: 1px solid #383a4e;
  border-radius: 5px;
  background-color: #edeeff;
  color: #383a4e;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 5px #434451;
  }
`

export const Message = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => (props.isValid ? '#10b981' : '#ef4444')};
  margin-bottom: 10px;
`

export const InfoText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #f8fafc;
`
