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

import { dummyData, FONTS, SIZES } from '../constants'

import { connect } from 'react-redux'

import { HeaderBar, CustomButton } from '../components'

const FAVORITE_CATEGORY_SIZE = SIZES.width / 3
const FAVORITE_ITEM_SIZE = Platform.OS === 'ios' ? SIZES.width / 1.25 : SIZES.width / 1.2
const EMPTY_ITEM_SIZE = (SIZES.width - FAVORITE_ITEM_SIZE) / 2

const Favorite = ({ navigation, appTheme }) => {
  const favoriteCategoryScrollX = useRef(new Animated.Value(0)).current

  const favoriteItemScrollX = useRef(new Animated.Value(0)).current

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
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: favoriteCategoryScrollX } } }
            ], { useNativeDrive: false })}
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
                outputRange: [25, Platform.OS === 'ios' ? 80 : 60, 25],
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
                    <View
                        style={{
                          width: FAVORITE_CATEGORY_SIZE
                        }}
                    />
                )
              } else {
                return (
                    <Animated.View
                        opacity={opacity}
                        style={{
                          height: 130,
                          width: FAVORITE_CATEGORY_SIZE,
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                    >
                        <Animated.Image
                            source={item.image}
                            resizeMode='contain'
                            style={{
                              width: mapSize,
                              height: mapSize
                            }}
                        />
                        <Animated.Text
                            style={{
                              marginTop: 2,
                              color: appTheme.textColor,
                              fontSize: fontSize,
                              fontWeight: 'bold'
                            }}
                        >
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
            contentContainerStyle={{
              alignItems: 'center'
            }}
            snapToAlignment='center'
            snapToInterval={Platform.OS === 'ios' ? FAVORITE_ITEM_SIZE + 28 : FAVORITE_ITEM_SIZE}
            scrollEventThrottle={16}
            decelerationRate={0}
            bounces={false}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: favoriteItemScrollX } } }
            ], { useNativeDrive: false })}
            renderItem={({ item, index }) => {
              const opacity = favoriteItemScrollX.interpolate({
                inputRange: [
                  (index - 2) * FAVORITE_ITEM_SIZE,
                  (index - 1) * FAVORITE_ITEM_SIZE,
                  index * FAVORITE_ITEM_SIZE
                ],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp'
              })

              let activeHeight = 0

              if (Platform.OS === 'ios') {
                if (SIZES.height > 800) {
                  activeHeight = SIZES.height / 2.6
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
                outputRange: [SIZES.height / 2.25, activeHeight, SIZES.height / 2.25],
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
                        style={{
                          width: FAVORITE_ITEM_SIZE,
                          height: height,
                          alignItems: 'center',
                          borderRadius: 20,
                          padding: 10
                        }}
                    >
                        <Image
                            source={item.image}
                            resizeMode='cover'
                            style={{
                              position: 'absolute',
                              width: '95%',
                              height: '95%',
                              borderRadius: 20
                            }}
                        />
                        <View
                            style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'flex-end',
                              marginHorizontal: SIZES.padding
                            }}
                        >
                            <Text style={{
                              color: appTheme.textColor,
                              ...FONTS.h2,
                              marginBottom: SIZES.radius
                            }}>
                                {item.name}
                            </Text>

                            <Text style={{
                              color: appTheme.textColor,
                              ...FONTS.body3,
                              textAlign: 'center'
                            }}>
                                {item.description}
                            </Text>

                            <CustomButton
                                isPrimaryButton={true}
                                label='Delivery'
                                containerStyle={{
                                  width: 100,
                                  paddingVertical: 5,
                                  marginRight: SIZES.radius,
                                  borderRadius: SIZES.radius * 2,
                                  marginTop: SIZES.radius
                                }}
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
                style={{
                  flex: 1,
                  marginTop: -25,
                  borderTopLeftRadius: SIZES.radius * 2,
                  borderTopRightRadius: SIZES.radius * 2,
                  backgroundColor: appTheme.backgroundColor
                }}
                contentContainerStyle={{
                  paddingBottom: 150
                }}
            >
                {/* Flat list of Favorite categories */}
                <View style={{ height: 200 }}>
                    {renderFavoriteCategories()}
                </View>

                {/* Flat list of Favorite items */}
                <View style={{ height: 500, paddingBottom: 150 }}>
                    {renderFavoriteItems()}
                </View>
            </ScrollView>
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
    appTheme: state.appTheme,
    error: state.error
  }
}

export default connect(mapStateToProps)(Favorite)
