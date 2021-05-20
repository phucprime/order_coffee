import React from 'react'

import {
  TouchableOpacity,
  Image
} from 'react-native'

import { COLORS } from '../constants'

const IconButton = ({ containerStyle, iconStyle, icon, onPress }) => {
  return (
        <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white,
                  ...iconStyle
                }}
            />
        </TouchableOpacity>
  )
}

export default IconButton
