import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GameViewComponent = ({ name, }) => {
    const data = [
        {
            id: '1',
            image: require('../assets/11.jpg'),
            title: 'Storyteller',
            caption: 'Puzzle',
        },
        {
            id: '2',
            image: require('../assets/2.jpg'),
            title: 'Love is Blind',
            caption: 'Interactive Story',
        },
        {
            id: '3',
            image: require('../assets/3.jpg'),
            title: 'Ghost Detective',
            caption: 'Puzzle',
        },
        {
            id: '4',
            image: require('../assets/4.jpg'),
            title: 'Modern Combat',
            caption: 'Fight Game Movie',
        },
        {
            id: '5',
            image: require('../assets/15.jpg'),
            title: 'Batman',
            caption: 'Fight Game Movie',
        },
    ]

    const RenderItem = ({ item, index }) => {
        return (
            <View style={styles.movieOne}>
                <View style={styles.movieOne}>
                    <TouchableOpacity style={styles.movieCart}>
                        <Image source={item.image} style={styles.image} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, alignSelf: 'flex-start' }}>{item.title}</Text>
                    <Text style={{ color: '#c0c0c0', fontSize: 14, fontWeight: '500', alignSelf: 'flex-start'  }}>{item.caption}</Text>
                    {
                        index >= 3 ? (
                            null
                        ) :
                            (
                                <View style={styles.playAndMyListContainer}>
                                    <Text style={{ color: '#E50914', fontSize: 24, fontWeight: 'bold' }}>N</Text>
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

export default GameViewComponent

const styles = StyleSheet.create({
    playAndMyListContainer: {
        position: 'absolute',
        width: '80%',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 128,
        backgroundColor: 'transparent',
        borderRadius: 3.5,
        left: -35
    },
    movieCart: {
        width: '88%',
        height: '90%',
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
        height: 185,
        width: 130,
        marginHorizontal: 10,
        marginVertical: 20,
    },
    image: {
        height: '90%',
        width: '120%',
        borderRadius: 25,
    },
})