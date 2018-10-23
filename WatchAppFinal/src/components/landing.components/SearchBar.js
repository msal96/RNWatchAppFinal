import React from 'react'
import { TextInput, View } from 'react-native'
import styled from 'styled-components'

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <Search placeholder='Search' />
    </SearchBarWrapper>
  )
}

const SearchBarWrapper = styled(View)`
  padding: 10px;
`
const Search = styled(TextInput)`
  &::placeholder {
    color: black;
  } 
  padding: 10px;
  margin: 10px;
  font-size: 16px;
`
export default SearchBar
