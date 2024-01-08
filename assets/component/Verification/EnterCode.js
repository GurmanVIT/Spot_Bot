import { View, Text, StyleSheet, ScrollView, StatusBar, TextInput } from 'react-native';
import React, { useState } from 'react';
import BackImg from '../../src/svg/BackImg';


const EnterCode = ({ navigation }) => {

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
                <View style={{ padding: 20, borderRadius: 20, }}>
                    <Text style={styles.inner}>Enter authentication code</Text>
                    <Text style={styles.paragraph}>Enter 4-digit code we just texted to your phone number,<Text style={{ color: "#1AB0E6" }}> +91 9855 6584 991</Text></Text>

                    <View style={styles.code}>
                        <TextInput
                            keyboardType="numeric"
                            maxLength={1}
                            style={styles.input}
                        />
                        <TextInput
                            keyboardType="numeric"
                            maxLength={1}
                            style={styles.input}
                        />
                        <TextInput
                            keyboardType="numeric"
                            maxLength={1}
                            style={styles.input}
                        />
                        <TextInput
                            keyboardType="numeric"
                            maxLength={1}
                            style={styles.input}
                        />
                    </View>

                    <Text style={styles.buttonText}>Continue</Text>
                    <Text style={styles.resendButton} >Resend Code</Text>
                </View>
            </View>
        </ScrollView >
    );
};

export default EnterCode;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: '#313864',
        fontFamily: 'Roboto',
    },
    inner: {
        fontWeight: '400',
        color: '#fff',
        fontSize: 24,
        paddingBottom: 10,
        marginTop: 20,
    },
    paragraph: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 40,
        color: '#8198A5',
        lineHeight: 24,
    },
    code: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        color: '#fff',
        borderWidth: 1,
        borderColor: '#1AB0E6',
        borderRadius: 10,
        width: 50,
        textAlign: 'center'
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
        marginBottom: 20,
        marginTop: 50
    },
    resendButton: {
        color: '#1AB0E6',
        borderColor: '#1AB0E6',
        borderWidth: 1,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#313864',
        padding: 17,
        textAlign: 'center',
        borderRadius: 2,
        borderRadius: 15,
        marginBottom: 25,
    },
});