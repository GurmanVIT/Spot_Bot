import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { CountryPicker } from "react-native-country-codes-picker";


const Verification = ({ }) => {

    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');

    return (
        <ScrollView style={styles.container} behavior="padding">
            <StatusBar
                backgroundColor="#313864"
            />
            <View style={{ marginHorizontal: 10, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 20, }}>
                    <Text style={styles.inner}>Set up 2-step verification</Text>
                    <Text style={styles.paragraph}>Enter your phone number so we can text you an authentical code</Text>

                    <View style={styles.container}>
                        <TouchableOpacity
                            onPress={() => setShow(true)}
                            style={{
                                width: '20%',
                                height: 60,
                                backgroundColor: 'black',
                                padding: 10,
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontSize: 20
                            }}>
                                {countryCode}
                            </Text>
                        </TouchableOpacity>

                        <CountryPicker
                            show={show}
                            pickerButtonOnPress={(item) => {
                                setCountryCode(item.dial_code);
                                setShow(false);
                            }}
                        />
                    </View>
                    <Text style={styles.buttonText} >Continue</Text>
                </View>
            </View>
        </ScrollView >
    );
};

export default Verification;

const styles = StyleSheet.create({
    container: {
        flex: 3,
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
        marginBottom: 25,
        marginTop: 50
    },
});