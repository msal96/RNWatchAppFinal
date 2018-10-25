import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import ActiveButton from './ActiveButton'
import DisabledButton from './DisabledButton'

const Pagination = props => {
  return (
    <PaginationWrapper>
      {props.index === 0 ? (
        <Wrapper>
          <DisabledButton />
          <ActiveButton>BASIC INFO</ActiveButton>
          <DisabledButton>FEATURES</DisabledButton>
        </Wrapper>
      ) : props.index === 1 ? (
        <Wrapper>
          <DisabledButton>BASIC INFO</DisabledButton>
          <ActiveButton>FEATURES</ActiveButton>
          <DisabledButton>THE BRAND</DisabledButton>
        </Wrapper>
      ) : (
        <Wrapper>
          <DisabledButton>FEATURES</DisabledButton>
          <ActiveButton>THE BRAND</ActiveButton>
          <DisabledButton />
        </Wrapper>
      )}
    </PaginationWrapper>
  )
}

const PaginationWrapper = styled(View)`
  width: 82%;
  margin-bottom: 35;
  align-self: center;
`
const Wrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export default Pagination
