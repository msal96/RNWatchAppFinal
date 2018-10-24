import React from 'react'
import styled from 'styled-components'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

let { width } = Dimensions.get('window')

const PriceInfo = (props) => {
  return (
    <Wrapper>
        <LeftView>
          <PriceDetail>
            <Currency>$</Currency>
            <Price>{ props.price }</Price>
          </PriceDetail>

          <PriceDetail>
            <Icon name='arrow-down' size={14} color='#646464' />
            <PriceEvolution> $3038 </PriceEvolution>
          </PriceDetail>
        </LeftView>

        <RightViewButton>
          <Label> Add + </Label>
        </RightViewButton>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  width: ${width}
  height: 87.6;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  padding-horizontal: 30;
  justify-content: space-between;
  flex-direction: row;
  align-self: center;
`
const LeftView = styled(View)`
  flex-direction: column;
  justify-content: center;
`
const PriceDetail = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
`
const Price = styled(Text)`
  font-family: Graphik-Medium;
  font-size: 25;
  color: #9014FE;
  align-self: flex-end;
`
const Currency = styled(Text)`
  font-size: 17;
  color: #9014FE;
  align-self: flex-end;
  padding-bottom: 3;
`
const PriceEvolution = styled(Text)`
  color: #646464;
  font-size: 14;
`
const RightViewButton = styled(TouchableOpacity)`
  width: 70;
  height: 34;
  border: 1px #191919;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`
const Label = styled(Text)`
  padding-top: 2;
  font-size: 14;
  font-family: Graphik-Regular;
  align-self: center;
  text-transform: uppercase;
`

export default PriceInfo
