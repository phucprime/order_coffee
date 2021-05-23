import React from 'react'

import {
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'

import { COLORS } from '../constants'

const IconButton = ({ containerStyle, iconStyle, icon, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.rootTouch, ...containerStyle }} onPress={onPress}>
      <Image
        source={icon}
        resizeMode='contain'
        style={{ ...styles.image, ...iconStyle }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rootTouch: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 25,
    height: 25,
    tintColor: COLORS.white
  }
})

export default IconButton
