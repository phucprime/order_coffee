import React, 
{ 
    useState, 
    useRef, 
    createRef,
    useEffect,
    useCallback
} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Animated,
    Image
} from 'react-native';

import { HeaderBar, CustomButton } from "../components";

import { 
    COLORS,
    SIZES,
    constants,
    icons,
    dummyData,
    FONTS,
    images
} from '../constants';

import { connect } from "react-redux";

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
                position: 'absolute',
                height: '100%',
                width: TabIndicatorWidth,
                left: 0,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.radius,
                transform: [{ translateX }] // pass x position
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

        let arr = []

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
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: SIZES.padding,
                backgroundColor: appTheme.tabBackgroundColor,
                borderRadius: SIZES.radius
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
                            style={{
                                paddingHorizontal: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 40
                            }}
                        >
                            <Animated.Text style={{color: textColor, ...FONTS.h3}}>
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

    const scrollX = useRef(new Animated.Value(0)).current;

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
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    height: 100
                }}
                onPress={() => navigation.navigate("Rewards")}
            >
                {/* Reward Cup */}
                <View
                    style={{
                        width: 100,
                        height: "100%",
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.pink,
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15
                    }}
                >
                    <ImageBackground
                        source={icons.reward_cup}
                        resizeMode="contain"
                        style={{
                            width: 85,
                            height: 85,
                            marginLeft: 3,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                top: 35,
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.transparentBlack
                            }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
                                199
                            </Text>
                        </View>

                    </ImageBackground>
                </View>

                {/* Reward Detail */}
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.lightPink,
                        marginLeft: -10,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text 
                        style={{ color: COLORS.primary, ...FONTS.h2, fontSize: 20 }}
                    >
                        Available Rewards
                    </Text>
                    <View
                        style={{
                            marginTop: 5,
                            padding: SIZES.base,
                            borderRadius: SIZES.radius * 2,
                            backgroundColor: COLORS.primary
                        }}
                    >
                        <Text
                            style={{ color: COLORS.white, ...FONTS.body3 }}
                        >
                            50 points - 35.000đ
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    function renderPromoDeals () {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center'
                }}
            >
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
                        {nativeEvent: {contentOffset: {x: scrollX}}}
                    ], {
                        useNativeDriver: false
                    })}
                    renderItem={({item, index}) => {
                        return (
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    width: SIZES.width,
                                    paddingTop: SIZES.padding
                                }}
                            >
                                {/* Image */}
                                <Image 
                                    source={images.strawberryBackground}
                                    resizeMode='contain'
                                    style={{
                                        width: '100%'
                                    }}
                                />

                                {/* Name */}
                                <Text style={{ color: COLORS.red, ...FONTS.h1, fontSize: 27}}>
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
                                    containerStyle={{
                                        marginTop: 10,
                                        paddingHorizontal: SIZES.padding,
                                        paddingVertical: SIZES.base,
                                        borderRadius: SIZES.radius * 2
                                    }}
                                    labelStyle={{
                                        ...FONTS.h3
                                    }}
                                    onPress={() => navigation.navigate("Location")}
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
    }
})

// export default Home;

function mapStateToProps (state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

export default connect(mapStateToProps)(Home);