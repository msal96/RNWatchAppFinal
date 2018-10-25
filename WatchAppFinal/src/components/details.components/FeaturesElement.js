import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'

const FeaturesElement = (props) => {
  return (
    <Wrapper>
      <Heading>Description</Heading>
      <Description>
      {/* {props.description} */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
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
export default FeaturesElement
