import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'

const FirstImagePlay = () => {

    const data = [
        {
            id: '1',
            image: require('./assets/five.jpg'),
        },
        {
            id: '2',
            image: require('./assets/four.jpg'),
        },
        {
            id: '3',
            image: require('./assets/one.jpg'),
        },
        {
            id: '4',
            image: require('./assets/six.jpg'),
        },
        {
            id: '5',
            image: require('./assets/two.jpg'),
        },
    ]

    const RenderItem = ({item}) => {
        return (
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
    }
    return (
        <View style={{flex: 1}}>
            <FlatList data={data} keyExtractor={item => item.id} renderItem={({ item }) => <RenderItem item={item} />} />
        </View>
    )
}

export default FirstImagePlay

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
        height: 500
    },
    image: {
        height: '90%',
        width: '100%',
        borderRadius: 20
    },
})