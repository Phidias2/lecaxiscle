import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { db, auth } from '../../firebase';
import { ref, onValue } from 'firebase/database';

const ProfileScreen = ({ navigation }) => {

    const [userData, setUserData] = useState([])
    useEffect(() => {
        console.log(auth.currentUser);
        // Get a database reference to our posts
        const userRef = ref(db, `users/${auth.currentUser.uid}`);


        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const formsArray = Object.values(data);
                setUserData(formsArray);
                console.log(userData);
            }
        });

    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                }}>
                    <ScrollView style={{ padding: 20 }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>
                                Hello John Doe nnnnnnn
                            </Text>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <ImageBackground
                                    source={require('../assets/images/user-profile.jpg')}
                                    style={{ width: 35, height: 35 }}
                                    imageStyle={{ borderRadius: 25 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>
                <BlurView intensity={50} >
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <Avatar.Image

                                source={
                                    require('../assets/images/user-profile.jpg')
                                }
                                size={80}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Title style={[styles.title, {
                                    marginTop: 15,
                                    marginBottom: 5,
                                }]}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>
                    </View>

                    <View style={styles.userInfoSection}>
                        <View style={styles.row}>
                            <Icon name="map-marker-radius" color="#555555" size={20} />
                            <Text style={{ color: "#555555", marginLeft: 20 }}>Kolkata, India</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name="phone" color="#555555" size={20} />
                            <Text style={{ color: "#555555", marginLeft: 20 }}>+91-900000009</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name="whatsapp" color="#555555" size={20} />
                            <Text style={{ color: "#555555", marginLeft: 20 }}>+91-900000009</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name="email" color="#555555" size={20} />
                            <Text style={{ color: "#555555", marginLeft: 20 }}>{auth.currentUser.email}</Text>
                        </View>
                    </View>

                    <View style={styles.infoBoxWrapper}>
                        <View style={[styles.infoBox, {
                            borderRightColor: '#dddddd',
                            borderRightWidth: 1
                        }]}>
                            <Title>Membre depuis</Title>
                            <Caption>30 mars 2023</Caption>
                        </View>
                        <View style={styles.infoBox}>
                            <Title>Abonnement</Title>
                            <Caption>Actif</Caption>
                        </View>
                    </View>

                    <View style={styles.menuWrapper}>
                        {/* <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="heart-outline" color="#0040AF" size={25} />
                            <Text style={styles.menuItemText}>Your Favorites</Text>
                        </View>
                    </TouchableRipple> */}
                        <TouchableRipple onPress={() => { }}>
                            <View style={styles.menuItem}>
                                <Icon name="credit-card" color="#0040AF" size={25} />
                                <Text style={styles.menuItemText}>Abonnement</Text>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple >
                            <View style={styles.menuItem}>
                                <Icon name="share-outline" color="#0040AF" size={25} />
                                <Text style={styles.menuItemText}>Partager avec des amis</Text>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => { }}>
                            <View style={styles.menuItem}>
                                <Icon name="account-check-outline" color="#0040AF" size={25} />
                                <Text style={styles.menuItemText}>Support</Text>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => navigation.navigate("Condition")}>
                            <View style={styles.menuItem}>
                                <Icon name="bank-outline" color="#0040AF" size={25} />
                                <Text style={styles.menuItemText}>Condition de vente</Text>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => navigation.navigate("Mention")}>
                            <View style={styles.menuItem}>
                                <Icon name="library" color="#0040AF" size={25} />
                                <Text style={styles.menuItemText}>Mention légale</Text>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => navigation.navigate("Politique")}>
                            <View style={styles.menuItem}>
                                <Icon name="incognito" color="#0040AF" size={25} />
                                <Text style={styles.menuItemText}>Politique de confidentialité</Text>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => navigation.navigate("General")}>
                            <View style={styles.menuItem}>
                                <Icon name="information-variant" color="#0040AF" size={25} />
                                <Text style={styles.menuItemText}>Information générale</Text>
                            </View>
                        </TouchableRipple>
                    </View>
                </BlurView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#555555',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});