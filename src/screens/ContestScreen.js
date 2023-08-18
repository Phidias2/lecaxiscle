import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity, Clipboard, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SIZES } from '../utils/Dimensions';
import { BlurView } from 'expo-blur';



const propertyData = [
    {
        id: '1',
        image: require('../assets/images/homescreen/game-1.jpeg'),
        logo1: require('../assets/images/homescreen/game-1.jpeg'),
        logo2: require('../assets/images/homescreen/game-1.jpeg'),
        price: '$250,000',
        address: '123 Main St',
        squareMeters: '150',
        beds: '3',
        team1: 'PSG',
        team2: 'LYON'
    },
];

const ContestScreen = () => {
    const [searchText, setSearchText] = useState('');


    const renderItem = ({ item }) => (
        <View style={styles.card} >
            <BlurView intensity={100} style={{ borderRadius: 15 }}>
                <View style={styles.cardFooter}>
                    <View>
                        <ImageBackground
                            source={require('../assets/images/psg.png')}
                            style={{ width: 35, height: 35, marginBottom: 5 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                        <Text style={styles.parking}> {item.team1}</Text>
                    </View>
                    <View style={styles.score}>
                        <TextInput placeholder='0' style={styles.scoreInput} />
                        <Text>-</Text>
                        <TextInput placeholder='0' style={styles.scoreInput} />
                    </View>
                    <View>
                        <ImageBackground
                            source={require('../assets/images/lyon.png')}
                            style={{ width: 35, height: 35, marginBottom: 5 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                        <Text style={styles.parking}> {item.team2}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ position: 'absolute', left: '36%', top: '80%', backgroundColor: 'blue', width: 100, padding: 5, borderRadius: 10, color: '#fff' }}>
                    <Text style={{ textAlign: 'center', color: "#fff", fontWeight: "800" }}>JOUER</Text>
                </TouchableOpacity>
            </BlurView>

        </View>
    );

    const filteredData = propertyData.filter((item) => {
        return item.address.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/stade.jpg')} style={[{ width: '100%', height: '100%', resizeMode: 'cover' }, StyleSheet.absoluteFill]} />
            <FlatList
                contentContainerStyle={styles.propertyListContainer}
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    searchInputContainer: {
        paddingHorizontal: 20,
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    propertyListContainer: {
        paddingHorizontal: 20,
    },
    card: {
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    cardFooter: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    score: {
        fontSize: 14,
        color: '#ffa500',
        fontWeight: 'bold',
        alignItems: 'center',
        flexDirection: 'row',
    },
    scoreInput: {
        maxWidth: 35,
        maxHeight:35,
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#ffffff90',
        marginHorizontal: 10,
        outlineStyle: 'none',
        marginVertical:10
    },
});

export default ContestScreen
