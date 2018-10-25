import React from 'react'
import styled from 'styled-components'
import { Text, View, TouchableOpacity } from 'react-native'

const ActiveButton = (props) => {
  return (
    <Wrapper>
      <Button>
        <ActiveText>{props.children}</ActiveText>
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
  border-bottom-width: 3;
  border-bottom-color: #1e00a0;
  padding-bottom: 2;
`
const ActiveText = styled(Text)`
  color: #1e00a0;
  align-self: center;
  font-size: 12;
`
export default ActiveButton
