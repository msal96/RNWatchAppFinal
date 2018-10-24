import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'

const TheBrandElement = () => {
  return (
    <TheBrandWrapper>
      <Text>Brand</Text>
    </TheBrandWrapper>
  )
}
const TheBrandWrapper = styled(View)`
  background-color: green;
  width: 82%;
  height: 100%;
  align-self: center;
`
export default TheBrandElement
