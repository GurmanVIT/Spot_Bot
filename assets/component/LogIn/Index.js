import { View, Text, TextInput, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Back from '../../src/svg/Back';
import SpotBot from '../../src/svg/SpotBot';
import LoginIcon from '../../src/svg/LoginIcon';
import Google from '../../src/svg/Google';
import Facebook from '../../src/svg/Facebook';
import CheckBox from '@react-native-community/checkbox';
import Password from '../../src/svg/Password';



const LogIn = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <ScrollView style={styles.container} behavior="padding">
            <StatusBar
                backgroundColor="#313864"
            />
            <View style={{ marginHorizontal: 10, }}>
                <View style={{ marginTop: 20 }} >
                    <Back onPress={() => { navigation.goBack() }}
                    />
                </View>
                <View style={{ marginTop: 30, marginBottom: 30 }}>
                    <SpotBot
                    />
                </View>
                <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 20, }}>
                    <Text style={styles.inner}>Login</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.Label}>Email</Text>
                        <LoginIcon style={{ position: 'absolute', bottom: 21, left: 10, }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={email}
                            keyboardType="email-address"
                            onChangeText={(val) => setEmail(val)}
                        // placeholder='Email'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={{ position: 'absolute', top: 25, left: 40, color: '#A9ABA9', fontSize: 16 }}>Password</Text>
                        <Password style={{ position: 'absolute', top: 25, left: 10 }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={password}
                            onChangeText={(val) => setPassword(val)}
                            // placeholder='Password'
                            secureTextEntry
                        />
                    </View>

                    <Text style={styles.forgot} onPress={() => navigation.navigate("Verification")}>Forgot Password?</Text>

                    <View style={styles.button}>
                        <Text style={styles.buttonText} >Login</Text>
                    </View>
                    <Text style={{ textAlign: 'center', marginVertical: 20 }}>Or</Text>
                    <View style={{ justifyContent: 'center', gap: 20, flexDirection: 'row', marginBottom: 30 }}>
                        <TouchableOpacity>
                            <Google />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Facebook />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.label} onPress={() => { setToggleCheckBox(!toggleCheckBox) }}>By Logging / SigninUp in,you agree to our <Text style={{ fontWeight: "bold", color: '#000' }}>Terms of Services</Text> and <Text style={{ fontWeight: "bold", color: '#000' }}>Privacy Policy</Text></Text>
                    </View>
                </View>
            </View>
        </ScrollView >
    );
};

export default LogIn;

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
    Label: {
        position: 'absolute', top: 25, left: 40, color: '#A9ABA9', fontSize: 16
    },
    focusedLabel: {
        display: 'none',
    },
    input: {
        paddingTop: 20,
        paddingBottom: 15,
        borderWidth: 1,
        borderColor: '#D8D5E1',
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
        color: '#4A5759',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#1AB0E6',
        height: 55,
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
});