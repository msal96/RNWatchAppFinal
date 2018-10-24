import React from 'react'
import { View, Dimensions } from 'react-native'
import styled from 'styled-components'
import Swiper from 'react-native-swiper'
import BasicInfoElement from './BasicInfoElement'
import FeaturesElement from './FeaturesElement'
import TheBrandElement from './TheBrandElement'
import SwiperButtonsView from './SwiperButtonsView'
let { width } = Dimensions.get('window')
const InfoSwiper = () => {
  const renderPagination = (index, total, context) => {
    return (
      <SwiperButtonsView index={index} />
    )
  }
  return (
    <SwiperWrapper>
      <Swiper
        loop={false}
        renderPagination={renderPagination}
        paginationStyle={{ bottom: 15 }}>
        <BasicInfoElement />
        <FeaturesElement />
        <TheBrandElement />
      </Swiper>
    </SwiperWrapper>
  )
}
const SwiperWrapper = styled(View)`
  width: ${width};
  height: 305;
  padding-top: 30;
  display: flex;
  background-color: #FFFFFF;
`

export default InfoSwiper
