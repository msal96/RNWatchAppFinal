import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { withNavigation } from "react-navigation"
import styled from "styled-components"

class NavBar extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Wrapper>
        <ButtonWrapper onPress={() => navigate("Shop")}>
          <CurrentButtonText>Shop</CurrentButtonText>
        </ButtonWrapper>

        <ButtonWrapper onPress={() => navigate("Discover")}>
          <ButtonText>Discover</ButtonText>
        </ButtonWrapper>

        <ButtonWrapper onPress={() => navigate("Learn")}>
          <ButtonText>Learn</ButtonText>
        </ButtonWrapper>

        <ButtonWrapper onPress={() => navigate("Profile")}>
          <ButtonText>Me</ButtonText>
        </ButtonWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled(View)`
  margin-top: 20;
  background-color: white;
  justify-content: space-around;
  flex-direction: row;
  box-shadow: 0 -10px 5px lightgrey;
`
const ButtonWrapper = styled(TouchableOpacity)`
  padding-vertical: 20;
`
const ButtonText = styled(Text)`
  color: #646464;
  font-size: 15;
  font-family: Graphik-Regular;
`
const CurrentButtonText = styled(Text)`
  font-size: 15;
  font-family: Graphik-Medium;
  color: #7325fb;
`

export default withNavigation(NavBar)
