import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import ProfileViewComponent from './ProfileViewComponent';


const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.myNetflixAndIcons, {padding: 10}]}>
                <Text style={styles.myNetflixText}>Joe Netflix</Text>
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <Feather name="search" size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="menu" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.lastView}>
                <ProfileViewComponent />
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    myNetflixAndIcons: {
        flex: 0.07,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icons: {
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: 'space-between',
        width: 70,
    },
    myNetflixText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginHorizontal: 10
    },
    lastView: {
        flex: 0.93
    }
})