import { View, Text, TextInput, StyleSheet, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Back from '../../src/svg/Back';
import SpotBot from '../../src/svg/SpotBot';
import LoginIcon from '../../src/svg/LoginIcon';
import Password from '../../src/svg/Password';
import Referral from '../../src/svg/Referral';



const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    return (
        <ScrollView style={styles.container} behavior="padding">
            <StatusBar
                backgroundColor="#313864"
            />
            <View style={{ marginHorizontal: 10, }}>
                <View style={{ marginTop: 20 }}>
                    <Back onPress={() => { navigation.goBack() }}
                    />
                </View>
                <View style={{ marginTop: 30, marginBottom: 30 }}>
                    <SpotBot
                    />
                </View>
                <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 20, }}>
                    <Text style={styles.inner}>SignUp</Text>
                    <View style={styles.inputContainer}>
                        <Referral style={{ position: 'absolute', top: 23, left: 10, }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            placeholder='Referral Id'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <LoginIcon style={{ position: 'absolute', top: 25, left: 10, }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(val) => setEmail(val)}
                            placeholder='Email'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Password style={{ position: 'absolute', top: 20, left: 10 }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={password}
                            onChangeText={(val) => setPassword(val)}
                            placeholder='Password'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Password style={{ position: 'absolute', top: 20, left: 10 }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={confirmPassword}
                            onChangeText={(val) => setConfirmPassword(val)}
                            placeholder='Confirm Password'
                        />
                    </View>

                    <Text style={styles.buttonText} onPress={() => { navigation.goBack() }}>SignUp</Text>
                </View>
            </View>
        </ScrollView >
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#313864',
        fontFamily: 'Roboto',
    },
    inner: {
        fontWeight: "bold",
        color: '#000',
        fontSize: 22,
        textAlign: 'center',
        paddingBottom: 20,
        marginVertical: 10,
    },

    inputContainer: {
        marginBottom: 20,
        position: 'relative'
    },
    input: {
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#D8D5E1',
        borderRadius: 10,
        paddingLeft: 40,
        fontSize: 16,
        backgroundColor: 'transparent',
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
});