import React from 'react'
import axios from 'axios'
import { ScrollView, View, Text } from 'react-native'
import styled from 'styled-components'

import SearchBar from '../components/landing.components/SearchBar'
import Chronographs from '../components/landing.components/Chronographs'
import CardList from '../components/common/CardList'
import NavBar from '../components/landing.components/NavBar'

export default class LandingScreen extends React.Component {
  state = {
    data: undefined
  }

  componentDidMount () {
    axios.get('https://cz36patn60.execute-api.us-east-1.amazonaws.com/WatchesAPI/products')
      .then(result => this.setState({data: result.data}))
  }
  
  render () {
    return this.state.data ? (
      <ScrollView>
        <SearchBar />
        <Chronographs />
        <RecommendedHeading>Recommended</RecommendedHeading>
        <CardList data={this.state.data} />
        <NavBar />
      </ScrollView>
    ) : <View><Text>Loading ...</Text></View>
  }
}

const RecommendedHeading = styled(Text)`
  font-size: 25;
  padding-left: 35;
  margin-top: 10;
  margin-bottom: 10;
  font-family: Graphik-Medium;
`