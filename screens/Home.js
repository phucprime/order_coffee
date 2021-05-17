import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';

import { HeaderBar } from "../components";

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

const Home = ({ navigation, appTheme }) => {
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
            >

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

//export default Home;

function mapStateToProps (state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

//inject toggle theme from themeActions
function mapDispatchToProps (dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);