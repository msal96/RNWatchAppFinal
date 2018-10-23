import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components'

class NavBar extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Wrapper>
        <ButtonWrapper onPress={() => navigate('Shop')}>
          <CurrentButtonText>Shop</CurrentButtonText>
        </ButtonWrapper>

        <ButtonWrapper onPress={() => navigate('Discover')}>
          <ButtonText>Discover</ButtonText>
        </ButtonWrapper>

        <ButtonWrapper onPress={() => navigate('Learn')}>
          <ButtonText>Learn</ButtonText>
        </ButtonWrapper>

        <ButtonWrapper onPress={() => navigate('Profile')}>
          <ButtonText>Me</ButtonText>
        </ButtonWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled(View)`
  border-color: #e3e3e3;
  border-top-width: 5;
  position: relative;
  flex: 1;
  justify-content: space-around;
  flex-direction: row;
`
const ButtonWrapper = styled(TouchableOpacity)`
  padding-vertical: 20;
`
const ButtonText = styled(Text)`
  font-size: 15;
  font-family: Graphik-Regular;
`
const CurrentButtonText = styled(Text)`
  font-size: 15;
  font-family: Graphik-Medium;
  color: #7325FB;  
`
export default withNavigation(NavBar)
