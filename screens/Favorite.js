import React, { useState, useRef } from 'react'

import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Text,
  Platform,
  FlatList,
  Image
} from 'react-native'

import { COLORS, dummyData, FONTS, SIZES } from '../constants'

import { connect } from 'react-redux'

import { HeaderBar, CustomButton } from '../components'

const FAVORITE_CATEGORY_SIZE = SIZES.width / 3
const FAVORITE_ITEM_SIZE = Platform.OS === 'ios' ? SIZES.width / 1.25 : SIZES.width / 1.2
const EMPTY_ITEM_SIZE = (SIZES.width - FAVORITE_ITEM_SIZE) / 2

const Favorite = ({ navigation, appTheme }) => {
  const favoriteCategoryScrollX = useRef(new Animated.Value(0)).current

  const favoriteItemScrollX = useRef(new Animated.Value(0)).current

  // eslint-disable-next-line no-unused-vars
  const [favoriteCategory, setFavoriteCategory] = useState([{ id: -1 }, ...dummyData.favorites, { id: -2 }])

  const [favoriteItem, setFavoriteItem] = useState([{ id: -1 }, ...dummyData.favorites[0].items, { id: -2 }])

  function renderFavoriteCategories () {
    return (
        <Animated.FlatList
            horizontal
            pagingEnabled
            snapToAlignment='center'
            snapToInterval={FAVORITE_CATEGORY_SIZE}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            decelerationRate={0}
            data={favoriteCategory}
            keyExtractor={item => `${item.id}`}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: favoriteCategoryScrollX } } }],
              { useNativeDriver: false }
            )}
            onMomentumScrollEnd={(event) => {
              // Calculate position
              const position = (event.nativeEvent.contentOffset.x / FAVORITE_CATEGORY_SIZE).toFixed(0)

              // Set favorite items base on category
              setFavoriteItem([
                { id: -1 },
                ...dummyData.favorites[position].items,
                { id: -2 }
              ])
            }}
            renderItem={({ item, index }) => {
              const opacity = favoriteCategoryScrollX.interpolate({
                inputRange: [
                  (index - 2) * FAVORITE_CATEGORY_SIZE,
                  (index - 1) * FAVORITE_CATEGORY_SIZE,
                  index * FAVORITE_CATEGORY_SIZE
                ],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp'
              })

              const mapSize = favoriteCategoryScrollX.interpolate({
                inputRange: [
                  (index - 2) * FAVORITE_CATEGORY_SIZE,
                  (index - 1) * FAVORITE_CATEGORY_SIZE,
                  index * FAVORITE_CATEGORY_SIZE
                ],
                outputRange: [35, Platform.OS === 'ios' ? 80 : 60, 35],
                extrapolate: 'clamp'
              })

              const fontSize = favoriteCategoryScrollX.interpolate({
                inputRange: [
                  (index - 2) * FAVORITE_CATEGORY_SIZE,
                  (index - 1) * FAVORITE_CATEGORY_SIZE,
                  index * FAVORITE_CATEGORY_SIZE
                ],
                outputRange: [15, 25, 15],
                extrapolate: 'clamp'
              })

              if (index === 0 || index === favoriteCategory.length - 1) {
                return (
                    <View style={styles.emptyView} />
                )
              } else {
                return (
                    <Animated.View
                        opacity={opacity}
                        style={styles.animatedCategory}
                    >
                        <Animated.Image
                            source={item.image}
                            resizeMode='contain'
                            style={{
                              width: mapSize,
                              height: mapSize
                            }}
                        />
                        <Animated.Text style={{ ...styles.animatedCategoryText, color: appTheme.textColor, fontSize: fontSize }}>
                            {item.name}
                        </Animated.Text>
                    </Animated.View>
                )
              }
            }}
        />
    )
  }

  function renderFavoriteItems () {
    return (
        <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={favoriteItem}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{ alignItems: 'center' }}
            snapToAlignment='center'
            snapToInterval={Platform.OS === 'ios' ? FAVORITE_ITEM_SIZE + 28 : FAVORITE_ITEM_SIZE}
            scrollEventThrottle={16}
            decelerationRate={0}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: favoriteItemScrollX } } }],
              { useNativeDriver: false }
            )}
            renderItem={({ item, index }) => {
              const opacity = favoriteItemScrollX.interpolate({
                inputRange: [
                  (index - 2) * FAVORITE_ITEM_SIZE,
                  (index - 1) * FAVORITE_ITEM_SIZE,
                  index * FAVORITE_ITEM_SIZE
                ],
                outputRange: [0.5, 1, 0.5],
                extrapolate: 'clamp'
              })

              let activeHeight = 0

              if (Platform.OS === 'ios') {
                if (SIZES.height > 800) {
                  activeHeight = SIZES.height / 2.5
                } else {
                  activeHeight = SIZES.height / 1.65
                }
              } else {
                activeHeight = SIZES.height / 1.6
              }

              const height = favoriteItemScrollX.interpolate({
                inputRange: [
                  (index - 2) * FAVORITE_ITEM_SIZE,
                  (index - 1) * FAVORITE_ITEM_SIZE,
                  index * FAVORITE_ITEM_SIZE
                ],
                outputRange: [SIZES.height / 3, activeHeight, SIZES.height / 3],
                extrapolate: 'clamp'
              })

              if (index === 0 || index === favoriteItem.length - 1) {
                return (
                      <View
                        style={{ width: EMPTY_ITEM_SIZE }}
                      />
                )
              } else {
                return (
                    <Animated.View
                        opacity={opacity}
                        style={{ height: height, ...styles.animatedItem }}
                    >
                        <Image
                            source={item.image}
                            resizeMode='cover'
                            style={styles.animatedItemImage}
                        />
                        <View style={styles.animatedItemView}>
                            <Text style={styles.animatedItemTextName}>
                                {item.name}
                            </Text>

                            <Text style={styles.animatedItemTextDescription}>
                                {item.description}
                            </Text>

                            <CustomButton
                                isPrimaryButton={true}
                                label='Delivery'
                                containerStyle={styles.customButton}
                                labelStyle={{ ...FONTS.h3 }}
                                onPress={() => navigation.navigate('Location')}
                            />
                        </View>
                    </Animated.View>
                )
              }
            }}
        />
    )
  }

  return (
        <View style={styles.container}>
            <HeaderBar />
            <ScrollView
                style={{ ...styles.scrollView, backgroundColor: appTheme.backgroundColor }}
                contentContainerStyle={{ paddingBottom: 150 }}
            >
              <View style={{ alignItems: 'center', marginTop: SIZES.padding }}>
                <Text style={{ color: COLORS.primary, ...FONTS.h1 }}>
                  Favorite drinks
                </Text>
              </View>
              {/* Flat list of Favorite categories */}
              <View style={{ height: 150, paddingTop: 25 }}>
                  {renderFavoriteCategories()}
              </View>

              {/* Flat list of Favorite items */}
              <View style={{ height: 700, paddingBottom: 300 }}>
                  {renderFavoriteItems()}
              </View>
            </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyView: {
    width: FAVORITE_CATEGORY_SIZE
  },
  animatedCategory: {
    height: 130,
    width: FAVORITE_CATEGORY_SIZE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animatedCategoryText: {
    marginTop: 2,
    fontWeight: 'bold'
  },
  animatedItemImage: {
    position: 'absolute',
    width: '95%',
    height: '95%',
    borderRadius: 20
  },
  animatedItem: {
    width: FAVORITE_ITEM_SIZE,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10
  },
  animatedItemView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: SIZES.padding
  },
  animatedItemTextName: {
    color: COLORS.red,
    ...FONTS.h2,
    marginBottom: SIZES.radius
  },
  animatedItemTextDescription: {
    color: COLORS.white,
    ...FONTS.body3,
    textAlign: 'center'
  },
  customButton: {
    width: 100,
    paddingVertical: 5,
    marginRight: SIZES.radius,
    borderRadius: SIZES.radius * 2,
    marginTop: SIZES.radius
  },
  scrollView: {
    flex: 1,
    marginTop: -25,
    borderTopLeftRadius: SIZES.radius * 2,
    borderTopRightRadius: SIZES.radius * 2
  }
})

function mapStateToProps (state) {
  return {
    appTheme: state.theme.appTheme,
    error: state.theme.error
  }
}

export default connect(mapStateToProps)(Favorite)
