import { View, Text, TextInput, StyleSheet, ScrollView, Image, StatusBar, } from 'react-native';
import React, { useState } from 'react';

const LogIn = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView style={styles.container} behavior="padding">
            <StatusBar
                backgroundColor="#12406E"
            />
            <View style={{ marginHorizontal: 10 }}>
                <Text onPress={() => { navigation.navigate("Back") }} style={{ textAlign: 'center', marginTop: 30, marginBottom: 20 }}>
                    <Image
                        source={require('../img/back.png')}
                        style={{ width: 45, height: 45 }}

                    /></Text>
                <Text style={styles.inner}>Sign in to your account</Text>
                <Text style={styles.paragraph}>Plase sign in to enter in app</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(val) => setEmail(val)}
                        placeholder='Email'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(val) => setPassword(val)}
                        placeholder='Password'
                    />
                </View>

                <Text style={styles.forgot} onPress={() => navigation.navigate("Forgot")}>Forgot Password </Text>

                <View style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
                <Text style={styles.upper}> Don't have an account?  <Text style={styles.sign} onPress={() => { navigation.navigate("SignUp") }}> Sign Up</Text></Text>
            </View>
        </ScrollView >
    );
};
export default LogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    inner: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 23,
        textAlign: 'center',
        paddingBottom: 10,
        marginTop: 50,
    },
    paragraph: {
        textAlign: 'center',
        marginBottom: 80,
        color: '#4A5759',
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 55,
        borderWidth: 1,
        borderColor: '#AB9494',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#F5FBFF',
    },
    forgot: {
        textAlign: 'right',
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 35,
        fontSize: 15,
        color: '#4A5759',
    },
    button: {
        backgroundColor: '#549EE8',
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    upper: {
        marginTop: 30,
        textAlign: 'center',
        fontWeight: '600',
        color: '#4A5759',
        fontSize: 15,
    },
    sign: {
        fontWeight: '800',
        color: '#000',
        fontSize: 15,
        fontFamily: ''
    },

});