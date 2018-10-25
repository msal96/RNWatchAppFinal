import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

let circle = (<Icon name='circle-outline' style='regular' size={15} color='black' />)
let square = (<Icon name='square-outline' style='regular' size={15} color='black' />)

const BasicInfoScreen = (props) => {
  const { BezelMaterial, Dial, Glass } = props.case
  return (
    <Wrapper>
      <DetailWrapper>
        <Heading>{circle} Case</Heading>
        <Subheading>Material: {BezelMaterial} </Subheading>
        <Subheading>Glass: {Glass}</Subheading>
      </DetailWrapper>

      <DetailWrapper>
        <Heading>{square} Bracelet</Heading>
        <Subheading>
          Bracelet Color: {props.bracelet.BraceletColor}
        </Subheading>
      </DetailWrapper>

      <AdditionalDetails>
        <Detail>Manual Winding</Detail>
        <Detail>Includes Box and Papers</Detail>
      </AdditionalDetails>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  width: 82%;
  height: 100%
  align-self: center;
  border: 1px solid black;
  display: flex;
  justify-content: center;

`
const Heading = styled(Text)`
  font-family: Graphik-Medium;
  font-size: 15;
  paddingHorizontal: 31;
  paddingBottom: 2.5;
`
const Subheading = styled(Text)`
  font-family: Graphik-Regular;
  font-size: 15;
  paddingHorizontal: 50;
`
const DetailWrapper = styled(View)`
  display: flex;
  paddingVertical: 5;
`
const AdditionalDetails = styled(View)`
  border-top-color: lightgrey;
  border-top-width: 1px;
  marginHorizontal: 50;
  marginTop: 15;
  paddingTop: 15;
`
const Detail = styled(Text)`
  font-family: Graphik-Regular;
  font-size: 15;
  paddingVertical: 5;
`
export default BasicInfoScreen
