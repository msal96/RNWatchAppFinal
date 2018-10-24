import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import styled from 'styled-components'
import Swiper from 'react-native-swiper'
import BasicInfoElement from './BasicInfoElement'
import FeaturesElement from './FeaturesElement'
import TheBrandElement from './TheBrandElement'
import SwiperButtonsView from './SwiperButtonsView'
let { width } = Dimensions.get('window')
class InfoSwiper extends Component {
  state = {
    index: 0
  }

render () {
  const { caseInfo, bracelet, description } = this.props
  console.log('[InfoSwiper]', caseInfo, bracelet, description)
  return (
    <SwiperWrapper>
      <SwiperButtonsView index={this.state.index} />
      <Swiper
        loop={false}
        showsPagination={false}
        onIndexChanged={(idx) => this.setState({index: idx})}>
        <BasicInfoElement />
        <FeaturesElement description={description} />
        <TheBrandElement />
      </Swiper>
    </SwiperWrapper>
  )
}
}
const SwiperWrapper = styled(View)`
  width: ${width};
  height: 305;
  padding-top: 30;
  display: flex;
  background-color: #FFFFFF;
`

export default InfoSwiper
