import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import MobileGamesComponent from './MobileGamesComponent'
import SecondMobileGamesComponent from './SecondMobileGamesComponent'
import ThirdMobileGamesComponent from './ThirdMobileGamesComponent'

const HomeImageMovie = () => {
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
                                <View style={styles.playAndMyListContainer}>
                                    <TouchableOpacity style={styles.play}>
                                        <Feather name='play' color={'black'} size={30} />
                                        <Text style={{ fontSize: 17 }}>Play</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.play, { backgroundColor: '#c0c0c0' }]}>
                                        <Feather name='plus' color={'black'} size={30} />
                                        <Text style={{ fontSize: 17 }}>My List</Text>
                                    </TouchableOpacity>
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

export default HomeImageMovie

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
        borderRadius: 5
    },
    movieOne: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 480
    },
    image: {
        height: '90%',
        width: '100%',
        borderRadius: 20,
    },
})