import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

const Guarantee = () => {
  return (
    <Wrapper>
      <Heading>BEZL Guarantee</Heading>
      <Subheading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </Subheading>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  background-color: white;
  padding-horizontal: 30;
  padding-vertical: 10;
`
const Heading = styled(Text)`
  align-items: flex-start;
  color: #20129D;
  font-size: 20;
  line-height: 25;
  padding-vertical: 15;
  font-family: Graphik-Medium;
`
const Subheading = styled(Text)`
  align-items: flex-start;
  padding-bottom: 15;
  font-size: 15;
  font-family: Graphik-Regular;
`
export default Guarantee