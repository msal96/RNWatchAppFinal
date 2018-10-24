import React from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components'
import Swiper from 'react-native-swiper'

const ImageSwiper = props => {
  return (
    <SwiperWrapper>
      <Swiper activeDotColor='#1E00A0'>
        {props.photos.map((url, index) => (
          <ImageWrapper key={index}>
            <SwiperImage source={{ uri: url }} />
          </ImageWrapper>
        ))}
      </Swiper>
    </SwiperWrapper>
  )
}

const SwiperWrapper = styled(View)`
  display: flex;
  height: 322;  
  padding: 5px;
  background-color: #FAFAFA;
`
const ImageWrapper = styled(View)`
  justify-content: center;
  flex-direction: row;
`
const SwiperImage = styled(Image)`
  width: 145;
  height: 247;
`

export default ImageSwiper
