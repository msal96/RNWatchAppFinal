import React from 'react'
import { TextInput, View, Text } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome'

let icon = (<Icon name="search" size={15} color="#1a1a1a" />)

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchIcon>{icon}</SearchIcon>
      <Search placeholder={'Search'} placeholderTextColor='black'/>
    </SearchBarWrapper>

  )
}

const SearchBarWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 25%;
  margin-vertical: 20;
  margin-horizontal: 20;
`
const Search = styled(TextInput)`
  font-size: 18;
  padding-left: 5;
`
const SearchIcon = styled(Text)`
  padding-top: 2;
`
export default SearchBar
