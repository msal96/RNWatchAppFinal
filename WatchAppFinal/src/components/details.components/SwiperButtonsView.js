import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const SwiperButtonsView = props => {
  return (
    <ButtonsWrapper>
      {props.index === 0 ? (
        <ButtonsWrapperBasic>
          <ButtonView>
            <DisabledButton>
              <DisabledText />
            </DisabledButton>
          </ButtonView>
          <ButtonView>
            <ActiveButton>
              <ActiveText>BASIC INFO</ActiveText>
            </ActiveButton>
          </ButtonView>
          <ButtonViewRight>
            <DisabledButton>
              <DisabledText>Features</DisabledText>
            </DisabledButton>
          </ButtonViewRight>
        </ButtonsWrapperBasic>
      ) : props.index === 1 ? (
        <ButtonsWrapperFeatures>
          <DisabledButton>
            <DisabledText>BASIC INFO</DisabledText>
          </DisabledButton>
          <ActiveButton>
            <ActiveText>Features</ActiveText>
          </ActiveButton>
          <DisabledButton>
            <DisabledText>THE BRAND</DisabledText>
          </DisabledButton>
        </ButtonsWrapperFeatures>
      ) : (
        <ButtonsWrapperBrand>
          <ButtonViewLeft>
            <DisabledButton>
              <DisabledText>FEATURES</DisabledText>
            </DisabledButton>
          </ButtonViewLeft>
          <ButtonView>
            <ActiveButton>
              <ActiveText>THE BRAND</ActiveText>
            </ActiveButton>
          </ButtonView>
          <ButtonView>
            <DisabledButton>
              <DisabledText />
            </DisabledButton>
          </ButtonView>
        </ButtonsWrapperBrand>
      )}
    </ButtonsWrapper>
  )
}

const ButtonsWrapper = styled(View)`
  width: 82%;
  align-self: center;
`
const ButtonsWrapperBasic = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
const ButtonsWrapperFeatures = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
const ButtonsWrapperBrand = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
const ButtonView = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`
const ButtonViewRight = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`
const ButtonViewLeft = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`
const ActiveButton = styled(TouchableOpacity)`
  border-bottom-width: 3px;
  border-bottom-color: #1e00a0;
`
const DisabledButton = styled(TouchableOpacity)`
`
const ActiveText = styled(Text)`
  color: #1e00a0;
  align-self: center;
`
const DisabledText = styled(Text)`
  color: #646464;
`
export default SwiperButtonsView
