import React from 'react'

import {
  TouchableOpacity,
  Text
} from 'react-native'

import { FONTS, COLORS } from '../constants'

const VerticalTextButton = ({ containerStyle, label, selected, onPress }) => {
  return (
        <TouchableOpacity
            style={{
              alignItems: 'center',
              transform: [{ rotate: '-90deg' }],
              ...containerStyle
            }}
            onPress={onPress}
        >
            <Text
                style={{
                  color: selected ? COLORS.white : COLORS.yellow,
                  ...FONTS.body2,
                  fontSize: selected ? 20 : 16,
                  fontWeight: selected ? 'bold' : 'normal'
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
  )
}

export default VerticalTextButton
