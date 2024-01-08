import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import Vector from '../../src/svg/Vector';
import BackImg from '../../src/svg/BackImg';


const WelcomeScreen = ({ navigation }) => {

    return (
        <ScrollView style={styles.container} behavior="padding">
            <View style={{ marginTop: 20 }}>
                <BackImg onPress={() => { navigation.navigate("Back") }}
                />
            </View>
            <StatusBar
                backgroundColor="#313864"
            />
            <View style={{ marginHorizontal: 10, }}>
                <View style={{ marginTop: 70, marginBottom: 40, alignItems: 'center' }} >
                    <Vector />
                </View>
                <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 20, }}>
                    <Text style={styles.inner}>Login or Sign Up</Text>
                    <Text style={styles.paragraph}>Login or create an account to take quiz, take part in challange and more.</Text>

                    <Text style={styles.buttonText} onPress={() => { navigation.navigate("LogIn") }}>Login</Text>

                    <Text style={styles.createbutton} onPress={() => { navigation.navigate("SignUp") }}>Create an account</Text>
                    <Text style={{ textAlign: 'center', marginVertical: 10, fontSize: 16 }}>Later</Text>
                </View>
            </View>
        </ScrollView >
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#313864',
        fontFamily: 'Roboto',
    },
    inner: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 23,
        textAlign: 'center',
        paddingBottom: 10,
        marginTop: 20,
    },
    paragraph: {
        textAlign: 'center',
        marginBottom: 30,
        color: '#858494'
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#1AB0E6',
        padding: 17,
        textAlign: 'center',
        borderRadius: 2,
        borderRadius: 15,
        marginBottom: 25
    },

    createbutton: {
        color: '#313864',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#E6E6E6',
        padding: 17,
        textAlign: 'center',
        borderRadius: 2,
        borderRadius: 15,
        marginBottom: 25
    },
});