import React from 'react'
import styled from 'styled-components'
import { View, Image, Text } from 'react-native'

const Chronographs = () => {
  return (
    <Wrapper>
      <Photo 
        source={require('../../../assets/images/chronographs.png')}
      />
      <Heading>Our Favorite Chronographs</Heading>
      <Subheading>See All 10 ></Subheading>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex: 1;
  background-color: white;
  border-radius: 10;
  margin-horizontal: 20;
  box-shadow: 0 10px 5px lightgrey;
`
const Photo = styled(Image)`
  height: 300;
  width: 100%;
`
const Heading = styled(Text)`
  align-items: flex-start;
  color: #7325FB;
  margin-left: 20;
  font-size: 25;
  width: 70%;
  padding-top: 15;
  padding-bottom: 10;
  font-family: Graphik-Medium;
`
const Subheading = styled(Text)`
  align-items: flex-start;
  margin-left: 20;
  padding-bottom: 15;
  font-size: 15;
  font-family: Graphik-Regular;
`

export default Chronographs
