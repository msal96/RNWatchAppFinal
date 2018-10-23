import React from 'react'
import { createStackNavigator } from 'react-navigation'

import LandingScreen from './src/screens/LandingScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import { ShopScreen } from './src/screens/ShopScreen'
import { DiscoverScreen } from './src/screens/DiscoverScreen'
import { LearnScreen } from './src/screens/LearnScreen'
import { ProfileScreen } from './src/screens/ProfileScreen'
import { RightHeader } from './src/components/details.components/RightHeader'

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
    Details: {
      screen: DetailsScreen,
      navigationOptions: () => ({
        headerRight: <RightHeader />
      })
    },
    Shop: ShopScreen,
    Discover: DiscoverScreen,
    Learn: LearnScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Landing'
  }
)
