import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons'
import MobileGamesComponent from './MobileGamesComponent'
import SecondMobileGamesComponent from './SecondMobileGamesComponent'
import ThirdMobileGamesComponent from './ThirdMobileGamesComponent'

const ProfileViewComponent = () => {
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
                                <View style={styles.imageNameContainer}>
                                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                                        <Image style={styles.image} source={item.image} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            fontSize: 22,
                                            color: 'white',
                                            marginTop: -10
                                        }}>Jordan Lopez</Text>
                                        <MaterialIcons name="keyboard-arrow-down" style={{ marginTop: -5 }} color={'white'} size={25} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.alarmNotificationsIconContainer}>
                                    <View style={styles.alarmNotificationsContainer}>
                                        <View style={styles.alarmcontainer}>
                                            <FontAwesome name="bell-o" size={24} color="white" />
                                        </View>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            fontSize: 20,
                                            color: 'white',
                                            alignSelf: 'center',
                                            marginRight: 20,
                                        }}>Notifications</Text>
                                    </View>
                                    <MaterialIcons name="keyboard-arrow-right" style={{ alignSelf: 'center' }} color={'white'} size={38} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.imageNameCart}>
                                    <Image style={styles.image2} source={require('../assets/30.jpg')} />
                                    <View style={styles.textsContainer}>
                                        <Text style={{
                                            fontWeight: 'normal',
                                            fontSize: 17,
                                            color: 'white',
                                            marginVertical: 2.4,
                                            marginHorizontal: 10
                                        }}>New Arrival</Text>
                                        <Text style={{
                                            fontWeight: '300',
                                            fontSize: 17,
                                            color: 'white',
                                            marginVertical: 2.4,
                                            marginHorizontal: 10
                                        }}>Fighting, Furious and Horror</Text>
                                        <Text style={{
                                            fontWeight: 'normal',
                                            fontSize: 17,
                                            color: '#c0c0c0',
                                            marginVertical: 2.4,
                                            marginHorizontal: 10
                                        }}>19 Aug</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.imageNameCart}>
                                    <Image style={styles.image2} source={require('../assets/25.jpg')} />
                                    <View style={styles.textsContainer}>
                                        <Text style={{
                                            fontWeight: 'normal',
                                            fontSize: 17,
                                            color: 'white',
                                            marginVertical: 2.4,
                                            marginHorizontal: 10
                                        }}>New Arrival</Text>
                                        <Text style={{
                                            fontWeight: '300',
                                            fontSize: 17,
                                            color: 'white',
                                            marginVertical: 2.4,
                                            marginHorizontal: 10
                                        }}>Gandeevadhari Arjuna</Text>
                                        <Text style={{
                                            fontWeight: 'normal',
                                            fontSize: 17,
                                            color: '#c0c0c0',
                                            marginVertical: 2.4,
                                            marginHorizontal: 10
                                        }}>26 Sept</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.alarmNotificationsIconContainer]}>
                                    <View style={styles.alarmNotificationsContainer}>
                                        <View style={[styles.alarmcontainer, {backgroundColor: '#0089E6'}]}>
                                            {/* <FontAwesome name="bell-o" size={24} color="white" /> */}
                                            <Octicons name="download" size={24} color="white" />
                                        </View>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            fontSize: 20,
                                            color: 'white',
                                            alignSelf: 'center',
                                            marginRight: 37,
                                        }}>Downloads</Text>
                                    </View>
                                    <MaterialIcons name="keyboard-arrow-right" style={{ alignSelf: 'center' }} color={'white'} size={38} />
                                </TouchableOpacity>
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

export default ProfileViewComponent

const styles = StyleSheet.create({
    movieOne: {
        // alignItems: 'center',
        // justifyContent: 'center',
        height: 480,
        backgroundColor: 'black'
    },
    imageNameContainer: {
        height: 150,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '80%',
        width: 100,
        borderRadius: 20
    },
    alarmNotificationsIconContainer: {
        height: 55,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    alarmNotificationsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 210,
        backgroundColor: 'black',
    },
    alarmcontainer: {
        width: 50,
        height: 50,
        backgroundColor: '#E50914',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginHorizontal: 10
    },
    imageNameCart: {
        height: 80,
        backgroundColor: 'black',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10
    },
    image2: {
        height: '100%',
        width: '40%',
        borderRadius: 10
    },
    textsContainer: {
        height: '100%',
        width: '60%',
        justifyContent: 'center',
    }
})