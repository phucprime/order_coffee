import React from 'react'

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native'

import { COLORS, FONTS } from '../constants'

const TabButton = ({ containerStyle, label, selected, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.rootTouch, ...containerStyle }} onPress={onPress}>
      {/* Text */}
      <Text style={{ color: selected ? COLORS.primary : COLORS.gray, ...styles.label }}>
        {label}
      </Text>

      {/* Underline */}
      <View
        style={{
          ...styles.view,
          marginTop: selected ? 3 : 4,
          height: selected ? 4 : 2,
          backgroundColor: selected ? COLORS.primary : COLORS.gray
        }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rootTouch: {
    alignItems: 'center'
  },
  label: {
    ...FONTS.body2,
    fontSize: 18
  },
  view: {
    width: '100%'
  }
})

export default TabButton
