import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import FirstPage from './screens/FirstPage';
import LoadingScreen from './screens/LoadingScreen';
import TabNavigator from './TabNavigator';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StackNavigator/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  netflix: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15
  }
});

export default App;