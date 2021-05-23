import React,
{
  useState,
  useRef,
  createRef,
  useEffect,
  useCallback
} from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Animated,
  Image
} from 'react-native'

import { HeaderBar, CustomButton } from '../components'

import {
  COLORS,
  SIZES,
  constants,
  icons,
  dummyData,
  FONTS
} from '../constants'

import { connect } from 'react-redux'

const promoTabs = constants.promoTabs.map((promoTab) => ({
  ...promoTab,
  ref: createRef()
}))

const TabIndicator = ({ measureLayout, scrollX }) => {
  // Omit the first parameter (_, index)
  const inputRange = promoTabs.map((_, i) => i * SIZES.width)

  const TabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.width)
  })

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.x)
  })

  return (
        <Animated.View
            style={{
              ...styles.tabIndicatorAnimated,
              width: TabIndicatorWidth,
              transform: [{
                translateX
                // without 'perspective' the Animated will not render on Android
                // while working fine on iOS
              }]
            }}
        />
  )
}

const Tabs = ({ appTheme, scrollX, onPromoTabPress }) => {
  // measure layout information with an empty array
  const [measureLayout, setMeasureLayout] = useState([])
  const containerRef = useRef()

  const tabPosition = Animated.divide(scrollX, SIZES.width)

  useEffect(() => {
    const arr = []
    promoTabs.forEach(promo => {
      // measureLayout( relativeToNativeComponentRef, onSuccess, onFail )
      promo.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          arr.push({
            x, y, width, height
          })
          if (arr.length === promoTabs.length) {
            setMeasureLayout(arr)
          }
        }
      )
    })
  }, [containerRef.current])

  return (
        <View
            ref={containerRef}
            style={{
              ...styles.tabsView,
              backgroundColor: appTheme.tabBackgroundColor
            }}
        >
            {/* Tab Indicator */}
            {measureLayout.length > 0 &&
                <TabIndicator
                    measureLayout={measureLayout}
                    scrollX={scrollX}
                />
            }

            {/* Tabs */}
            {promoTabs.map((item, index) => {
              const textColor = tabPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [COLORS.lightGray2, COLORS.white, COLORS.lightGray2],
                extrapolate: 'clamp'
              })

              return (
                    <TouchableOpacity
                        key={`PromoTab-${index}`}
                        onPress={() => onPromoTabPress(index)}
                    >
                        <View
                            // access to the ref property of tab
                            // which will then allow we to measure the layout
                            ref={item.ref}
                            style={styles.tabsTouchView}
                        >
                            <Animated.Text style={{ color: textColor, ...FONTS.h3 }}>
                                {item.title}
                            </Animated.Text>
                        </View>
                    </TouchableOpacity>
              )
            })}
        </View>
  )
}

const Home = ({ navigation, appTheme }) => {
  const scrollX = useRef(new Animated.Value(0)).current

  // manipulate the flat-list when press the tab
  const promoScrollViewRef = useRef()

  const onPromoTabPress = useCallback(promoTabIndex => {
    promoScrollViewRef?.current?.scrollToOffset({
      offset: promoTabIndex * SIZES.width
    })
  })

  function renderAvailableRewards () {
    return (
            <TouchableOpacity
                style={styles.rewardTouch}
                onPress={() => navigation.navigate('Rewards')}
            >
                {/* Reward Cup */}
                <View style={styles.rewardViewCup}>
                    <ImageBackground
                        source={icons.reward_cup}
                        resizeMode="contain"
                        style={styles.rewardCupImage}
                    >
                        <View style={styles.pointInCup}>
                            <Text style={styles.pointInCupText}>
                                199
                            </Text>
                        </View>
                    </ImageBackground>
                </View>

                {/* Reward Detail */}
                <View style={styles.viewRewardDetail} >
                    <Text style={styles.textAvailableRewards} >
                        Available Rewards
                    </Text>
                    <View style={styles.viewPointDetail} >
                        <Text style={styles.pointDetailText}>
                            50 points - 35.000đ
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>
    )
  }

  function renderPromoDeals () {
    return (
            <View style={styles.viewPromo}>
                {/* Header - Tabs */}
                <Tabs
                    appTheme={appTheme}
                    scrollX={scrollX}
                    onPromoTabPress={onPromoTabPress}
                />

                {/* Details */}
                <Animated.FlatList
                    ref={promoScrollViewRef}
                    data={dummyData.promos}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={16}
                    snapToAlignment='center'
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                      { nativeEvent: { contentOffset: { x: scrollX } } }
                    ], {
                      useNativeDriver: false
                    })}
                    renderItem={({ item, index }) => {
                      return (
                            <View style={styles.viewDetailPromo}>
                                {/* Image */}
                                <Image
                                    source={item.image}
                                    resizeMode='contain'
                                    style={styles.imagePromo}
                                />

                                {/* Name */}
                                <Text style={{ color: appTheme.headerColor, ...FONTS.h2, fontSize: 27 }}>
                                    {item.name}
                                </Text>

                                {/* Description */}
                                <Text style={{ marginTop: 3, color: appTheme.textColor, ...FONTS.body4 }}>
                                    {item.description}
                                </Text>

                                {/* Calories */}
                                <Text style={{ marginTop: 3, color: appTheme.textColor, ...FONTS.body4 }}>
                                    Calories: {item.calories}
                                </Text>

                                {/* Order Button */}
                                <CustomButton
                                    label="Order Now"
                                    isPrimaryButton={true}
                                    containerStyle={styles.customButton}
                                    labelStyle={{ ...FONTS.h3 }}
                                    onPress={() => navigation.navigate('Location')}
                                />

                            </View>
                      )
                    }}
                />
            </View>
    )
  }

  return (
        <View style={styles.container}>
            <HeaderBar />

            <ScrollView
                style={{
                  ...styles.scrollView,
                  backgroundColor: appTheme.backgroundColor
                }}
                contentContainerStyle={{ paddingBottom: 150 }}
            >
                {/* Rewards */}
                {renderAvailableRewards()}

                {/* Promo */}
                {renderPromoDeals()}
            </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    marginTop: -25,
    borderTopLeftRadius: SIZES.radius * 2,
    borderTopRightRadius: SIZES.radius * 2
  },
  tabIndicatorAnimated: {
    position: 'absolute',
    height: '100%',
    left: 0,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius
  },
  tabsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius
  },
  tabsTouchView: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  rewardTouch: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    height: 100
  },
  rewardViewCup: {
    width: 100,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.pink,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  rewardCupImage: {
    width: 85,
    height: 85,
    marginLeft: 3,
    alignItems: 'center'
  },
  pointInCup: {
    top: 35,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.transparentBlack
  },
  pointInCupText: {
    color: COLORS.white,
    ...FONTS.h4
  },
  viewRewardDetail: {
    flex: 1,
    backgroundColor: COLORS.lightPink,
    marginLeft: -10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAvailableRewards: {
    color: COLORS.primary,
    ...FONTS.h2,
    fontSize: 20
  },
  viewPointDetail: {
    marginTop: 5,
    padding: SIZES.base,
    borderRadius: SIZES.radius * 2,
    backgroundColor: COLORS.primary
  },
  pointDetailText: {
    color: COLORS.white,
    ...FONTS.body3
  },
  viewPromo: {
    flex: 1,
    alignItems: 'center'
  },
  viewDetailPromo: {
    flex: 1,
    alignItems: 'center',
    width: SIZES.width,
    paddingTop: SIZES.padding
  },
  imagePromo: {
    width: 220,
    height: 220
  },
  customButton: {
    marginTop: 10,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.radius * 2
  }
})

function mapStateToProps (state) {
  return {
    appTheme: state.theme.appTheme,
    error: state.theme.error
  }
}

export default connect(mapStateToProps)(Home)
