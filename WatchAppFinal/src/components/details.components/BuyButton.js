import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styled from 'styled-components'

const BuyButton = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Label>Get This Watch</Label>
      </ButtonWrapper>
    </Wrapper>
  )
}
const Wrapper = styled(View)`
  background-color: white;
  border: 1px solid #e5e5e5;
`
const ButtonWrapper = styled(TouchableOpacity)`
  background-color: #7225FB;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80%;
  border-radius: 10;
  margin-vertical: 20;
`
const Label = styled(Text)`
  color: white;
  text-transform: uppercase;
  font-family: Graphik-Medium;
  font-size: 15;
  line-height: 24;
  padding-vertical: 10;
`

export default BuyButton