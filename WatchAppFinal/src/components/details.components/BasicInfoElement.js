import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'

const BasicInfoElement = (props) => {
  return (
    <Wrapper>
      <DetailWrapper>
        <Heading>Case</Heading>
        <Subheading>Material + Color</Subheading>
      </DetailWrapper>

      <DetailWrapper>
        <Heading>Bracelet</Heading>
        <Subheading>Material + Color</Subheading>
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
`
const Subheading = styled(Text)`
  font-family: Graphik-Regular;
  font-size: 15;
`
const DetailWrapper = styled(View)`
  display: flex;
  paddingHorizontal: 50;
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
export default BasicInfoElement
