import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CheckBox({ selected, onPress, style, textStyle, size = 30, color = '#211f30', text = '', ...props }) {
    return (
        <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
            <Feather
                size={size}
                color={color}
                name={selected ? 'check-square' : 'square'}
            />
            <Text style={textStyle}> {text} </Text>
        </TouchableOpacity>
    )
}