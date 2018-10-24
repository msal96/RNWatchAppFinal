import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'

const BasicInfoElement = () => {
  return (
    <BasicWrapper>
      <Text>Basic</Text>
    </BasicWrapper>
  )
}
const BasicWrapper = styled(View)`
  background-color: red;
  width: 82%;
  height: 100%
  align-self: center;
`
export default BasicInfoElement
