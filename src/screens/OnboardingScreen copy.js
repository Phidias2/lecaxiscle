import React, { useState } from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Ellipse } from "react-native-svg";
import UrbanDesignSVG from '../svg/UrbanDesignSVG'
import OrderConfirmedSVG from '../svg/OrderConfirmedSVG'
import OrderDeliverySVG from '../svg/OrderDeliverySVG'
const OnboardingScreen = ({ navigation }) => {

    const [pages, setPages] = useState(1)
    const nextPage = () => {
        setPages(pages + 1)
    }
    const prevPage = () => {
        setPages(pages - 1)
    }
    // const _storeData = async () => {
    //     try {
    //       await AsyncStorage.setItem(
    //         'item',
    //         'I like to save it.',
    //       );
    //     } catch (error) {               
    //       console.log(7777777,error);
    //     }
    //   };

    //   _retrieveData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('item');
    //       if (value !== null) {
    //         console.log(value);
    //       }
    //     } catch (error) {
    //       console.log(888888,error);
    //     }
    //   };
    const Splash = () => {
        let content
        if (pages == 1) {
            content = <>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <UrbanDesignSVG
                        width={300}
                        height={300}
                        style={{ transform: [{ rotate: '-0deg' }] }}
                    />
                    <View style={{ marginTop: "20px", padding: 5, textAlign: "center" }}>
                        <Text style={{ color: "#000", textAlign: "center", fontWeight: "600", fontSize: "28px", textTransform: "capitalize" }}>
                            Missebo au bout du doigt
                        </Text>
                        <Text style={{ color: "#000", fontWeight: 400, textAlign: "center", fontSize: "16px", padding: 12 }}>
                            Commandez où que vous soyez au Bénin et faites vous livrez votre colis en moins de 24h
                        </Text>
                    </View>
                </View>
                <View style={{ margin:"auto" }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#F9A826',
                            padding: 15,
                            paddingLeft:25,
                            paddingRight:25,
                            borderRadius: 10,
                            marginBottom: 50,
                        }}
                        onPress={nextPage}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto-MediumItalic',
                            }}>
                            Suivant
                        </Text>
                    </TouchableOpacity>
                </View>

            </>
        }
        else if (pages == 2) {
            content = <>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <OrderConfirmedSVG
                        width={300}
                        height={300}
                        style={{ transform: [{ rotate: '-0deg' }] }}
                    />
                    <View style={{ marginTop: "20px", padding: 5, textAlign: "center" }}>
                        <Text style={{ color: "#000", textAlign: "center", fontWeight: "600", fontSize: "28px", textTransform: "capitalize" }}>
                            Livraison sous 24h
                        </Text>
                        <Text style={{ color: "#000", fontWeight: 400, textAlign: "center", fontSize: "16px", padding: 12 }}>
                            Commandez où que vous soyez au Bénin et faites vous livrez votre colis en moins de 24h
                        </Text>
                    </View>
                </View>

                <View style={{ margin:"auto" }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#F9A826',
                            padding: 20,
                            paddingLeft:25,
                            paddingRight:25,
                            borderRadius: 15,
                            marginBottom: 50,
                            textAlign: "center"
                        }}
                        onPress={nextPage}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto-MediumItalic',
                            }}>
                            Suivant
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#F9A826',
                            padding: 20,
                            width: '30%',
                            borderRadius: 10,
                            marginBottom: 50,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                        onPress={prevPage}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto-MediumItalic',
                            }}>
                            Précédent
                        </Text>
                        <MaterialIcons name="arrow-backward-ios" size={22} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#F9A826',
                            padding: 20,
                            width: '30%',
                            borderRadius: 10,
                            marginBottom: 50,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                        onPress={nextPage}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto-MediumItalic',
                            }}>
                            Suivant
                        </Text>
                        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
                    </TouchableOpacity>
                </View> */}
            </>
        }
        else {
            content = <>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <OrderDeliverySVG
                        width={300}
                        height={300}
                        style={{ transform: [{ rotate: '-0deg' }] }}
                    />
                    <View style={{ marginTop: "20px", padding: 5, textAlign: "center" }}>
                        <Text style={{ color: "#000", textAlign: "center", fontWeight: "600", fontSize: "28px", textTransform: "capitalize" }}>
                            Retour produit
                        </Text>
                        <Text style={{ color: "#000", fontWeight: 400, textAlign: "center", fontSize: "16px", padding: 12 }}>
                             Des problèmes avec le produit reçu? Vous pouvez renvoyer le produit pour le faire remplacer ou vous faire rembourser
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#F9A826',
                        padding: 20,
                        width: '90%',
                        borderRadius: 10,
                        marginBottom: 50,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => navigation.navigate('login')}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontFamily: 'Roboto-MediumItalic',
                        }}>
                        Let's Begin
                    </Text>
                    <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
                </TouchableOpacity>
            </>
        }
        return content
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center'
        }}>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Text style={{ textAlign: "right", fontWeight: 600, marginTop: "30px", fontSize: "18px", marginRight: "25px" }}>Skip</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 20 }}>
                {/* <Text
                    style={{
                        fontFamily: 'Inter-Bold',
                        fontWeight: 'bold',
                        fontSize: 30,
                        color: '#20315f',
                    }}
                >
                    Missebo Market
                </Text> */}
            </View>
            <Splash />
        </SafeAreaView>
    )
}
export default OnboardingScreen