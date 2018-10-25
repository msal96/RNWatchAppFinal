import React from 'react'
import { withNavigation } from 'react-navigation'
import { ScrollView } from 'react-native'

import ImageSwiper from '../components/details.components/ImageSwiper'
import NameInfo from '../components/details.components/NameInfo'
import PriceInfo from '../components/details.components/PriceInfo'
import InfoSwiper from '../components/details.components/infoswiper.components/InfoSwiper'
import SimilarWatches from '../components/details.components/SimilarWatches'
import Guarantee from '../components/details.components/Guarantee'
import BuyButton from '../components/details.components/BuyButton'

class DetailsScreen extends React.Component {
  render() {
    const model = this.props.navigation.getParam('model', 'NO-DATA')
    console.log('[DetailsScreenData]', model)
    return (
      <ScrollView>
        <ImageSwiper photos={model.Photos} />
        <NameInfo model={model.Model} brand={model.Brand} />
        <PriceInfo price={model.Price} />
        <InfoSwiper
          description={model.Description}
          caseInfo={model.Case}
          bracelet={model.Bracelet}
        />
        <SimilarWatches />
        <Guarantee />
        <BuyButton />
      </ScrollView>
    )
  }
}
export default withNavigation(DetailsScreen)
