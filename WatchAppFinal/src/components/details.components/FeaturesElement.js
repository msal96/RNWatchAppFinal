import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'

const FeaturesElement = () => {
  return (
    <FeaturesWrapper>
      <Text>Feature</Text>
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
