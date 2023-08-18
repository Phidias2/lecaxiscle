import React, { useRef, useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, StyleSheet, FlatList, ImageBackground, Image, Linking } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SIZES } from "../utils/Dimensions";
import { COLOR } from "../utils/Color";
import { BlurView } from "expo-blur";

const ContactScreen = () => {
    const gridItem = [
        {
            "title": "Facebook",
            "color": "green",
            "icon": require('../assets/images/facebook.png'),
            "screen": "https://www.facebook.com/profile.php?id=100087958422441&mibextid=ZbWKwL"
        },
        {
            "title": "Whatsapp",
            "color": "red",
            "icon": require('../assets/images/whatsapp.png'),
            "screen": "https://wa.me/+22954480466"
        },
        {
            "title": "Telegram",
            "color": "red",
            "icon": require('../assets/images/telegram.png'),
            "screen": "https://t.me/lecaxiscle"
        },
        {
            "title": "Tiktok",
            "color": "red",
            "icon": require('../assets/images/tiktok.png'),
            "screen": "https://www.tiktok.com"
        }
    ]
    const openMedia = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Ne peut pas ouvrir l'URL: " + url);
            }
        });
    };
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Image source={require('../assets/images/joueur.png')} style={[{ width: '100%', height: '100%', resizeMode: 'cover' }, StyleSheet.absoluteFill]} />

                <ScrollView style={{ padding: 20 }}>
                    <>
                        <View style={{ padding: 10, marginVertical: 100 }}>
                            <FlatList
                                style={styles.list}
                                data={gridItem}
                                horizontal={false}
                                numColumns={2}
                                keyExtractor={item => {
                                    return item.id
                                }}
                                renderItem={({ item }) => {
                                    return (
                                        <BlurView intensity={30} style={[styles.card, { backgroundColor: item.color }]}>

                                            <TouchableOpacity
                                                onPress={() => openMedia(item.screen)}
                                            >
                                                <View style={styles.cardHeader}>                                               
                                                 <Image source={item.icon} style={{ width: 50, height: 50, borderRadius: 50 }} />

                                                </View>
                                                <Text style={styles.title}>{item.title}</Text>

                                                <View style={styles.cardFooter}>
                                                </View>
                                            </TouchableOpacity>
                                        </BlurView>

                                    )
                                }}
                            />
                        </View>
                    </>
                </ScrollView>
        </SafeAreaView>
    )
}
export default ContactScreen


const styles = StyleSheet.create({
    carouselContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 325,
    },
    itemContainer: {
        width: windowWidth - 60,
        height: windowHeight / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    list: {
        //paddingHorizontal: 5,
        // backgroundColor: '#E6E6E6',
    },
    listContainer: {
        alignItems: 'center',
    },
    /******** card **************/
    card: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexBasis: '45%',
        borderRadius: 10
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 70,
        width: 70,
        alignSelf: 'center',
    },
    title: {
        fontSize: 16,
        flex: 1,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        fontStyle: "24px"
    },
    subTitle: {
        fontSize: 12,
        flex: 1,
        color: '#FFFFFF',
    },
})