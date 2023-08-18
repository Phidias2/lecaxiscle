import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity, Clipboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SIZES } from '../utils/Dimensions';
import { db } from '../../firebase';
import { ref, onValue } from 'firebase/database';



const HistoricScreen = () => {
    const [coupons, setCoupons] = useState([])
    useEffect(() => {
        // Get a database reference to our posts
        const couponsRef = ref(db, 'coupons/');

        onValue(couponsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const formsArray = Object.values(data);
                setCoupons(formsArray);
            }
        });

    }, []);


    const gameStatut = (status) => {
        if (status=="gagne") {
            return 'green'
        }
        else{
            return "#ff0000"
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} >
                <Text
                    style={{ transform: [{ rotate: '-30deg' }], zIndex: 10 ,fontSize: "48px", color: gameStatut(item.status), justifyContent:'center', position:'absolute',top:"30%", left:"30%", borderStyle:"dashed", borderWidth:1, borderRadius:10, borderColor:gameStatut(item.status) }}
                >{item.status}</Text>


            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.cardFooter}>
                {/* cotes */}
                <Text style={styles.beds}> Cote: {item.cote}</Text>
                {/* code */}
                <Text style={styles.baths}> fiabilite {item.fiabilite} % </Text>
                {/* fiablite */}


            </View>
        </TouchableOpacity>
    );

    const filteredData = coupons.filter((item) => {
        return item;
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
        backgroundColor: '#fff',
        borderRadius: 5,
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
    image: {
        height: 150,
        marginBottom: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    cardBody: {
        marginBottom: 10,
        padding: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    address: {
        fontSize: 16,
        marginBottom: 5
    },
    squareMeters: {
        fontSize: 14,
        marginBottom: 5,
        color: '#666'
    },
    cardFooter: {
        padding: 10,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dcdcdc',
        justifyContent: 'space-between',
    },
    beds: {
        fontSize: 14,
        color: '#ffa500',
        fontWeight: 'bold'
    },
    baths: {
        fontSize: 14,
        color: '#ffa500',
        fontWeight: 'bold'
    },
    parking: {
        fontSize: 14,
        color: '#ffa500',
        fontWeight: 'bold'
    }
});

export default HistoricScreen
