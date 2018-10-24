import React from 'react'
import styled from 'styled-components'
import { Text, View, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
const NameInfo = (props) => {
  return (
    <NameInfoWrapper>
      <BrandName>{props.brand}</BrandName>
      <ModelName>{props.model}</ModelName>
      <SerialWrapper>
        <SerialText>5270G-013</SerialText>
        <LimitedWrapper>
          <LimitedText>Limited</LimitedText>
        </LimitedWrapper>
      </SerialWrapper>
    </NameInfoWrapper>
  )
}
const NameInfoWrapper = styled(View)`
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
const SerialWrapper = styled(View)`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`
const SerialText = styled(Text)`
  align-self: center;
  font-size: 16px;
  color: #191919;
`
const LimitedWrapper = styled(View)`
  position: absolute;
  right: 14;
  background-color: #FFFFFF;
`
const LimitedText = styled(Text)`
  font-size: 16px;
  color: #7301FF;
`
export default NameInfo
250