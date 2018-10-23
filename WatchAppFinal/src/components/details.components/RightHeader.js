import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome'

export const RightHeader = () => {
  return (
    <RightHeaderWrapper>    
      <Icon name='heart-o' style='regular' size={18.5} color='#191919' />
      <Icon name='external-link' style='regular' size={18.5} color='#191919' />
    </RightHeaderWrapper>
  )
}
const RightHeaderWrapper = styled(View)`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 60;
  height: 25;
  margin-right: 18.5;
`
