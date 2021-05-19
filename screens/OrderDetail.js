import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';

import {
    dummyData, 
    SIZES, 
    FONTS, 
    COLORS, 
    icons
} from "../constants";

import { IconButton } from "../components";

import { connect } from "react-redux";

const OrderDetail = ({ navigation, route, appTheme }) => {

    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedSize, setSelectedSize] = useState("M")
    const [selectedMilkIndex, setSelectedMilkIndex] = useState(0)
    const [selectedSweetnessLevel, setSelectedSweetnessLevel] = useState(100)
    const [selectedIceLevel, setSelectedIceLevel] = useState(100)

    useEffect(() => {
        let { selectedItem } = route.params
        setSelectedItem(selectedItem)
    }, [])

    function priceFormat (price) {
        return price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' đ'
    }

    function handleSwitchMilk (action) {
        if (action == "next" && dummyData.milkList.length - 1 > selectedMilkIndex ) {
            setSelectedMilkIndex(selectedMilkIndex + 1)
        } else if (action == "prev" && selectedMilkIndex > 0) {
            setSelectedMilkIndex(selectedMilkIndex - 1)
        }
    }

    function handleSwitchSweetnessLevel (action) {
        if (action == "+" && selectedSweetnessLevel < 100) {
            setSelectedSweetnessLevel(selectedSweetnessLevel + 25)
        } if (action == "-" && selectedSweetnessLevel > 0) {
            setSelectedSweetnessLevel(selectedSweetnessLevel - 25)
        }
    }

    function handleSwitchIceLevel (action) {
        if (action == "+" && selectedIceLevel < 100) {
            setSelectedIceLevel(selectedIceLevel + 25)
        } if (action == "-" && selectedIceLevel > 0) {
            setSelectedIceLevel(selectedIceLevel - 25)
        }
    }

    function renderHeaderSection () {
        return (
            <View
                style={{
                    width: "100%",
                    height: "55%",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View 
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 40,
                        borderBottomLeftRadius: 100,
                        backgroundColor: COLORS.primary
                    }}
                />
                <Image 
                    source={selectedItem?.thumbnail}
                    resizeMode='contain'
                    style={{
                        width: SIZES.width * 0.7,
                        height: SIZES.width * 0.7
                    }}
                />
                {/* Back Button */}
                <IconButton
                    containerStyle={{
                        position: 'absolute',
                        top: 45,
                        left: 20,
                        padding: 10,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.black
                    }}
                    icon={icons.leftArrow}
                    onPress={() => navigation.goBack()}
                />
            </View>
        )
    }

    function renderDetailSection () {
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 30,
                    justifyContent: 'space-between',
                    marginTop: SIZES.padding
                }}
            >
                {/* Name and Description */}
                <View>
                    <Text
                        style={{
                            color: appTheme.headerColor,
                            ...FONTS.h1,
                            fontSize: 25
                        }}
                    >
                        {selectedItem?.name}
                    </Text>
                    <Text
                        style={{
                            color: appTheme.textColor,
                            ...FONTS.body3,
                            marginTop: SIZES.base
                        }}
                    >
                        {selectedItem?.description}
                    </Text>
                </View>

                {/* Size */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius
                    }}
                >
                    {/* Label */}
                    <Text
                        style={{
                            color: appTheme.headerColor,
                            ...FONTS.h2,
                            flex: 1,
                            fontSize: 20
                        }}
                    >
                        Pick A Size
                    </Text>

                    {/* Cup */}
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}
                            onPress={() => setSelectedSize("M")}
                        >
                            <ImageBackground 
                                source={icons.coffee_cup}
                                style={{
                                    width: 80,
                                    height: 80,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == "M" ? COLORS.primary : COLORS.lightGray2
                                }}
                            >
                                <Text style={{ ...FONTS.body3, color: COLORS.white }}>
                                    M
                                </Text>
                            </ImageBackground>
                            <Text
                                style={{
                                    marginTop: 3,
                                    color: appTheme.textColor,
                                    ...FONTS.body3
                                }}
                            >
                                {selectedItem?.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' đ'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}
                            onPress={() => setSelectedSize("L")}
                        >
                            <ImageBackground 
                                source={icons.coffee_cup}
                                style={{
                                    width: 100,
                                    height: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == "L" ? COLORS.primary : COLORS.lightGray2
                                }}
                            >
                                <Text style={{ ...FONTS.body3, color: COLORS.white }}>
                                    L
                                </Text>
                            </ImageBackground>
                            <Text
                                style={{
                                    marginTop: 3,
                                    color: appTheme.textColor,
                                    ...FONTS.body3
                                }}
                            >
                                {(selectedItem?.price + 7000).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' đ'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {/* Milk, Sweetness and Ice */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Milk */}
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{ color: appTheme.headerColor, ...FONTS.h2, fontSize: 20 }}>
                            Milk
                        </Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                width: 100,
                                height: 100,
                                marginTop: SIZES.base,
                                alignItems: 'center',
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.primary
                            }}
                        >
                            <IconButton
                                icon={icons.leftArrow}
                                containerStyle={{
                                    marginLeft: -15,
                                    width: 25,
                                    height: 25,
                                    borderRadius: 3,
                                    backgroundColor: COLORS.white
                                }}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    tintColor: COLORS.black
                                }}
                                onPress={() => handleSwitchMilk("prev")}
                            />
                            
                            <Image
                                source={dummyData.milkList[selectedMilkIndex].image}
                                resizeMode='contain'
                                style={{
                                    flex: 1,
                                    width: 70,
                                    height: 70,
                                    tintColor: COLORS.white
                                }}
                            />

                            <IconButton
                                icon={icons.rightArrow}
                                containerStyle={{
                                    marginRight: -15,
                                    width: 25,
                                    height: 25,
                                    borderRadius: 3,
                                    backgroundColor: COLORS.white
                                }}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    tintColor: COLORS.black
                                }}
                                onPress={() => handleSwitchMilk("next")}
                            />
                        </View>
                        
                        <Text
                            style={{
                                marginTop: SIZES.base,
                                color: appTheme.textColor,
                                ...FONTS.body3
                            }}
                        >
                            {dummyData.milkList[selectedMilkIndex].name}
                        </Text>
                    </View>

                    {/* Sweetness and Ice */}
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        {/* Sweetness adjust section */}
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                paddingHorizontal: SIZES.padding
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: appTheme.headerColor,
                                    ...FONTS.h2,
                                    fontSize: 20
                                }}
                            >
                                Sweetness
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '60%',
                                    borderRadius: 15,
                                    backgroundColor: COLORS.primary
                                }}
                            >
                                {/* Reduce sweet button */}
                                <IconButton
                                    icon={icons.minus}
                                    containerStyle={{
                                        marginLeft: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        tintColor: COLORS.black,
                                        width: 15,
                                        height: 15
                                    }}
                                    onPress={() => handleSwitchSweetnessLevel("-")}
                                />

                                {/* Percentage of sweetness */}
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: COLORS.white,
                                            ...FONTS.h3
                                        }}
                                    >
                                        {selectedSweetnessLevel}%
                                    </Text>
                                </View>

                                {/* Increase sweet button */}
                                <IconButton
                                    icon={icons.add}
                                    containerStyle={{
                                        marginRight: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        tintColor: COLORS.black,
                                        width: 15,
                                        height: 15
                                    }}
                                    onPress={() => handleSwitchSweetnessLevel("+")}
                                />

                            </View>
                        </View>

                        {/* Ice adjust section */}
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                paddingHorizontal: SIZES.padding
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: appTheme.headerColor,
                                    ...FONTS.h2,
                                    fontSize: 20
                                }}
                            >
                                Ice
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '60%',
                                    borderRadius: 15,
                                    backgroundColor: COLORS.primary
                                }}
                            >
                                {/* Reduce ice button */}
                                <IconButton
                                    icon={icons.minus}
                                    containerStyle={{
                                        marginLeft: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        tintColor: COLORS.black,
                                        width: 15,
                                        height: 15
                                    }}
                                    onPress={() => handleSwitchIceLevel("-")}
                                />

                                {/* Percentage of ice */}
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: COLORS.white,
                                            ...FONTS.h3
                                        }}
                                    >
                                        {selectedIceLevel}%
                                    </Text>
                                </View>

                                {/* Add ice button */}
                                <IconButton
                                    icon={icons.add}
                                    containerStyle={{
                                        marginRight: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        tintColor: COLORS.black,
                                        width: 15,
                                        height: 15
                                    }}
                                    onPress={() => handleSwitchIceLevel("+")}
                                />

                            </View>
                        </View>
                    </View>

                </View>

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: appTheme.backgroundColor
            }}
        >
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    paddingBottom: 250
                }}
            >
                {/* Header */}
                {renderHeaderSection()}

                {/* Details */}
                {renderDetailSection()}
            </ScrollView>
        </View>
    )
}

function mapStateToProps (state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

export default connect(mapStateToProps)(OrderDetail);