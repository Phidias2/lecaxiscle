import React from "react"
import { SafeAreaView, Text, Image, StyleSheet, View } from "react-native"
import CountDown from 'react-native-countdown-component';
import { BlurView } from "expo-blur";
import { SIZES } from "../utils/Dimensions";
const SuscribeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Image source={require('../assets/images/stade.jpg')} style={[{ width: '100%', height: '100%', resizeMode: 'cover' }, StyleSheet.absoluteFill]} />
            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: '80%' }}>
            <Text style={{fontSize:SIZES.h1,color:"#fff", fontWeight:"800"}}>Fin d'abonnement dans</Text>
                <BlurView intensity={80}>
                    <CountDown
                        size={30}
                        until={1000}
                        onFinish={() => alert('Finished')}
                        digitStyle={{ backgroundColor: '#eeffff90', borderWidth: 2, borderColor: '#626ce6' }}
                        digitTxtStyle={{ color: '#626ce6' }}
                        timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                        timeToShow={['J', 'H', 'M', 'S']}
                        timeLabels={{ m: null, s: null }}
                        showSeparator
                    />
                </BlurView>
            </View>

        </SafeAreaView>
    )
}
export default SuscribeScreen