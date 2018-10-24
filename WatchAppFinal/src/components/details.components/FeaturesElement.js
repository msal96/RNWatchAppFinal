import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'

const FeaturesElement = (props) => {
  return (
    <FeaturesWrapper>
      <Text>{props.description}}</Text>
    </FeaturesWrapper>
  )
}
const FeaturesWrapper = styled(View)`
  background-color: yellow;
  width: 82%;
  height: 100%;
  align-self: center;
`
export default FeaturesElement
