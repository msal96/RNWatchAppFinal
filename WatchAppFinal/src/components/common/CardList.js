import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { ScrollView, TouchableOpacity } from 'react-native'
import Card from './Card'

class CardList extends Component {
  render () {
    const { navigation, data } = this.props
    console.log('[CardListProps]', this.props)
    return (
      <ScrollView>
        {data.map((item, index) =>
          <TouchableOpacity key={index} onPress={() => navigation.navigate('Details', { model: item })}>
            <Card brand={item.Brand} model={item.Model} price={item.Price} />
          </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}

export default withNavigation(CardList)
