import React from 'react'
import { Text } from 'react-native'

const Card = (props) => {
  console.log('CardProps:', props)
  return <Text>{`${props.brand} ${props.model} ${props.price}`}</Text>
}

export default Card
