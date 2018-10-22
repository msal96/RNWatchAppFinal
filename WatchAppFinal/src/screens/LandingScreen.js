import React from 'react'
import { ScrollView, Text } from 'react-native'

import SearchBar from '../components/landing.components/SearchBar'
import Chronographs from '../components/landing.components/Chronographs'
import CardList from '../components/common/CardList'
import NavBar from '../components/landing.components/NavBar'

export default class LandingScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <SearchBar />
        <Chronographs />
        <Text>Recommended</Text>
        <CardList />
        <NavBar />
      </ScrollView>
    )
  }
}