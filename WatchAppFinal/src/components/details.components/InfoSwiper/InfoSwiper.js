import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import styled from 'styled-components'
import Swiper from 'react-native-swiper'

import BasicInfoScreen from './Screen.BasicInfo'
import FeaturesScreen from './Screen.Features'
import BrandScreen from './Screen.Brand'
import Pagination from './Pagination'

let { width } = Dimensions.get('window')

class InfoSwiper extends Component {
  state = {
    index: 0
  }

  render () {
    const { caseInfo, bracelet, description } = this.props
    console.log('[INFO SWIPER]:', this.props)
    return (
      <Wrapper>
        <Pagination index={this.state.index} />
        <Swiper
          loop={false}
          showsPagination={false}
          onIndexChanged={(idx) => this.setState({index: idx})}
        >
          <BasicInfoScreen case={caseInfo} bracelet={bracelet}/>
          <FeaturesScreen description={description} />
          <BrandScreen />
        </Swiper>
      </Wrapper>
    )
  }
}

const Wrapper = styled(View)`
  width: ${width};
  height: 305;
  padding-top: 30;
  display: flex;
  background-color: #FFFFFF;
`

export default InfoSwiper
