import React from 'react'
import styled from 'styled-components'
import { Text, View, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const NameInfo = (props) => {
  return (
    <Wrapper>
      <BrandName>{props.brand}</BrandName>
      <ModelName>{props.model}</ModelName>
      <Identifier>
        <SerialNumber>5270G-013</SerialNumber>
        <Label>
          <LabelText>Limited</LabelText>
        </Label>
      </Identifier>
    </Wrapper>
  )
}
const Wrapper = styled(View)`
  width: ${width};
  height: 140;
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
`
const BrandName = styled(Text)`
  flex-direction: row;
  align-self: center;
  font-weight: bold;
  `
const ModelName = styled(Text)`
  flex-direction: row;
  align-self: center;
  font-weight: 900;
  font-size: 20px;
`
const Identifier = styled(View)`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  padding-top: 5;
`
const SerialNumber = styled(Text)`
  align-self: center;
  font-size: 16px;
  color: #191919;
`
const Label = styled(View)`
  position: absolute;
  margin-top: 10;
  right: 14;
  background-color: #FFFFFF;
  box-shadow: 0 10px 5px lightgrey;
`
const LabelText = styled(Text)`
  font-size: 11px;
  color: #7301FF;
  font-family: Graphik-Medium;
  text-transform: uppercase;
  paddingHorizontal: 5;
`

export default NameInfo