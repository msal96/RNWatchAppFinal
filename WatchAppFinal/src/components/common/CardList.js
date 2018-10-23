import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components'
import { View, PixelRatio, TouchableOpacity } from 'react-native'

import Card from './Card'

class CardList extends Component {
  render () {
    const { navigation, data } = this.props
    console.log('[CardListProps]', this.props)

    return (
        <Wrapper>
          {data.map((item, index) =>
            <TouchableOpacity 
              key={index} 
              onPress={() => navigation.navigate('Details', { model: item })}
            >
              <Card 
                brand={item.Brand} 
                model={item.Model} 
                price={item.Price} 
                width={500 / PixelRatio.get()}
                height={600 / PixelRatio.get()}
              />
            </TouchableOpacity>
          )}
        </Wrapper>
    )
  }
}

const Wrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
export default withNavigation(CardList)