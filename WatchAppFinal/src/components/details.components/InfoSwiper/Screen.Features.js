import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'

const FeaturesScreen = (props) => {
  return (
    <Wrapper>
      <Heading>Description</Heading>
      <Description>
      {props.description}
      </Description>
    </Wrapper>
  )
}
const Wrapper = styled(View)`
  width: 82%;
  height: 100%;
  align-self: center;
`
const Heading = styled(Text)`
  font-family: Graphik-Medium;
  font-size: 15;
  paddingHorizontal: 5;
`
const Description = styled(Text)`
  paddingHorizontal: 5;
  paddingVertical: 5;
`
export default FeaturesScreen
