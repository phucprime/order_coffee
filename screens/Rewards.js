import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground
} from 'react-native'

import { HeaderBar, CustomButton } from '../components'

import {
  dummyData,
  FONTS,
  COLORS,
  SIZES,
  icons
} from '../constants'

import { connect } from 'react-redux'

const Rewards = ({ navigation, appTheme }) => {
  function renderRewardPointSection () {
    return (
      <View style={styles.viewRewardPoint}>
        <Text style={styles.rewardText}>
          Rewards
        </Text>

        <Text style={{ color: appTheme.textColor, ...styles.pointRemindText }}>
          You are 60 points away from your next reward
        </Text>

        <ImageBackground
          source={icons.reward_cup}
          resizeMode='contain'
          style={styles.imageBackground}
        >
          <View style={styles.viewPoint}>
              <Text style={{ ...FONTS.h1 }}>199</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }

  function renderButtons () {
    return (
      <View style={styles.viewButton}>
          <CustomButton
              isPrimaryButton={true}
              label='Scan in store'
              containerStyle={styles.scanInStore}
              labelStyle={{ ...FONTS.h3 }}
              onPress={() => navigation.navigate('Location')}
          />

          <CustomButton
              isSecondaryButton={true}
              label='Redeem'
              containerStyle={styles.redeem}
              labelStyle={{ ...FONTS.h3 }}
              onPress={() => navigation.navigate('Location')}
          />
      </View>
    )
  }

  function renderAvailableRewardHeader () {
    return (
      <View style={styles.viewAvailableRewards}>
        <Text style={{ ...styles.textAvailableRewards, color: appTheme.textColor }}>
          Available Rewards
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderBar />

      {/* Details */}
      <FlatList
        style={{ backgroundColor: appTheme.backgroundColor, ...styles.flatList }}
        data={dummyData.availableRewards}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Reward Points */}
            {renderRewardPointSection()}

            {/* Buttons */}
            {renderButtons()}

            {/* Header Label */}
            {renderAvailableRewardHeader()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <View
              style={{
                ...styles.itemView,
                backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2
              }}
            >
              <Text style={{ color: item.eligible ? COLORS.black : COLORS.white, ...FONTS.body3 }}>
                {item.title}
              </Text>
            </View>
          )
        }}
        ListFooterComponent={<View style={{ marginBottom: 120 }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.base,
    paddingVertical: SIZES.base,
    borderRadius: 20
  },
  flatList: {
    marginTop: -25,
    borderTopLeftRadius: SIZES.radius * 2,
    borderTopRightRadius: SIZES.radius * 2
  },
  textAvailableRewards: { ...FONTS.h2 },
  redeem: {
    width: 130,
    paddingVertical: 5,
    borderRadius: SIZES.radius * 2
  },
  viewAvailableRewards: {
    marginTop: SIZES.padding,
    marginBottom: SIZES.radius,
    paddingHorizontal: SIZES.padding
  },
  scanInStore: {
    width: 130,
    paddingVertical: 5,
    marginRight: SIZES.radius,
    borderRadius: SIZES.radius * 2
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewRewardPoint: {
    alignItems: 'center',
    marginVertical: SIZES.padding
  },
  rewardText: {
    color: COLORS.primary,
    ...FONTS.h1,
    fontSize: 35
  },
  pointRemindText: {
    width: SIZES.width * 0.6,
    textAlign: 'center',
    ...FONTS.h3,
    lineHeight: 18,
    marginTop: 10
  },
  imageBackground: {
    marginTop: SIZES.padding,
    width: SIZES.width * 0.8,
    height: SIZES.width * 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewPoint: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
  }
})

function mapStateToProps (state) {
  return {
    appTheme: state.theme.appTheme,
    error: state.theme.error
  }
}

export default connect(mapStateToProps)(Rewards)
