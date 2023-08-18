import React, { useRef, useState, useContext } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, StyleSheet, FlatList, ImageBackground, Image } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomSlider from "../components/CustomSlider";
import { slides } from "../model/slide";
import { SIZES } from "../utils/Dimensions";
import { COLOR } from "../utils/Color";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlurView } from "expo-blur";
import { AuthContext } from '../context/AuthContext';


const HomeScreen = ({ navigation }) => {
    const FlatListRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { userInfo } = useContext(AuthContext)
    console.log(userInfo);
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('my-key', value);
        } catch (e) {
            // saving error
        }
    };
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('my-key');
            if (value !== null) {
                console.log(value);
            }
        } catch (e) {
            // error reading value
        }
    };
    const gridItem = [
        {
            "title": "Jeux concours",
            "color": "green",
            "icon": "trophy-outline",
            "screen": "Contest"
        },
        {
            "title": "Mon abonnement",
            "color": "red",
            "icon": "time-outline",
            "screen": "Suscribe"
        },
        {
            "title": "Communaute Lecaxiscle",
            "color": "red",
            "icon": "chatbubbles-outline",
            "screen": "Community"
        },
        {
            "title": "Nous contacter",
            "color": "red",
            "icon": "mail-unread-outline",
            "screen": "Contact"
        }
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Image source={require('../assets/images/stade.jpg')} style={[{ width: '100%', height: '100%', resizeMode: 'cover' }, StyleSheet.absoluteFill]} />
            <BlurView intensity={10}>
                <ScrollView style={{ padding: 20 }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                    }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>
                            Hello 
                        </Text>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <ImageBackground
                                source={require('../assets/images/user-profile.jpg')}
                                style={{ width: 35, height: 35 }}
                                imageStyle={{ borderRadius: 25 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <>
                        <CustomSlider slides={slides} />

                        <View style={{ padding: 10 }}>
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
                                                onPress={() => navigation.navigate(item.screen)}
                                            >
                                                <View style={styles.cardHeader}>
                                                    <Ionicons name={item.icon} color='#fff' size={28} />

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
            </BlurView>
        </SafeAreaView>
    )
}

export default HomeScreen


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