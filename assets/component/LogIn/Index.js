import { View, Text, TextInput, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LoginIcon from '../../src/svg/LoginIcon';
import Password from '../../src/svg/Password';
import Neom from '../../src/svg/Neom';



const LogIn = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <ScrollView style={styles.container} behavior="padding">
            <StatusBar
                backgroundColor="#FDD329"
            />
            <View>
                <View style={{ marginVertical: 70, alignItems: 'center' }}>
                    <Neom
                    />
                </View>
                <View>
                    <Text style={styles.inner}>LOGIN</Text>
                    <View style={styles.inputContainer}>
                        <Text style={{ color: '#2248F4', fontWeight: '600', marginBottom: 8, fontSize: 13 }}>EMAIL ADDRESS</Text>
                        <LoginIcon style={{ position: 'absolute', bottom: 18, left: 12, }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={email}
                            keyboardType="email-address"
                            onChangeText={(val) => setEmail(val)}
                            placeholder='Email'
                            placeholderTextColor="#000"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={{ color: '#2248F4', fontWeight: '600', marginBottom: 8, fontSize: 13 }}>Password</Text>
                        <Password style={{ position: 'absolute', top: 40, left: 12, color: '#2248F4' }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={password}
                            onChangeText={(val) => setPassword(val)}
                            placeholder='Password'
                            secureTextEntry
                            placeholderTextColor="#000"
                        />
                    </View>

                    <Text style={styles.forgot} onPress={() => navigation.navigate("Forgot")}>Forgot Password?</Text>

                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                    <Text style={{ color: "#2248F4", textAlign: 'center', marginTop: 15, marginBottom: 30 }}>Don'ts have an account? <Text style={{ fontWeight: "bold", color: '#2248F4' }} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>  </Text>
                </View>
            </View>
        </ScrollView >
    );
};

export default LogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#FDD329',
        fontFamily: 'Roboto',
    },
    inner: {
        fontWeight: "bold",
        color: '#2248F4',
        fontSize: 27,
        textAlign: 'center',
        paddingBottom: 50,
    },

    inputContainer: {
        marginBottom: 20,
        position: 'relative'
    },
    input: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#2248F4',
        borderRadius: 10,
        paddingLeft: 40,
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    forgot: {
        textAlign: 'right',
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 35,
        color: '#2248F4',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#2248F4',
        height: 55,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 80
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    label: {
        margin: 8,
        color: "#2248F4"
    },
});