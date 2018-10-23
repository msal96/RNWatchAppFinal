import React from 'react'
import styled from 'styled-components'
import { Image, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'

const Card = ({
  brand,
  model,
  // price,
  width,
  height
}) => (
  <CardWrapper 
    width={width} 
    height={height}
  >
    <Photo
      source={{ uri: 'https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png?impolicy=upright-majesty' }}
    />
    { brand ? <BrandName> { brand } </BrandName> : null}
    { model ? <ModelName> { model } </ModelName> : null}
    <Price> { '$24,372' } </Price>
  </CardWrapper>
)

const CardWrapper = styled(View)`
  background-color: #fafafa;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`
const Photo = styled(Image)`
  margin-top: 40;
  width: 100;
  height: 100;
`
const BrandName = styled(Text)`
  font-size: 12;
  line-height: 15;
  letter-spacing: 0.5;
  align-self: center;
  text-transform: uppercase;
  margin-vertical: 10;
  font-family: Graphik-Medium;
`
const ModelName = styled(Text)`
  font-size: 12;
  line-height: 15;
  align-self: center;
  font-family: Graphik-Regular;
`
const Price = styled(Text)`
  color: #7325FB;
  font-family: Graphik-Medium;
  font-size: 18;
  letter-spacing: 0.5;
  align-self: center;
  padding-vertical: 20;
`
export default withNavigation(Card)
