import React, { useState } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  FlatList
} from 'react-native'

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons
} from '../constants'

import { connect } from 'react-redux'

import { IconButton, TabButton } from '../components'

const Location = ({ navigation, appTheme }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  function renderHeader () {
    return (
            <SafeAreaView style={styles.safeAreaView}>
              <View style={styles.viewHeader}>

                {/* Back button */}
                <IconButton
                  icon={icons.leftArrow}
                  onPress={() => navigation.goBack()}
                />

                {/* Title */}
                <View style={styles.viewTitle}>
                  <Text style={styles.textTitle}>
                    Locations
                  </Text>
                </View>

                {/* Empty view -> Make the title is in the middle */}
                <View style={styles.emptyView} />

              </View>
            </SafeAreaView>
    )
  }

  function renderTopBarSection () {
    return (
            <View style={styles.topBarView}>
                {/* Nearby */}
                <TabButton
                  containerStyle={styles.nearbyTabButton}
                  label="Nearby"
                  selected={selectedTab === 0}
                  onPress={() => setSelectedTab(0)}
                />

                {/* Previous */}
                <TabButton
                  containerStyle={styles.previousTabButton}
                  label="Previous"
                  selected={selectedTab === 1}
                  onPress={() => setSelectedTab(1)}
                />

                {/* Favorites */}
                <TabButton
                  containerStyle={styles.favoritesTabButton}
                  label="Favorites"
                  selected={selectedTab === 2}
                  onPress={() => setSelectedTab(2)}
                />

            </View>
    )
  }

  function renderSearchBar () {
    return (
            <View style={styles.viewSearchBar}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Enter your province, district or village..."
                  placeholderTextColor={COLORS.lightGray2}
                />
                <Image
                  source={icons.search}
                  style={styles.imageSearch}
                />
            </View>
    )
  }

  function renderLocationList () {
    return (
            <FlatList
                style={styles.flatList}
                data={dummyData.locations}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                // when users scroll through the list
                // it will actually hide the keyboard
                keyboardDismissMode='on-drag'
                renderItem={({ item }) => {
                  return (
                        <TouchableOpacity
                          style={{
                            ...styles.touchLocationItem,
                            backgroundColor: appTheme.cardBackgroundColor
                          }}
                          onPress={() => navigation.navigate('Order', { selectedLocation: item })}
                        >
                          {/* Name and Bookmarks */}
                          <View style={styles.viewNameAndBookmark}>
                            <Text style={{ color: appTheme.textColor, ...styles.titleLocation }}>
                              {item.title}
                            </Text>
                            <Image
                              source={item.bookmarked ? icons.bookmarkFilled : icons.bookmark}
                              style={{
                                height: 20,
                                width: 20,
                                tintColor: item.bookmarked ? COLORS.red : COLORS.white
                              }}
                            />
                          </View>

                          {/* Address */}
                          <View style={styles.viewAddress}>
                            <Text style={{ color: appTheme.textColor, ...styles.textAddress }}>
                                {item.address}
                            </Text>
                          </View>

                          {/* Operation hours */}
                          <View style={styles.viewOperationHour}>
                            <Text style={{ color: appTheme.textColor, ...styles.textOperationHour }}>
                                {item.operation_hours}
                            </Text>
                          </View>

                          {/* Services */}
                          <View style={styles.viewService}>

                            {/* Pick up */}
                            <View style={{ borderColor: appTheme.textColor, ...styles.viewPickUp }}>
                              <Text style={{ color: appTheme.textColor, ...FONTS.body3 }}>
                                Pick Up
                              </Text>
                            </View>

                            {/* Delivery */}
                            <View style={{ borderColor: appTheme.textColor, ...styles.viewDelivery }}>
                              <Text style={{ color: appTheme.textColor, ...FONTS.body3 }}>
                                Delivery
                              </Text>
                            </View>

                          </View>

                        </TouchableOpacity>
                  )
                }}
            />
    )
  }

  return (
        <View style={styles.container}>
          {/* Header */}
          {renderHeader()}

          {/* Details */}
          <View style={{ backgroundColor: appTheme.backgroundColor, ...styles.rootView }}>
            {renderTopBarSection()}
            {renderSearchBar()}
            {renderLocationList()}
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rootView: {
    flex: 1,
    marginTop: -20,
    borderTopLeftRadius: SIZES.radius * 2,
    borderTopRightRadius: SIZES.radius * 2,
    padding: SIZES.padding
  },
  safeAreaView: {
    height: 120,
    backgroundColor: COLORS.primary,
    alignItems: 'center'
  },
  viewHeader: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    alignItems: 'center'
  },
  viewTitle: {
    flex: 1,
    alignItems: 'center'
  },
  textTitle: {
    color: COLORS.white,
    ...FONTS.h1,
    fontSize: 25
  },
  emptyView: { width: 25 },
  topBarView: {
    flexDirection: 'row'
  },
  nearbyTabButton: {
    width: 80
  },
  previousTabButton: {
    width: 100
  },
  favoritesTabButton: {
    width: 100
  },
  viewSearchBar: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    height: 50,
    paddingHorizontal: SIZES.padding,
    borderRadius: 25,
    backgroundColor: COLORS.lightGreen2,
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: COLORS.black,
    ...FONTS.body4
  },
  imageSearch: {
    width: 30,
    height: 30,
    tintColor: COLORS.lightGray2
  },
  flatList: {
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    marginBottom: 50
  },
  touchLocationItem: {
    marginBottom: SIZES.radius,
    borderRadius: SIZES.radius * 2,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius
  },
  viewNameAndBookmark: {
    flexDirection: 'row'
  },
  titleLocation: {
    flex: 1,
    ...FONTS.h2
  },
  viewAddress: {
    marginTop: SIZES.base,
    width: '80%'
  },
  textAddress: {
    ...FONTS.body3,
    lineHeight: 21
  },
  viewOperationHour: {
    marginTop: SIZES.base
  },
  textOperationHour: {
    ...FONTS.body5,
    lineHeight: 16
  },
  viewService: {
    flexDirection: 'row',
    marginTop: SIZES.base
  },
  viewPickUp: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: SIZES.radius,
    paddingVertical: 5
  },
  viewDelivery: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: SIZES.radius,
    paddingVertical: 5,
    marginLeft: 5
  }
})

function mapStateToProps (state) {
  return {
    appTheme: state.theme.appTheme,
    error: state.theme.error
  }
}

export default connect(mapStateToProps)(Location)
