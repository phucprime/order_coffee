import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native'

import {
  dummyData,
  SIZES,
  FONTS,
  COLORS,
  icons
} from '../constants'

import { IconButton } from '../components'

import { connect } from 'react-redux'

const OrderDetail = ({ navigation, route, appTheme }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedMilkIndex, setSelectedMilkIndex] = useState(0)
  const [selectedSweetnessLevel, setSelectedSweetnessLevel] = useState(100)
  const [selectedIceLevel, setSelectedIceLevel] = useState(100)

  useEffect(() => {
    const { selectedItem } = route.params
    setSelectedItem(selectedItem)
  }, [])

  function toFixedPrice (price) {
    return price && price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' đ'
  }

  function handleSwitchMilk (action) {
    if (action === 'next' && dummyData.milkList.length - 1 > selectedMilkIndex) {
      setSelectedMilkIndex(selectedMilkIndex + 1)
    } else if (action === 'prev' && selectedMilkIndex > 0) {
      setSelectedMilkIndex(selectedMilkIndex - 1)
    } else if (action === 'next' && selectedMilkIndex === dummyData.milkList.length - 1) {
      setSelectedMilkIndex(0)
    } else if (action === 'prev' && selectedMilkIndex === 0) {
      setSelectedMilkIndex(dummyData.milkList.length - 1)
    }
  }

  function handleSwitchSweetnessLevel (action) {
    if (action === '+' && selectedSweetnessLevel < 100) {
      setSelectedSweetnessLevel(selectedSweetnessLevel + 25)
    } if (action === '-' && selectedSweetnessLevel > 0) {
      setSelectedSweetnessLevel(selectedSweetnessLevel - 25)
    }
  }

  function handleSwitchIceLevel (action) {
    if (action === '+' && selectedIceLevel < 100) {
      setSelectedIceLevel(selectedIceLevel + 25)
    } if (action === '-' && selectedIceLevel > 0) {
      setSelectedIceLevel(selectedIceLevel - 25)
    }
  }

  function renderHeaderSection () {
    return (
            <View style={styles.viewHeader}>
              <View style={styles.viewHeaderShape} />
              <Image
                source={selectedItem?.thumbnail}
                resizeMode='contain'
                style={{ width: SIZES.width * 0.7, height: SIZES.width * 0.7 }}
              />
              {/* Back Button */}
              <IconButton
                containerStyle={styles.headerIconButton}
                icon={icons.leftArrow}
                onPress={() => navigation.goBack()}
              />
            </View>
    )
  }

  function renderDetailSection () {
    return (
      <View style={styles.viewDetail}>
        {/* Name and Description */}
        <View>
          <Text style={{ color: appTheme.headerColor, ...FONTS.h1, fontSize: 25 }}>
            {selectedItem?.name}
          </Text>
          <Text style={{ color: appTheme.textColor, ...FONTS.body3, marginTop: SIZES.base }}>
            {selectedItem?.description}
          </Text>
        </View>

        {/* Size */}
        <View style={styles.viewSize}>
          {/* Label */}
          <Text style={{ color: appTheme.headerColor, ...styles.pickSizeText }}>
            Pick A Size
          </Text>

          {/* Cup */}
          <View style={styles.viewCup}>
            <TouchableOpacity style={styles.touchM} onPress={() => setSelectedSize('M')}>
              <ImageBackground
                source={icons.coffee_cup}
                style={styles.imageM}
                imageStyle={{ tintColor: selectedSize === 'M' ? COLORS.primary : COLORS.lightGray2 }}
              >
                <Text style={styles.textM}>
                  M
                </Text>
              </ImageBackground>
              <Text style={{ marginTop: 3, color: appTheme.textColor, ...FONTS.body3 }}>
                {toFixedPrice(selectedItem?.price + dummyData.milkList[selectedMilkIndex].price)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchL} onPress={() => setSelectedSize('L')}>
              <ImageBackground
                source={icons.coffee_cup}
                style={styles.imageL}
                imageStyle={{ tintColor: selectedSize === 'L' ? COLORS.primary : COLORS.lightGray2 }}
              >
                  <Text style={styles.textL}>
                    L
                  </Text>
                </ImageBackground>
                <Text style={{ marginTop: 3, color: appTheme.textColor, ...FONTS.body3 }}>
                  {toFixedPrice(selectedItem?.price + 7000 + dummyData.milkList[selectedMilkIndex].price)}
                </Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* Milk, Sweetness and Ice */}
        <View style={styles.viewBottom}>
          {/* Milk */}
          <View style={styles.viewMilk}>
            <Text style={{ color: appTheme.headerColor, ...FONTS.h2, fontSize: 20 }}>
              Milk
            </Text>

            <View style={styles.viewMilkSection}>
              <IconButton
                icon={icons.leftArrow}
                containerStyle={styles.iconMilkReduceContainer}
                iconStyle={styles.iconMilkReduceStyle}
                onPress={() => handleSwitchMilk('prev')}
              />

              <Image
                source={dummyData.milkList[selectedMilkIndex].image}
                resizeMode='contain'
                style={styles.imageMilk}
              />

              <IconButton
                icon={icons.rightArrow}
                containerStyle={styles.iconMilkIncreaseContainer}
                iconStyle={styles.iconMilkIncreaseStyle}
                onPress={() => handleSwitchMilk('next')}
              />
            </View>

            <Text style={{ marginTop: SIZES.base, color: appTheme.textColor, ...FONTS.body3 }}>
              {dummyData.milkList[selectedMilkIndex].name}
            </Text>
            <Text style={{ color: appTheme.textColor, ...FONTS.body3 }}>
              {dummyData.milkList[selectedMilkIndex].price > 0
                ? '+ ' + toFixedPrice(dummyData.milkList[selectedMilkIndex].price)
                : 'Less fat of drink'}
            </Text>
          </View>

          {/* Sweetness and Ice */}
          <View style={{ flex: 1 }}>
            {/* Sweetness adjust section */}
            <View style={styles.viewSweetness}>
              <Text style={{ color: appTheme.headerColor, ...styles.textSweetness }}>
                Sweetness
              </Text>
                <View style={styles.viewSweetnessSection}>
                  {/* Reduce sweet button */}
                  <IconButton
                    icon={icons.minus}
                    containerStyle={styles.iconSweetnessReduceContainer}
                    iconStyle={styles.iconSweetnessReduceStyle}
                    onPress={() => handleSwitchSweetnessLevel('-')}
                  />

                  {/* Percentage of sweetness */}
                  <View style={styles.viewSweetnessPercentage}>
                    <Text style={styles.sweetnessPercentage}>
                      {selectedSweetnessLevel}%
                    </Text>
                  </View>

                  {/* Increase sweet button */}
                  <IconButton
                    icon={icons.add}
                    containerStyle={styles.iconSweetnessIncreaseContainer}
                    iconStyle={styles.iconSweetnessIncreaseStyle}
                    onPress={() => handleSwitchSweetnessLevel('+')}
                  />

                </View>
              </View>

              {/* Ice adjust section */}
              <View style={styles.viewIce}>
                <Text style={{ color: appTheme.headerColor, ...styles.textIce }}>
                  Ice
                </Text>

                <View style={styles.viewIceSection}>
                  {/* Reduce ice button */}
                  <IconButton
                    icon={icons.minus}
                    containerStyle={styles.iconIceReduceContainer}
                    iconStyle={styles.iconIceReduceStyle}
                    onPress={() => handleSwitchIceLevel('-')}
                  />

                  {/* Percentage of ice */}
                  <View style={styles.viewIcePercentage}>
                    <Text style={styles.textIcePercentage}>
                      {selectedIceLevel}%
                    </Text>
                  </View>

                  {/* Add ice button */}
                  <IconButton
                    icon={icons.add}
                    containerStyle={styles.iconIceIncreaseContainer}
                    iconStyle={styles.iconIceIncreaseStyle}
                    onPress={() => handleSwitchIceLevel('+')}
                  />

                </View>
              </View>
            </View>

          </View>

      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: appTheme.backgroundColor }}>
      <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 250 }}>
        {/* Header */}
        {renderHeaderSection()}

        {/* Details */}
        {renderDetailSection()}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconIceIncreaseStyle: {
    tintColor: COLORS.black,
    width: 15,
    height: 15
  },
  iconIceIncreaseContainer: {
    marginRight: -8,
    width: 25,
    height: 25,
    borderRadius: 3,
    backgroundColor: COLORS.white
  },
  textIcePercentage: {
    color: COLORS.white,
    ...FONTS.h3
  },
  viewIcePercentage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconIceReduceStyle: {
    tintColor: COLORS.black,
    width: 15,
    height: 15
  },
  iconIceReduceContainer: {
    marginLeft: -8,
    width: 25,
    height: 25,
    borderRadius: 3,
    backgroundColor: COLORS.white
  },
  viewIceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
    borderRadius: 15,
    backgroundColor: COLORS.primary
  },
  textIce: {
    textAlign: 'center',
    ...FONTS.h2,
    fontSize: 20
  },
  viewIce: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding
  },
  iconSweetnessIncreaseStyle: {
    tintColor: COLORS.black,
    width: 15,
    height: 15
  },
  iconSweetnessIncreaseContainer: {
    marginRight: -8,
    width: 25,
    height: 25,
    borderRadius: 3,
    backgroundColor: COLORS.white
  },
  sweetnessPercentage: {
    color: COLORS.white,
    ...FONTS.h3
  },
  viewSweetnessPercentage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconSweetnessReduceStyle: {
    tintColor: COLORS.black,
    width: 15,
    height: 15
  },
  iconSweetnessReduceContainer: {
    marginLeft: -8,
    width: 25,
    height: 25,
    borderRadius: 3,
    backgroundColor: COLORS.white
  },
  viewSweetnessSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
    borderRadius: 15,
    backgroundColor: COLORS.primary
  },
  textSweetness: {
    textAlign: 'center',
    ...FONTS.h2,
    fontSize: 20
  },
  viewSweetness: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding
  },
  iconMilkIncreaseStyle: {
    width: 15,
    height: 15,
    tintColor: COLORS.black
  },
  iconMilkIncreaseContainer: {
    marginRight: -15,
    width: 25,
    height: 25,
    borderRadius: 3,
    backgroundColor: COLORS.white
  },
  imageMilk: {
    flex: 1,
    width: 80,
    height: 80
  },
  iconMilkReduceStyle: {
    width: 15,
    height: 15,
    tintColor: COLORS.black
  },
  iconMilkReduceContainer: {
    marginLeft: -15,
    width: 25,
    height: 25,
    borderRadius: 3,
    backgroundColor: COLORS.white
  },
  viewMilkSection: {
    flexDirection: 'row',
    width: 100,
    height: 100,
    marginTop: SIZES.base,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary
  },
  viewMilk: {
    flex: 1,
    alignItems: 'center'
  },
  viewHeader: {
    width: '100%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewHeaderShape: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 40,
    borderBottomLeftRadius: 100,
    backgroundColor: COLORS.primary
  },
  headerIconButton: {
    position: 'absolute',
    top: 45,
    left: 20,
    padding: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.black
  },
  viewDetail: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    marginTop: SIZES.padding
  },
  viewSize: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius
  },
  pickSizeText: {
    ...FONTS.h2,
    flex: 1,
    fontSize: 20
  },
  viewCup: {
    flex: 1,
    flexDirection: 'row'
  },
  touchM: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  imageM: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textM: { ...FONTS.body3, color: COLORS.white },
  touchL: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  imageL: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textL: { ...FONTS.body3, color: COLORS.white },
  viewBottom: {
    flexDirection: 'row',
    marginTop: SIZES.padding
  }
})

function mapStateToProps (state) {
  return {
    appTheme: state.theme.appTheme,
    error: state.theme.error
  }
}

export default connect(mapStateToProps)(OrderDetail)
