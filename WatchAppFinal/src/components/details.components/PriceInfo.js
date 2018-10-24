import React from 'react'
import styled from 'styled-components'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
let { width } = Dimensions.get('window')

const PriceInfo = (props) => {
  return (
    <FullWidthView>
      <MainView>
        <PriceInfoWrapper>
          <PriceInfoElement>
            <DolarText>$</DolarText>
            <PriceText>{props.price}</PriceText>
          </PriceInfoElement>
          <PriceInfoElement>
            <Icon name='arrow-down' size={14} color='#646464' />
            <TaxText>$3038</TaxText>
          </PriceInfoElement>
        </PriceInfoWrapper>
        <AddButton>
          <ButtonText>ADD +</ButtonText>
        </AddButton>
      </MainView>
    </FullWidthView>
  )
}
const FullWidthView = styled(View)`
  width: ${width}
  height: 87.6;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
`
const MainView = styled(View)`
  width: 82%;
  justify-content: space-between;
  flex-direction: row;
  align-self: center;
`
const PriceInfoWrapper = styled(View)`
  flex-direction: column;
  justify-content: center;
`
const PriceInfoElement = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
`
const PriceText = styled(Text)`
  font-family: Graphik-Medium;
  font-size: 25;
  color: #9014FE;
  align-self: flex-end;
`
const DolarText = styled(Text)`
  font-size: 17;
  color: #9014FE;
  align-self: flex-end;
  padding-bottom: 3;
`
const TaxText = styled(Text)`
  color: #646464;
  font-size: 14;
  margin-left: 4px;
`
const AddButton = styled(TouchableOpacity)`
  width: 70;
  height: 34;
  border: 1px #191919;
  flex-direction: row;
  justify-content: center;
`
const ButtonText = styled(Text)`
  font-size: 15;
  font-family: Graphik-Regular;
  align-self: center;
`
export default PriceInfo
