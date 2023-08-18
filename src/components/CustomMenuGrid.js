import React, { } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const { width, height } = Dimensions.get('window');
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

const CustomMenuGrid = () => {
    <View style={styles.container}>
        <Text>Traitre</Text>
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={gridItem}
      horizontal={false}
      numColumns={2}
      keyExtractor={item => {
        return item.id
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => {
              showAlert(item.view)
            }}>
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
  </View>
}
export default CustomMenuGrid

const styles = StyleSheet.create({
    itemContainer: {
      width: width - 60,
      height: height / 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 30,
    },
    image: {
      width: '100%',
      height: '60%',
      resizeMode: 'cover',
      borderRadius: 10,
    },
    textContainer: {
      width: '90%',
      padding: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      borderRadius: 10,
      position: 'absolute',
      bottom: 100,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 5,
    },
    content: {
      fontSize: 14,
      textAlign: 'center',
    },
    dotContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 10,
    },
    dot: {
      width: 20,
      height: 20,
      borderRadius: 10,
      margin: 5,
      borderWidth: 1
    },
    icon: {
      alignItems: 'flex-start'
    },
  
    container: {
      flex: 1,
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
      marginHorizontal: 2,
      marginVertical: 2,
      flexBasis: '48%',
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
    },
    subTitle: {
      fontSize: 12,
      flex: 1,
      color: '#FFFFFF',
    },
    icon: {
      height: 20,
      width: 20,
    },
  
  
  
  });