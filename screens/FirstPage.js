import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const FirstPage = () => {
    const navigation = useNavigation()

    return (
        <View style={{flex: 1, backgroundColor: '#000'}}>
            <View style={styles.netflix}>
                <Text style={{ color: '#E50914', marginLeft: 128, fontSize: 25 }}>NETFLIX</Text>
                <TouchableOpacity activeOpacity={0.1}>
                    <FontAwesome style name='pencil' color={'white'} size={25} />
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 100 }}>
                <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>Who's Watching?</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Loading')} activeOpacity={0.2}>
                        <Image style={{ width: 120, height: 120, marginHorizontal: 20 }} source={require('../assets/five.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center', marginVertical: 10 }}>Jordan</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('LoadingTwo')} activeOpacity={0.2}>
                        <Image style={{ width: 120, height: 120 }} source={require('../assets/six.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center', marginVertical: 10 }}>Lopez</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('LoadingThree')} activeOpacity={0.2}>
                        <Image style={{ width: 120, height: 120, marginHorizontal: 20 }} source={require('../assets/three.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center', marginVertical: 10 }}>Jiggy Main</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('LoadingFour')} activeOpacity={0.2}>
                        <Image style={{ width: 120, height: 120 }} source={require('../assets/two.jpg')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center', marginVertical: 10 }}>BroGrammer!</Text>
                </View>
            </View>
        </View>
    )
}

export default FirstPage

const styles = StyleSheet.create({
    netflix: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15
    }
})