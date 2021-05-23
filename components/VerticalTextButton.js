import React from 'react'

import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

import { FONTS, COLORS } from '../constants'

const VerticalTextButton = ({ containerStyle, label, selected, onPress }) => {
  return (
        <TouchableOpacity
            style={{
              ...styles.rootTouch,
              transform: [{ rotate: '-90deg' }],
              ...containerStyle
            }}
            onPress={onPress}
        >
            <Text
                style={{
                  color: selected ? COLORS.white : COLORS.yellow,
                  ...styles.text,
                  fontSize: selected ? 20 : 16,
                  fontWeight: selected ? 'bold' : 'normal'
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rootTouch: {
    alignItems: 'center'
  },
  text: {
    ...FONTS.body2
  }
})

export default VerticalTextButton
