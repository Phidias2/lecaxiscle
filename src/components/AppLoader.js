import React from "react"
import { View, StyleSheet } from "react-native"
import LottieView from "lottie-react-native"
const AppLoader = () => {
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <LottieView source={require("../assets/images/loader.json")} autoPlay loop/>
    </View>
}

export default AppLoader

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})