import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import HomeImageMovie from './HomeImageMovie'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.nIconView}>
                <Text style={styles.n}>N</Text>
                <TouchableOpacity>
                    <Feather name='search' style={{ marginHorizontal: 20 }} color={'white'} size={28} />
                </TouchableOpacity>
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity style={styles.the_link}>
                    <Text style={styles.linkText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.the_link}>
                    <Text style={styles.linkText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.the_link}>
                    <Text style={styles.linkText}>Categories</Text>
                    <MaterialIcons name="keyboard-arrow-down" style={{ marginTop: 5 }} color={'white'} size={17} />
                </TouchableOpacity>
            </View>
            <View style={styles.movieOne}>
                <HomeImageMovie/>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    n: {
        color: '#E50914',
        fontSize: 58,
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    nIconView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 0.10
    },
    the_link: {
        width: 100,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 5,
        flexDirection: 'row',
    },
    linkText: {
        color: 'white',
        fontSize: 15,
    },
    linkContainer: {
        flexDirection: 'row',
        flex: 0.05,
        alignItems: 'center',
    },
    movieOne: {
        flex: 0.85,
    },
})