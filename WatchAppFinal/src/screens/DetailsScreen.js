import React from 'react'
import { ScrollView, Text } from 'react-native'

import ImageSwiper from '../components/details.components/ImageSwiper'
import NameInfo from '../components/details.components/NameInfo'
import PriceInfo from '../components/details.components/PriceInfo'
import InfoSwiper from '../components/details.components/InfoSwiper'
import SimilarWatches from '../components/details.components/SimilarWatches'
import Guarantee from '../components/details.components/Guarantee'
import BuyButton from '../components/details.components/BuyButton'

export default class DetailsScreen extends React.Component {
  render() {
    return (
        <ScrollView>
          <ImageSwiper />
          <NameInfo />
          <PriceInfo />
          <InfoSwiper />
          <SimilarWatches />
          <Guarantee />
          <BuyButton />
        </ScrollView>
    )
  }
}