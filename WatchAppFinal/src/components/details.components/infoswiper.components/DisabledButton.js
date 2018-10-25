import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const DisabledButton = (props) => {
  return (
    <Wrapper>
      <Button>
        <DisabledText>{props.children}</DisabledText>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`
const Button = styled(TouchableOpacity)`
`
const DisabledText = styled(Text)`
  color: #646464;
  font-size: 12;
`
export default DisabledButton
