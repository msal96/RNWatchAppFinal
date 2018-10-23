import React from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import styled from 'styled-components'

import Card from '../common/Card'

const { width, height } = Dimensions.get('window')

const SimilarWatches = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Heading>Similar Watches</Heading>
        <Button>
          <Label>See More</Label>
        </Button>
      </HeaderWrapper>

      <CardWrapper>
        <Card width = {width / 2.5} height = {height / 2.5}/>
        <Card width = {width / 2.5} height = {height / 2.5}/>
      </CardWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  background-color: #fafafa;
`
const CardWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`
const HeaderWrapper = styled(View)`
  padding-horizontal: 30;
  padding-vertical: 20;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Heading = styled(Text)`
  align-items: flex-start;
  color: black;
  font-size: 20;
  line-height: 25;
  font-family: Graphik-Medium;
`
const Button = styled(TouchableOpacity)`
  background-color: transparent;
  border: 1px solid black;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  `
  const Label = styled(Text)`
  font-size: 12;
  line-height: 15;
`
export default SimilarWatches
