import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { HeaderBar } from "../components";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home;