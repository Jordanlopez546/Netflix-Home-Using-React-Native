// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons'
import GamesScreen from './screens/GamesScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewAndHotScreen from './screens/NewAndHotScreen';

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
                else if (route.name === 'NewAndHot') {
                    iconName = focused ? 'videocam' : 'videocam-outline';
                }
                else if (route.name === 'Profile') {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                }
                return <Ionicons name={iconName} size={focused ? 30 : size} color={color} />
            }
        })} >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Games" component={GamesScreen} />
            <Tab.Screen name="NewAndHot" component={NewAndHotScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator;
