import React from 'react'
import { View, Image, Text } from 'react-native'

const Chronographs = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Image 
        style={{width: 100, height: 100}}
        source={{uri: 'https://icdn6.digitaltrends.com/image/ticwatch-pro-wrist-suit-1500x999.jpg'}}
      />
      <Text>Our Favorite Chronographs</Text>
      <Text>See All ></Text>
    </View>
  )
}

export default Chronographs
