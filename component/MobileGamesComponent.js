import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const MobileGamesComponent = ({ name }) => {
    const data = [
        {
            id: '1',
            image: require('../assets/four.jpg'),
        },
        {
            id: '2',
            image: require('../assets/five.jpg'),
        },
        {
            id: '3',
            image: require('../assets/one.jpg'),
        },
        {
            id: '4',
            image: require('../assets/six.jpg'),
        },
        {
            id: '5',
            image: require('../assets/two.jpg'),
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
            <View style={styles.nameIconMyListContainer}>
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity style={styles.iconMyListContainer}>
                    <Text style={styles.myList}>My List</Text>
                    <MaterialIcons name="keyboard-arrow-right" style={{ marginTop: 2 }} color={'white'} size={35} />
                </TouchableOpacity>
            </View>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={data} keyExtractor={item => item.id} renderItem={({ item, index }) => <RenderItem index={index} item={item} />} />
        </View>
    )
}

export default MobileGamesComponent

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
    name: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 15,
        marginBottom: -10,
        fontWeight: 'bold'
    },
    iconMyListContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: -10,
        marginRight: 5
    },
    myList: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5
    },
    nameIconMyListContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
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