import { StyleSheet, Text, View, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {
    const [displayText, setDisplayText] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const name = 'NETFLIX';
        let index = 0;
        let animationInterval;

        const startAnimation = () => {
            animationInterval = setInterval(() => {
                setDisplayText((prevText) => prevText + name[index]);
                index++;

                if (index === name.length) {
                    clearInterval(animationInterval);
                    setTimeout(() => {
                        navigation.navigate('First');
                    }, 500);
                }
            }, 130); // Smaller interval for smoother animation
        };

        startAnimation();

        const handleBackButton = () => {
            BackHandler.exitApp(); // Exit the app when the back button is pressed

            return true; // Prevent default back action
        };

        // Add a listener for the Android back button
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => {
            clearInterval(animationInterval);
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.textNetflix}>{displayText}</Text>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textNetflix: {
        color: '#E50914',
        fontWeight: 'bold',
        fontSize: 60,
    },
});
