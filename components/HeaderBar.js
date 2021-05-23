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
    <SafeAreaView style={styles.safeAreaView}>
      {/* Greetings */}
      <View style={styles.greetingView}>
        <Text style={styles.greetingText}>Phuc Nguyen,</Text>
        <Text style={styles.greetingText}>Welcome back!</Text>
      </View>

      {/* Toggle button */}
      <TouchableOpacity style={styles.touchToggle} onPress={() => handleToggleTheme()}>
        <View
          style={{
            ...styles.viewSun,
            ...(appTheme.name === 'light') ? styles.selectedLightModeStyle : {}
          }}
        >
          <Image source={icons.sunny} style={styles.sunIcon}/>
        </View>

        <View
          style={{
            ...styles.viewMoon,
            // ...styles.selectedNightModeStyle
            ...(appTheme.name === 'dark') ? styles.selectedNightModeStyle : {}
          }}
        >
          <Image source={icons.night} style={styles.iconMoon}/>
        </View>

      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  iconMoon: {
    height: 30,
    width: 30,
    tintColor: COLORS.white
  },
  viewMoon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sunIcon: {
    height: 30,
    width: 30,
    tintColor: COLORS.white
  },
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow
  },
  safeAreaView: {
    height: 150,
    width: '100%',
    backgroundColor: COLORS.primary,
    flexDirection: 'row'
  },
  greetingView: {
    flex: 1,
    paddingLeft: SIZES.padding
  },
  greetingText: { color: COLORS.white, ...FONTS.h2 },
  touchToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: SIZES.padding,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray3
  },
  viewSun: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
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
