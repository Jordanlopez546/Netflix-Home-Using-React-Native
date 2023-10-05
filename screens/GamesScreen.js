import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import GameImage from '../component/GameImage'

const GamesScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.gamesTextIconContainer}>
                <Text style={styles.gameText}>Games</Text>
                <Feather name='search' style={{ marginHorizontal: 20 }} color={'white'} size={28} />
            </View>
            <View style={styles.gameViewContainer}>
                <GameImage/>
            </View>
        </View>
    )
}

export default GamesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    gameText: {
        color: '#fff',
        fontSize: 25,
        marginHorizontal: 20,
        fontWeight: 'bold',
    },
    gamesTextIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#000',
        flex: 0.06
    },
    gameViewContainer: {
        flex: 0.94,
        backgroundColor: 'black',
    },
})