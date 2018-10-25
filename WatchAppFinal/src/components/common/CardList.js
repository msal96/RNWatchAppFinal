import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components'
import { View, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')

import Card from './Card'

class CardList extends Component {
  render () {
    const { navigation, data } = this.props
    return (
      <Wrapper>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Details', { model: item })}
          >
            <Card
              photos={item.Photos[0]}
              brand={item.Brand}
              model={item.Model}
              price={item.Price}
              width={width / 2.5}
              height={height / 2.5}
            />
          </TouchableOpacity>
        ))}
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
