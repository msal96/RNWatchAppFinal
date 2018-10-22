import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

class NavBar extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          flexDirection: 'row'
        }}
      >
        <TouchableOpacity onPress={() => navigate('Shop')}>
          <Text>Shop</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Discover')}>
          <Text>Discover</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Learn')}>
          <Text>Learn</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Profile')}>
          <Text>My Profile</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(NavBar)
