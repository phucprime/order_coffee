import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  FlatList

} from 'react-native'

import Svg, { Circle } from 'react-native-svg'

import {
  dummyData,
  SIZES,
  FONTS,
  COLORS,
  icons
} from '../constants'

import { IconButton, TabButton, VerticalTextButton } from '../components'

import { connect } from 'react-redux'

const Order = ({ navigation, route, appTheme }) => {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedTab, setSelectedTab] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('Milk Tea')
  const [menu, setMenu] = useState(null)

  useEffect(() => {
    const { selectedLocation } = route.params
    setSelectedLocation(selectedLocation)
  }, [])

  useEffect(() => {
    const menu = dummyData.menuList.filter(menuItem => menuItem.category === selectedCategory)
    setMenu(menu)
  }, [selectedCategory])

  function priceFormat (price) {
    return price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' đ'
  }

  function renderHeaderSection () {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        {/* Navigation Bar */}
        <View style={styles.viewNavBar}>
          <IconButton
            icon={icons.leftArrow}
            onPress={() => navigation.goBack()}
          />

          <View style={styles.viewBackButton}>
            <Text style={styles.textTitle}>
              Pick Up Order
            </Text>
          </View>

          <View style={styles.emptyView}/>
        </View>

        {/* Locations */}
        <View style={styles.viewLocation}>
          <Text style={styles.textLocation}>
            {selectedLocation?.title}
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  function renderTopTabBarSection () {
    return (
      <View style={styles.viewTopTabBar}>
        {/* Tab buttons */}
        <View style={styles.viewTabButton}>
          <TabButton
            containerStyle={{ width: 60 }}
            label="Menu"
            selected={selectedTab === 0}
            onPress={() => setSelectedTab(0)}
          />
          <TabButton
            containerStyle={{ width: 90 }}
            label="Previous"
            selected={selectedTab === 1}
            onPress={() => setSelectedTab(1)}
          />
          <TabButton
            containerStyle={{ width: 90 }}
            label="Favorites"
            selected={selectedTab === 2}
            onPress={() => setSelectedTab(2)}
          />
        </View>

        {/* Order number */}
        <View style={styles.viewOrderNum}>
          <Text style={styles.textOrderNum}>
            0
          </Text>
        </View>
      </View>
    )
  }

  function renderSideBar () {
    return (
      <View>
        <Svg width="65" height="65" viewBox="0 0 65 65">
          <Circle cx="5" cy="60" r="60" fill={COLORS.primary} />
        </Svg>
        <View style={styles.viewSideBar}>
          <VerticalTextButton
            label="Snack"
            selected={selectedCategory === 'Snack'}
            onPress={() => setSelectedCategory('Snack')}
          />
          <VerticalTextButton
            label="Coffee"
            containerStyle={{ marginTop: 50 }}
            selected={selectedCategory === 'Coffee'}
            onPress={() => setSelectedCategory('Coffee')}
          />
          <VerticalTextButton
            label="Smoothie"
            containerStyle={{ marginTop: 70, width: 100 }}
            selected={selectedCategory === 'Smoothie'}
            onPress={() => setSelectedCategory('Smoothie')}
          />
          <VerticalTextButton
            label="Specialtea"
            containerStyle={{ marginTop: 90, width: 120 }}
            selected={selectedCategory === 'Specialtea'}
            onPress={() => setSelectedCategory('Specialtea')}
          />
          <VerticalTextButton
            label="Milk Tea"
            containerStyle={{ marginTop: 88, width: 80 }}
            selected={selectedCategory === 'Milk Tea'}
            onPress={() => setSelectedCategory('Milk Tea')}
          />
        </View>
        <Svg width="65" height="65" viewBox="0 0 65 65">
          <Circle cx="5" cy="0" r="60" fill={COLORS.primary} />
        </Svg>
      </View>
    )
  }

  return (
        <View style={styles.container}>
          {/* Header */}
          {renderHeaderSection()}

          {/* Details */}
          <View style={{ backgroundColor: appTheme.backgroundColor, ...styles.viewDetail }}>
            {/* Tab Bar */}
            {renderTopTabBarSection()}

            {/* Side Bar and Listing */}
            <View style={styles.viewSideBarAndList}>
              {/* Side Bar */}
              {renderSideBar()}

              {/* Listing */}
              <FlatList
                data={menu}
                containerStyle={{ marginTop: SIZES.padding, paddingBottom: 50 }}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableWithoutFeedback
                      onPress={() => navigation.navigate('OrderDetail', { selectedItem: item })}
                    >
                      <View style={{ marginTop: index > 0 ? SIZES.padding : 0, ...styles.viewDetailItem }}>
                        {/* Thumbnail */}
                        <View style={styles.viewThumbnail}>
                          <Image
                            source={item.thumbnail}
                            resizeMode='contain'
                            style={{ width: 100, height: 100 }}
                          />
                        </View>

                        {/* Details */}
                        <View style={styles.viewDetailContainText}>
                          <Text style={styles.itemName}>
                            {item.name}
                          </Text>

                          <Text style={styles.itemPrice}>
                            {priceFormat(item.price)}
                          </Text>
                        </View>

                      </View>

                    </TouchableWithoutFeedback>
                  )
                }}
              />

            </View>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeAreaView: {
    height: 200,
    backgroundColor: COLORS.primary,
    alignItems: 'center'
  },
  viewNavBar: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    alignItems: 'center'
  },
  viewBackButton: {
    flex: 1,
    alignItems: 'center'
  },
  textTitle: { color: COLORS.white, ...FONTS.h1, fontSize: 25 },
  emptyView: { width: 25 },
  viewLocation: {
    marginTop: SIZES.radius,
    backgroundColor: COLORS.white1,
    paddingHorizontal: SIZES.radius,
    paddingVertical: 5,
    borderRadius: SIZES.padding
  },
  textLocation: { color: COLORS.primary, ...FONTS.body3 },
  viewTopTabBar: {
    flexDirection: 'row',
    height: 50,
    marginTop: SIZES.radius,
    paddingLeft: SIZES.padding * 2,
    paddingRight: SIZES.padding,
    justifyContent: 'center'
  },
  viewTabButton: {
    flex: 1,
    flexDirection: 'row'
  },
  viewOrderNum: {
    width: 35,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary
  },
  textOrderNum: { color: COLORS.white, ...FONTS.h3 },
  viewSideBar: {
    marginTop: -10,
    width: 65,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  viewDetail: {
    flex: 1,
    marginTop: -45,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  viewSideBarAndList: {
    flex: 1,
    flexDirection: 'row'
  },
  viewDetailItem: {
    height: 150,
    paddingHorizontal: SIZES.padding,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  viewThumbnail: {
    zIndex: 1,
    top: 0,
    position: 'absolute',
    left: SIZES.padding,
    width: 130,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightYellow
  },
  viewDetailContainText: {
    width: '70%',
    height: '85%',
    paddingLeft: '22%',
    paddingRight: SIZES.base,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.base,
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGreen2
  },
  itemName: {
    color: COLORS.white,
    ...FONTS.h2,
    fontSize: 16,
    lineHeight: 25
  },
  itemPrice: {
    color: COLORS.primary,
    ...FONTS.h2,
    fontSize: 15
  }
})

function mapStateToProps (state) {
  return {
    appTheme: state.theme.appTheme,
    error: state.theme.error
  }
}

export default connect(mapStateToProps)(Order)
