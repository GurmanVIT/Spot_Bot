import { View, Text, TextInput, StyleSheet, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import BackImg from '../../src/svg/BackImg';
import LoginIcon from '../../src/svg/LoginIcon';
import Neom from '../../src/svg/Neom';



const Forgot = ({ navigation }) => {

    const [email, setEmail] = useState('');

    return (
        <ScrollView style={styles.container} behavior="padding">
            <StatusBar
                backgroundColor="#FDD329"
            />
            <View>
                <View style={{ marginTop: 20 }} >
                    <BackImg onPress={() => { navigation.goBack() }}
                    />
                </View>

                <View style={{ marginVertical: 90, alignItems: 'center' }}>
                    <Neom
                    />
                </View>

                <View>
                    <Text style={styles.inner}>FORGOT PASSWORD</Text>

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

                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </View>
                </View>
            </View>
        </ScrollView >
    );
};

export default Forgot;

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
    button: {
        backgroundColor: '#2248F4',
        height: 55,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 100
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});