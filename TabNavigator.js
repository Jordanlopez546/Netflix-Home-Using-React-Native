// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons'
import GamesScreen from './screens/GamesScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'black',

            },
            tabBarActiveTintColor: 'white',
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                }
                else if (route.name === 'Games') {
                    iconName = focused ? 'game-controller' : 'game-controller-outline';
                }
                else if (route.name === 'Home3') {
                    iconName = focused ? 'ios-videocam' : 'ios-videocam-outline';
                }
                else if (route.name === 'Home4') {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                }
                return <Ionicons name={iconName} size={focused ? 30 : size} color={color} />
            }
        })} >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Games" component={GamesScreen} />
            <Tab.Screen name="Home3" component={HomeScreen} />
            <Tab.Screen name="Home4" component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator;
