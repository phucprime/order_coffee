import React, { useState, useRef } from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Animated
} from 'react-native'

import {
  COLORS,
  SIZES,
  FONTS,
  images
} from '../constants'

import { connect } from 'react-redux'
import { toggleBottomBar } from '../stores/profileMenuActions'

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

      <TouchableOpacity
        onPress={() => {
          if (title === 'LogOut') {
            // Do some stuff...
          } else {
            setCurrentTab(title)
          }
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: currentTab === title ? 'white' : 'transparent',
            paddingLeft: SIZES.padding * 0.5,
            paddingRight: SIZES.padding,
            borderRadius: SIZES.radius,
            marginTop: 15
          }}
        >

          <Image
            source={image}
            style={{
              width: 25,
              height: 25,
              tintColor: currentTab === title ? COLORS.primary : COLORS.secondary
            }}
          />

          <Text
            style={{
              ...FONTS.h3,
              paddingLeft: 15,
              color: currentTab === title ? COLORS.primary : COLORS.secondary
            }}
          >
            {title}
          </Text>

        </View>
      </TouchableOpacity>
  )
}

const Profile = ({ navigation, appTheme, isOpen, toggleBottomBar }) => {
  const [currentTab, setCurrentTab] = useState('Profile')

  const [showMenu, setShowMenu] = useState(false)

  const offsetValue = useRef(new Animated.Value(0)).current
  const scaleValue = useRef(new Animated.Value(1)).current
  const closeButtonOffset = useRef(new Animated.Value(0)).current

  function handleToggleBottomBar () {
    toggleBottomBar(!isOpen)
  }

  return (
        <View style={styles.container}>
            <SafeAreaView
              style={{
                flex: 1,
                marginTop: -SIZES.base * 8,
                marginBottom: -SIZES.base * 6
              }}
            >

            <View
                style={{
                  justifyContent: 'flex-start',
                  padding: 15,
                  backgroundColor: COLORS.primary,
                  height: '100%',
                  paddingTop: SIZES.padding * 4,
                  paddingBottom: SIZES.padding * 2.5
                }}
            >
                <Image
                    source={images.profile}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 10,
                      marginTop: 8
                    }}
                />

                <Text
                    style={{
                      ...FONTS.h2,
                      color: COLORS.white,
                      marginTop: 20
                    }}
                >
                    Phuc Nguyen
                </Text>

                <TouchableOpacity>
                    <Text
                        style={{
                          marginTop: 6,
                          ...FONTS.body4,
                          color: COLORS.white
                        }}
                    >
                        View Profile
                    </Text>
                </TouchableOpacity>

                <View style={{ flexGrow: 1, marginTop: SIZES.padding }}>
                    {/* Tab bar buttons */}
                    {TabButton(currentTab, setCurrentTab, 'Profile', images.profileMenuIcon)}
                    {TabButton(currentTab, setCurrentTab, 'Search', images.search)}
                    {TabButton(currentTab, setCurrentTab, 'Notifications', images.notifications)}
                    {TabButton(currentTab, setCurrentTab, 'Settings', images.settings)}
                </View>

                <View>
                    {TabButton(currentTab, setCurrentTab, 'LogOut', images.logout)}
                </View>
            </View>

            {/* Overlay menu */}
            <Animated.View
                style={{
                  flexGrow: 1,
                  backgroundColor: appTheme.backgroundColor,
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  paddingHorizontal: SIZES.base * 2,
                  paddingVertical: SIZES.padding,
                  borderRadius: showMenu ? 15 : 0,
                  // Transform view...
                  transform: [
                    { scale: scaleValue },
                    { translateX: offsetValue }
                  ],
                  marginTop: SIZES.base * 8,
                  marginBottom: SIZES.base * 6
                }}
            >

            {/* Menu buttons */}
                <Animated.View
                    style={{
                      transform: [{
                        translateY: closeButtonOffset
                      }]
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                        // Do actions here....
                        // Scale the view...
                          Animated.timing(scaleValue, {
                            toValue: showMenu ? 1 : 0.88,
                            duration: 300,
                            useNativeDriver: true
                          })
                            .start()

                          Animated.timing(offsetValue, {
                            // Random Value...
                            toValue: showMenu ? 0 : 230,
                            duration: 300,
                            useNativeDriver: true
                          })
                            .start()

                          Animated.timing(closeButtonOffset, {
                            // Random Value...
                            toValue: !showMenu ? -30 : 0,
                            duration: 300,
                            useNativeDriver: true
                          })
                            .start()

                          setShowMenu(!showMenu)

                          handleToggleBottomBar()
                        }}
                    >

                      <Image
                          source={showMenu ? images.close : images.menu}
                          style={{
                            width: 20,
                            height: 20,
                            tintColor: appTheme.textColor,
                            marginTop: 40
                          }}
                      />

                    </TouchableOpacity>

                    <Text
                        style={{
                          ...FONTS.h1,
                          color: appTheme.textColor,
                          paddingTop: 20
                        }}
                    >
                        {currentTab}
                    </Text>
                <View
                    style={{
                      alignItems: 'center'
                    }}
                >

                    <Image
                        source={images.photo}
                        style={{
                          width: 200,
                          height: 200,
                          borderRadius: 20,
                          marginTop: 25
                        }}
                    />

                    <Text
                        style={{
                          ...FONTS.h2,
                          color: appTheme.textColor,
                          paddingTop: 15,
                          paddingBottom: 5
                        }}
                    >
                        Phuc Nguyen
                    </Text>

                    <Text style={{ ...FONTS.body4, color: appTheme.textColor }}>
                        Techie, YouTuber, PS Lover,...
                    </Text>

                    </View>
                </Animated.View>

            </Animated.View>

            </SafeAreaView>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

function mapStateToProps (state) {
  return {
    appTheme: state.theme.appTheme,
    error: state.theme.error,
    isOpen: state.profileMenu.isOpen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toggleBottomBar: (isOpen) => {
      return dispatch(toggleBottomBar(isOpen))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
