import React from 'react'
import styled from 'styled-components'
import { View, Image, Text, Dimensions } from 'react-native'

// const {height, width} = Dimensions.get('window')

const Chronographs = () => {
  return (
    <Wrapper>
      <Photo 
        source={{uri: 'https://icdn6.digitaltrends.com/image/ticwatch-pro-wrist-suit-1500x999.jpg'}}
      />
      <Heading>Our Favorite Chronographs</Heading>
      <Subheading>See All 10 ></Subheading>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex: 1;
  background-color: white;
  border-radius: 20;
  margin-horizontal: 20;
  overflow: hidden;

  border-color: #e3e3e3;
  border-bottom-width: 5;
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
