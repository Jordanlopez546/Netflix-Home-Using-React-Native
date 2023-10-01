import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const LoadingScreenThree = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeNavigatorScreen' }],
            });
        }, 1000);
    }, [navigation]);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#000' }}>
            <View style={{ width: 250, height: 250, marginTop: -30, marginVertical: 40 }}>
                <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={require('../assets/three.jpg')} />
            </View>
            <ActivityIndicator size={'100'} style={{ transform: [{ scale: 2 }] }} color="#E50914" />
        </View>
    )
}

export default LoadingScreenThree

const styles = StyleSheet.create({})