import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'

import { FONTS, SIZES, COLORS, icons } from '../constants'

import { connect } from 'react-redux'

import { toggleTheme } from '../stores/themeActions'

const HeaderBar = ({ appTheme, toggleTheme }) => {
  function handleToggleTheme () {
    if (appTheme.name === 'light') {
      toggleTheme('dark')
    } else {
      toggleTheme('light')
    }
  }

  return (
        <SafeAreaView
            style={{
              height: 150,
              width: '100%',
              backgroundColor: COLORS.primary,
              flexDirection: 'row'
            }}
        >
            {/* Greetings */}
            <View
                style={{
                  flex: 1,
                  paddingLeft: SIZES.padding
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Phuc Nguyen,</Text>
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Welcome back!</Text>
            </View>

            {/* Toggle button */}
            <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginHorizontal: SIZES.padding,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: COLORS.lightGray3
                }}
                onPress={() => handleToggleTheme()}
            >
                <View
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      ...(appTheme.name === 'light') ? styles.selectedLightModeStyle : {}
                    }}
                >
                    <Image
                        source={icons.sunny}
                        style={{
                          height: 30,
                          width: 30,
                          tintColor: COLORS.white
                        }}
                    />
                </View>

                <View
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      // ...styles.selectedNightModeStyle
                      ...(appTheme.name === 'dark') ? styles.selectedNightModeStyle : {}
                    }}
                >
                    <Image
                        source={icons.night}
                        style={{
                          height: 30,
                          width: 30,
                          tintColor: COLORS.white
                        }}
                    />
                </View>

            </TouchableOpacity>

        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow
  }
})

function mapStateToProps (state) {
  return {
    appTheme: state.theme.appTheme,
    error: state.theme.error
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toggleTheme: (themeType) => {
      return dispatch(toggleTheme(themeType))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)
