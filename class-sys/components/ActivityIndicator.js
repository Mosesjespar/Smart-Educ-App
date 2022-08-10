import React from 'react'
import { View, ActivityIndicator } from 'react-native'
export default function Activity() {
    return (
        <View>
            <ActivityIndicator
                animating={true}
                color='#bc2b78'
                size="large"
            />
        </View>
    )
}
