import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather, MaterialIcons } from '@expo/vector-icons'

const NewAndHotScreen = () => {

    const data = [
        {
            id: '1',
            image: require('../assets/25.jpg'),
            name: 'Coming Soon',
        },
        {
            id: '2',
            image: require('../assets/26.jpg'),
            name: "Everyone's Watching"
        },
        {
            id: '3',
            image: require('../assets/27.jpg'),
            name: "Gaming for Gamers"
        },
        {
            id: '4',
            image: require('../assets/28.jpg'),
            name: "Enjoy yourself!"
        },
        {
            id: '5',
            image: require('../assets/30.jpg'),
            name: "The best TV here!"
        },
    ]


    const data2 = [
        {
            id: '1',
            image: require('../assets/21.jpg'),
            month: 'OCT',
            day: "13",
            when: "Thursday",
        },
        {
            id: '2',
            image: require('../assets/22.jpg'),
            month: 'NOV',
            day: "07",
            when: "Friday",
        },
        {
            id: '3',
            image: require('../assets/23.jpg'),
            month: 'DEC',
            day: "29",
            when: "Saturday",
        },
        {
            id: '4',
            image: require('../assets/24.jpg'),
            month: 'JAN',
            day: "12",
            when: "Sunday",
        },
        {
            id: '5',
            image: require('../assets/25.jpg'),
            month: 'FEB',
            day: "25",
            when: "Monday",
        },
    ]

    const RenderNewHotItems = ({item}) => {
        return (
            <TouchableOpacity style={{ height: 400, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <View style={{ marginVertical: 5 }}>
                    <Text style={{ fontSize: 20, color: '#b0b0b0', marginHorizontal: 5 }}>{item.month}</Text>
                    <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold', marginHorizontal: 10 }}>{item.day}</Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 5, width: 300, height: 230 }}>
                    <Image style={{ width: '100%', height: '100%', marginVertical: 8 }} source={item.image} />
                </View>
                <View style={{ position: 'absolute', width: 300, height: 150, backgroundColor: 'black', bottom: 10, right: 10 }}>
                    <Text style={{ fontSize: 19, color: 'white', fontWeight: 'bold', marginVertical: 7 }}>Coming {item.when}</Text>
                    <Text style={{ fontSize: 15, color: '#b0b0b0', marginBottom: 10 }}>Four teenagers from a rural village in South West Nigeria stumble upon a pouch of uncut diamonds --- but before long, others come looking for the bounty.</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginRight: 10, color: '#c0c0c0' }}>Heartfelt</Text>
                        <Text style={{ marginRight: 10, color: '#c0c0c0' }}>Suspenseful</Text>
                        <Text style={{ marginRight: 10, color: '#c0c0c0' }}>Drama</Text>
                        <Text style={{ marginRight: 10, color: '#c0c0c0' }}>Ensemble</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const RenderItem = ({ item }) => {

        return (
            <TouchableOpacity style={[styles.imageTextComponent]}>
                <Image style={{ width: 30, height: 30, borderRadius: 10, marginLeft: 10 }} source={item.image} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', maxWidth: 350, marginHorizontal: 10 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.newAndHotTextIconContainer}>
                <Text style={styles.newAndHotText}>New & Hot</Text>
                <TouchableOpacity>
                    <Feather name='search' style={{ marginHorizontal: 20 }} color={'white'} size={28} />
                </TouchableOpacity>
            </View>
            <View style={styles.secondView}>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data} keyExtractor={(item, index) => index + item} renderItem={({ item }) => <RenderItem item={item} />} />
            </View>
            <View style={styles.newHotComponentsContainer}>
                <FlatList data={data2} showsVerticalScrollIndicator={false} keyExtractor={(item, index) =>index+item} renderItem={({item}) => <RenderNewHotItems item={item} />} />
            </View>
        </View>
    )
}

export default NewAndHotScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    newAndHotTextIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#000',
        flex: 0.06
    },
    newAndHotText: {
        color: '#fff',
        fontSize: 25,
        marginHorizontal: 20,
        fontWeight: 'bold',
    },
    secondView: {
        backgroundColor: 'black',
        flex: 0.07,
        width: '100%',
        marginBottom: 20
    },
    imageTextComponent: {
        height: '85%',
        backgroundColor: '#c0c0c0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        maxWidth: 550,
        borderRadius: 30,
        marginHorizontal: 10,
        alignSelf: 'flex-end'
    },
    newHotComponentsContainer: {
        flex: 0.87,
        backgroundColor: 'black',
        width: '100%',
    }
})