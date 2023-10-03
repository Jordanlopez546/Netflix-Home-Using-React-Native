import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import MobileGamesComponent from './MobileGamesComponent'
import SecondMobileGamesComponent from './SecondMobileGamesComponent'
import ThirdMobileGamesComponent from './ThirdMobileGamesComponent'

const GameImage = () => {
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
    ]

    const RenderItem = ({ item, index }) => {
        return (
            <>
                {
                    index === 0 ?
                        (
                            <View style={styles.movieOne}>
                                <TouchableOpacity style={styles.movieCart}>
                                    <Image source={item.image} style={styles.image} />
                                </TouchableOpacity>
                                <View style={styles.playAndMyListContainer2}>
                                    <TouchableOpacity style={styles.movieCart2}>
                                        <Image source={require('../assets/six.jpg')} style={styles.image2} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ position: 'absolute', bottom: 50 }}>
                                    <Text style={styles.dungeonText}>Dungeon Boss: Respawned</Text>
                                </View>
                                <View style={{ position: 'absolute', bottom: 30, flexDirection: 'row', paddingRight: 10 }}>
                                    <Text style={{ color: '#E0E0E0', marginHorizontal: 5, fontSize: 16, fontWeight: '300' }}>Fighting</Text>
                                    <Text style={{ color: '#E0E0E0', marginHorizontal: 5, fontSize: 16, fontWeight: '300' }}>Fantasy</Text>
                                    <Text style={{ color: '#E0E0E0', marginHorizontal: 5, fontSize: 16, fontWeight: '300' }}>Role-Playing</Text>
                                    <Text style={{ color: '#E0E0E0', marginHorizontal: 5, fontSize: 16, fontWeight: '300' }}>Looter</Text>
                                </View>
                            </View>
                        )
                        :
                        index === 1 ?
                            (
                                <MobileGamesComponent name={'Mobile Games'} />
                            ) :
                            index === 2 ?
                                (
                                    <SecondMobileGamesComponent name={'Trending Now'} />
                                )
                                :
                                (
                                    <ThirdMobileGamesComponent name={'Only on Netflix'} />
                                )
                }

            </>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={data} keyExtractor={item => item.id} renderItem={({ item, index }) => <RenderItem item={item} index={index} />} />
        </View>
    )
}

export default GameImage

const styles = StyleSheet.create({
    playAndMyListContainer: {
        position: 'absolute',
        width: '80%',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 40
    },
    movieCart: {
        width: '100%',
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
        borderRadius: 5
    },
    movieOne: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 480,
        width: '100%'
    },
    image: {
        height: '100%',
        width: '100%',
    },
    image2: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
    },
    playAndMyListContainer2: {
        height: 150,
        width: 130,
        position: 'absolute',
        bottom: 90,
        backgroundColor: '#000',
        borderRadius: 15
    },
    movieCart2: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dungeonText: {
        maxWidth: '100%',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 21
    }
})