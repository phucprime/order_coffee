import React, { useState, useRef } from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput
} from 'react-native'

import {
  COLORS,
  SIZES,
  FONTS,
  images,
  dummyData,
  icons
} from '../constants'

import { connect } from 'react-redux'
import { toggleBottomBar } from '../stores/profileMenuActions'
import { CustomButton } from '../components'

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
      <TouchableOpacity onPress={() => title !== 'LogOut' && setCurrentTab(title)}>
        <View
          style={{
            backgroundColor: currentTab === title ? COLORS.lightGray3 : 'transparent',
            ...styles.viewTabButton
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

  function renderProfile () {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image source={images.photo} style={styles.menuProfileImage}/>

        <Text style={{ color: appTheme.textColor, ...styles.profileName }}>
          Phuc Nguyen
        </Text>

        <Text style={{ ...FONTS.body3, color: appTheme.textColor }}>
          Date of birth: 01/01/1999{'\n'}
          Live in: Ho Chi Minh City{'\n'}
        </Text>

        <FlatList
          enableEmptySections={true}
          data={dummyData.orderHistory}
          showsVerticalScrollIndicator={false}
          keyExtractor= {(item) => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.orderHistoryBox}>
                  <View style={styles.orderHistoryDate}>
                    <Text style={styles.orderDay}>
                      {item.day}
                    </Text>
                    <Text style={styles.orderMonth}>
                      {item.month}
                    </Text>
                  </View>
                  <View style={{ ...styles.orderContent, backgroundColor: appTheme.searchResult }}>
                    <Text style={{ ...styles.orderHour, color: appTheme.textColor }}>
                      10:00 am - 10:45 am
                    </Text>
                    <Text style={{ ...styles.orderName, color: appTheme.textColor }}>
                      Black Coffee
                    </Text>
                    <Text style={{ ...styles.orderDescription, color: appTheme.textColor }}>
                      The best of coffee. Try it now!
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
          ListFooterComponent={<View style={styles.emptyView} />}
        />
      </View>
    )
  }

  function renderNotify () {
    return (
      <View>
        <FlatList
          style={{ flex: 1, width: SIZES.width }}
          data={dummyData.notifications}
          showsVerticalScrollIndicator={false}
          keyExtractor= {(item) => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ backgroundColor: appTheme.cardBackgroundColor, ...styles.touchListNotify }}>
                <Image style={{ width: 90, height: 90 }} source={{ uri: item.image }} />

                <View style={{ marginLeft: 20, marginTop: 10 }}>
                  <Text style={{ color: appTheme.textColor, ...styles.nameNotify }}>
                    {item.name}
                  </Text>

                  <Text style={styles.notifyOrderID}>
                    {`Order ID: ${item.count}`}
                  </Text>

                  <CustomButton
                    isPrimaryButton={true}
                    label='Re-Order'
                    containerStyle={styles.notifyCusButton}
                    labelStyle={{ ...FONTS.body3 }}
                    onPress={() => navigation.navigate('Location')}
                  />
                </View>
              </TouchableOpacity>
            )
          }}
          ListFooterComponent={<View style={styles.emptyView} />}
        />
      </View>
    )
  }

  function renderSearch () {
    return (
      <View>
        <View style={styles.formSearchContent}>
          <View style={styles.inputSearchContainer}>
            <Image
              style={[styles.iconItemSearchResult, styles.inputIcon]}
              source={icons.search}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Search"
              underlineColorAndroid='transparent'/>
          </View>
        </View>

        <FlatList
          style={styles.searchList}
          data={dummyData.searchResults}
          showsVerticalScrollIndicator={false}
          keyExtractor= {(item) => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <View style={{ ...styles.searchResultBox, backgroundColor: appTheme.searchResult }}>
                <Image
                  style={{ ...styles.image, tintColor: appTheme.textColor }}
                  source={icons.coffee_cup}
                />

                <Text style={{ ...styles.name, color: appTheme.textColor }}>
                  {item.description}
                </Text>
              </View>
            )
          }}
          ListFooterComponent={<View style={styles.emptyView} />}/>
      </View>
    )
  }

  function renderSetting () {
    return (
      <View>
        <FlatList style={styles.settingList}
          contentContainerStyle={styles.listSettingContainer}
          showsVerticalScrollIndicator={false}
          data={dummyData.settings}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity style={{ ...styles.cardSettings, backgroundColor: appTheme.searchResult }}>
                  <Image style={styles.cardSettingImage} source={{ uri: item.image }}/>
                </TouchableOpacity>

                <View style={styles.cardSettingHeader}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...styles.settingTitle, color: appTheme.textColor }}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </View>
            )
          }}
          ListFooterComponent={<View style={styles.emptyView} />}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.appSafeArea}>
        <View style={styles.appView}>
            <Image source={images.profile} style={styles.profilePhoto} />

            <Text style={styles.profileNameText}>
              Phuc Nguyen
            </Text>

            <TouchableOpacity>
                <Text style={styles.viewProfileText}>
                  View Profile
                </Text>
            </TouchableOpacity>
            <View style={styles.viewTab}>
              {/* Tab bar buttons */}
              {TabButton(currentTab, setCurrentTab, 'Profile', images.profileMenuIcon)}
              {TabButton(currentTab, setCurrentTab, 'Search', images.search)}
              {TabButton(currentTab, setCurrentTab, 'Notifications', images.notifications)}
              {TabButton(currentTab, setCurrentTab, 'Settings', images.settings)}
            </View>

            <View style={styles.logOut}>
              {TabButton(currentTab, setCurrentTab, 'LogOut', images.logout)}
            </View>
        </View>

        {/* Overlay menu */}
        <Animated.View
          style={{
            backgroundColor: appTheme.backgroundColor,
            borderRadius: showMenu ? 15 : 0,
            // Transform view...
            transform: [
              { scale: scaleValue },
              { translateX: offsetValue }
            ],
            ...styles.animatedView
          }}
        >

        {/* Menu buttons */}
          <Animated.View style={{ transform: [{ translateY: closeButtonOffset }] }}>
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
                style={{ tintColor: appTheme.textColor, ...styles.switchButton }}
              />
            </TouchableOpacity>

            <Text style={{ color: appTheme.textColor, ...styles.currentTabText }}>
              {currentTab}
            </Text>

            <View style={{ alignItems: 'center' }}>
              {currentTab === 'Profile' && renderProfile()}
              {currentTab === 'Notifications' && renderNotify()}
              {currentTab === 'Search' && renderSearch()}
              {currentTab === 'Settings' && renderSetting()}
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
  },
  emptyView: { height: 350 },
  currentTabText: {
    ...FONTS.h1,
    paddingTop: 20
  },
  switchButton: {
    width: 20,
    height: 20,
    marginTop: 40
  },
  animatedView: {
    flexGrow: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: SIZES.base * 2,
    paddingVertical: SIZES.padding,
    marginTop: SIZES.base * 8,
    marginBottom: SIZES.base * 6
  },
  viewTab: { flexGrow: 1, marginTop: SIZES.padding },
  viewProfileText: {
    marginTop: 6,
    ...FONTS.body4,
    color: COLORS.white
  },
  profileNameText: {
    ...FONTS.h2,
    color: COLORS.white,
    marginTop: 20
  },
  profilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 8
  },
  appView: {
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: COLORS.primary,
    height: '100%',
    paddingTop: SIZES.padding * 4,
    paddingBottom: SIZES.padding * 2.5
  },
  appSafeArea: {
    flex: 1,
    marginTop: -SIZES.base * 8,
    marginBottom: -SIZES.base * 6
  },
  notifyOrderID: {
    fontSize: 14,
    flex: 1,
    color: '#6666ff'
  },
  notifyCusButton: {
    width: 130,
    paddingVertical: 5,
    borderRadius: SIZES.radius * 2,
    marginLeft: SIZES.radius * 0.5
  },
  nameNotify: {
    flex: 1,
    alignSelf: 'center',
    ...FONTS.h3,
    fontSize: 18
  },
  touchListNotify: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginLeft: SIZES.base * 2,
    marginRight: SIZES.base * 2,
    marginTop: SIZES.padding * 0.7,
    padding: SIZES.padding * 0.5,
    flexDirection: 'row',
    borderRadius: SIZES.radius * 1.5,
    flex: 1
  },
  profileName: {
    ...FONTS.h2,
    paddingTop: SIZES.base,
    paddingBottom: SIZES.base,
    textAlign: 'center'
  },
  viewTabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: SIZES.padding * 0.5,
    paddingRight: SIZES.padding,
    borderRadius: SIZES.radius,
    marginTop: 15
  },
  menuProfileImage: {
    width: 100,
    height: 100,
    marginTop: SIZES.base
  },
  listSettingContainer: {
    alignItems: 'center'
  },
  orderHistoryBox: {
    padding: 10,
    flexDirection: 'row',
    marginRight: SIZES.base
  },
  orderHistoryDate: {
    flexDirection: 'column'
  },
  orderDay: {
    fontSize: 50,
    color: '#0099FF',
    fontWeight: '600'
  },
  orderMonth: {
    fontSize: 16,
    color: '#0099FF',
    fontWeight: '600'
  },
  orderContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    padding: 10,
    borderRadius: 10
  },
  orderDescription: {
    ...FONTS.body4
  },
  orderHour: {
    ...FONTS.body2
  },
  orderName: {
    ...FONTS.body3
  },
  cardSettings: {
    shadowColor: COLORS.lightGray2,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    width: 120,
    height: 120,
    borderRadius: SIZES.radius * 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardSettingHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardSettingContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16
  },
  cardSettingFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  cardSettingImage: {
    height: 50,
    width: 50,
    alignSelf: 'center'
  },
  settingTitle: {
    ...FONTS.h3,
    flex: 1,
    alignSelf: 'center',
    marginTop: -SIZES.base * 2
  },
  formSearchContent: {
    flexDirection: 'row',
    marginTop: SIZES.base,
    width: SIZES.width,
    paddingHorizontal: SIZES.base
  },
  inputSearchContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius * 2,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  iconItemSearchResult: {
    width: 30,
    height: 30
  },
  iconBtnSearch: {
    alignSelf: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center'
  },
  searchList: {
    marginTop: 20,
    padding: 10,
    paddingBottom: 250
  },
  searchResultBox: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: SIZES.radius
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: SIZES.radius * 2,
    marginLeft: SIZES.radius
  },
  name: {
    ...FONTS.h3,
    alignSelf: 'center',
    paddingHorizontal: SIZES.padding
  },
  settingList: {
    paddingHorizontal: 5
  },
  logOut: {
    marginBottom: SIZES.padding
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
