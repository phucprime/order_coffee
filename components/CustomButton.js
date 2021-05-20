import React from 'react'

import {
  TouchableOpacity,
  Text
} from 'react-native'

import { COLORS } from '../constants'

const CustomButton = ({
  containerStyle,
  labelStyle,
  label,
  onPress,
  isPrimaryButton,
  isSecondaryButton
}) => {
  return (
        <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isPrimaryButton ? COLORS.primary : COLORS.transparent,
              borderColor: isSecondaryButton ? COLORS.primary : COLORS.transparent,
              borderWidth: isSecondaryButton ? 1 : 0,
              ...containerStyle
            }}
            onPress={onPress}
        >
            <Text
                style={{
                  color: isPrimaryButton ? COLORS.white : COLORS.primary,
                  ...labelStyle
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
  )
}

export default CustomButton
