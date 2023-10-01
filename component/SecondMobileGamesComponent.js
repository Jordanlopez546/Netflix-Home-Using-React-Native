import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SecondMobileGamesComponent = ({ name }) => {
    const data = [
        {
            id: '1',
            image: require('../assets/11.jpg'),
        },
        {
            id: '2',
            image: require('../assets/2.jpg'),
        },
        {
            id: '3',
            image: require('../assets/3.jpg'),
        },
        {
            id: '4',
            image: require('../assets/4.jpg'),
        },
        {
            id: '5',
            image: require('../assets/15.jpg'),
        },
    ]

    const RenderItem = ({ item, index }) => {
        return (
            <View style={styles.movieOne}>
                <View style={styles.movieOne}>
                    <TouchableOpacity style={styles.movieCart}>
                        <Image source={item.image} style={styles.image} />
                    </TouchableOpacity>
                    {
                        index >= 3 ? (
                            null
                        ) :
                            (
                                <View style={styles.playAndMyListContainer}>
                                    <Text style={{ color: 'white', fontSize: 14 }}>Recently Added</Text>
                                </View>
                            )
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 10, marginTop: 15, marginBottom: -10, fontWeight: 'bold' }}>{name}</Text>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={data} keyExtractor={item => item.id} renderItem={({ item, index }) => <RenderItem index={index} item={item} />} />
        </View>
    )
}

export default SecondMobileGamesComponent

const styles = StyleSheet.create({
    playAndMyListContainer: {
        position: 'absolute',
        width: '80%',
        flexDirection: 'row',
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 8,
        backgroundColor: '#E50914',
        borderRadius: 3.5
    },
    movieCart: {
        width: '88%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    play: {
        width: '45%',
        height: '90%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    movieOne: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 180,
        width: 135,
        marginHorizontal: 10,
        marginVertical: 20
    },
    image: {
        height: '100%',
        width: '120%',
        borderRadius: 5,
    },
})