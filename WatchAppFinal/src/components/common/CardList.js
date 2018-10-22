import React from 'react'
import { ScrollView } from 'react-native'

import Card from './Card'

const CardList = () => {
    return (
        <ScrollView>
            <Card />
            <Card />
            <Card />
            <Card />
        </ScrollView>
    )
}

export default CardList