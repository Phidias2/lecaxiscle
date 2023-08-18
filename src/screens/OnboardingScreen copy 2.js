import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Animated } from "react-native";
import { slides } from "../model/slide";
import OnboardingItem from "./OnboardingItem";
const OnboardingScreen = ({ navigation }) => {
    const slidesRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollx = useRef(new Animated.Value(0)).current
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    return (
        <View style={styles.container}>
            <Text>test</Text>
            <View style={{ flex: 3 }}>
                <FlatList data={slides}
                    renderItem={({ item }) =>
                        <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }],
                        { useNativeDriver: false })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig} 
                    ref={slidesRef}
                    />
            </View>
        </View>
    )

}
export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})