// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './screens/FirstPage';
import LoadingScreen from './screens/LoadingScreen';
import TabNavigator from './TabNavigator';
import LoadingScreenTwo from './screens/LoadingScreenTwo';
import LoadingScreenThree from './screens/LoadingScreenThree';
import LoadingScreenFour from './screens/LoadingScreenFour';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="First" component={FirstPage} />
            <Stack.Screen name="Loading" component={LoadingScreen} />
            <Stack.Screen name="LoadingTwo" component={LoadingScreenTwo} />
            <Stack.Screen name="LoadingThree" component={LoadingScreenThree} />
            <Stack.Screen name="LoadingFour" component={LoadingScreenFour} />
            <Stack.Screen name="HomeNavigatorScreen" component={TabNavigator} />
        </Stack.Navigator>
    )
}

export default StackNavigator;
