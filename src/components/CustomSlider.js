import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const CustomSlider = ({slides}) => {
    const FlatListRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <View style={styles.carouselContainer}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={(event) => {
                        const x = event.nativeEvent.contentOffset.x;
                        const index = Math.floor(x / (width - 60));
                        if (index !== activeIndex) {
                            setActiveIndex(index);
                        }
                    }}
                    scrollEventThrottle={16}
                >
                    {slides.map((item, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <Image source={ item.image } style={styles.image} />
                            {/* <View style={styles.textContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.content}>{item.description}</Text>
                            </View> */}
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.dotContainer}>
                    {slides.map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
                            <View
                                style={[
                                    styles.dot,
                                    { backgroundColor: index === activeIndex ? 'white' : 'gray' },
                                ]}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </>

    )
}

export default CustomSlider

const styles = StyleSheet.create({
    carouselContainer: {
        height: 325
    },
    itemContainer: {
        width: width - 60,
        height: height / 2,
        alignItems: 'center',
        // justifyContent: 'center',
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    textContainer: {
        width: '90%',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 10,
        position: 'absolute',
        bottom: 150,
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
        bottom: 60,
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
