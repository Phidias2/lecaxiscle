import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { slides } from "../model/slide";
import CustomSlider from "../components/CustomSlider";
import AppIntroSlider from "react-native-app-intro-slider";
import { SIZES, height } from "../utils/Dimensions";
import { COLOR } from "../utils/Color";
const OnboardingScreen = ({ navigation }) => {
    const gridItem = [
        {
            "title": "Jeux concours",
            "color": "green",
            "icon": "trophy-outline"
        },
        {
            "title": "Mon abonnement",
            "color": "red",
            "icon": "time-outline"
        },
        {
            "title": "Communaute Lecaxiscle",
            "color": "red",
            "icon": "chatbubbles-outline"
        },
        {
            "title": "Nous contacter",
            "color": "red",
            "icon": "mail-unread-outline"
        }
    ]
    const [showHomePage, setshowHomePage] = useState(true)
    const buttonLabel = ({ label }) => {
        <View style={{ padding: 12 }}>
            <Text style={{ fontWeight: "600", fontSize: SIZES.h4, color: COLOR.title }}>{label}</Text>
        </View>
    }
    if (!showHomePage) {
        return (
            <AppIntroSlider
                data={slides}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1, alignItems: 'center', padding: 15, paddingTop: 100 }}>
                            <Image source={item.image} style={{ width: SIZES.width - 60, height: 400, resizeMode: "contain" }} />
                            <Text style={{ fontWeight: 'bold', fontSize: SIZES.h1, color: COLOR.title }}>
                                {item.title}
                            </Text>
                            <Text style={{ textAlign: 'center', paddingTop: 5, color: COLOR.title }}>{item.description}</Text>
                        </View>
                    )
                }
                }
                showSkipButton
                activeDotStyle={{ backgroundColor: COLOR.primary, width: 30 }}
                renderNextButton={buttonLabel("Next")}
                renderSkipButton={buttonLabel("Skip")}
                renderDoneButton={buttonLabel("Done")}
                onDone={() => {
                    setshowHomePage(true)
                }}
            />
        )
    }

    return (
        <>
        <Text>let's go</Text>
            {/* <Text style={{ color: COLOR.title, fontSize: SIZES.h3, textAlign: "center", textDecorationStyle: "solid", margin: 10 }}>Bienvenue chere utilisateur</Text>
            <CustomSlider slides={slides} />

            <View style={{padding:10}}>
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
                            <TouchableOpacity
                                style={[styles.card, { backgroundColor: item.color }]}>
                                <View style={styles.cardHeader}>
                                    <Ionicons name={item.icon} color='#fff' size={28} />

                                </View>
                                <Text style={styles.title}>{item.title}</Text>

                                <View style={styles.cardFooter}>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View> */}
        </>

    )

}
export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    list: {
        //paddingHorizontal: 5,
        backgroundColor: '#E6E6E6',
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
        textAlign:"center",
        fontStyle:"24px"
    },
    subTitle: {
        fontSize: 12,
        flex: 1,
        color: '#FFFFFF',
    },
})