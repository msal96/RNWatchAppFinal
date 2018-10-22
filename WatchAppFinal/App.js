import React from 'react'
import { createStackNavigator } from 'react-navigation'

import LandingScreen from './src/screens/LandingScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import { ShopScreen } from './src/screens/ShopScreen'
import { DiscoverScreen } from './src/screens/DiscoverScreen'
import { LearnScreen } from './src/screens/LearnScreen'
import { ProfileScreen } from './src/screens/ProfileScreen'

export default class App extends React.Component {
  render () {
    return (
      <StackNavigator />
    )
  }
}

const StackNavigator = createStackNavigator(
  {
    Landing: LandingScreen,
    Details: DetailsScreen,
    Shop: ShopScreen,
    Discover: DiscoverScreen,
    Learn: LearnScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Landing'
  }
)
