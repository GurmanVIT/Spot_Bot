import { View, Text, TextInput, StyleSheet, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import BackImg from '../../src/svg/BackImg';
import LoginIcon from '../../src/svg/LoginIcon';
import Password from '../../src/svg/Password';
import Referral from '../../src/svg/Referral';
import CheckBox from '@react-native-community/checkbox';
import Neom from '../../src/svg/Neom';




const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [toggleCheckBox, setToggleCheckBox] = useState(false)


    return (
        <ScrollView style={styles.container} behavior="padding">
            <StatusBar
                backgroundColor="#FDD329"
            />
            <View>
                <View style={{ marginTop: 20 }}>
                    <BackImg onPress={() => { navigation.goBack() }}
                    />
                </View>
                <View style={{ marginVertical: 10, alignItems: 'center' }}>
                    <Neom
                    />
                </View>
                <View>
                    <Text style={styles.inner}>SIGNUP</Text>
                    <View style={styles.inputContainer}>
                        <Text style={{ color: '#2248F4', fontWeight: '600', marginBottom: 8, fontSize: 13 }}>REFERRAL ID</Text>
                        <Referral style={{ color: '#2248F4', position: 'absolute', top: 43, left: 12 }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            placeholder='Referral Id'
                            placeholderTextColor="#000"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={{ color: '#2248F4', fontWeight: '600', marginBottom: 8, fontSize: 13 }}>NAME</Text>
                        <LoginIcon style={{ position: 'absolute', top: 45, left: 12, }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(val) => setEmail(val)}
                            placeholder='Name'
                            placeholderTextColor="#000"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={{ color: '#2248F4', fontWeight: '600', marginBottom: 8, fontSize: 13 }}>EMAIL ADDRESS</Text>
                        <LoginIcon style={{ position: 'absolute', top: 45, left: 12, }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(val) => setEmail(val)}
                            placeholder='Email'
                            placeholderTextColor="#000"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={{ color: '#2248F4', fontWeight: '600', marginBottom: 8, fontSize: 13 }}>Password</Text>
                        <Password style={{ position: 'absolute', top: 40, left: 12 }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={password}
                            onChangeText={(val) => setPassword(val)}
                            placeholder='Password'
                            placeholderTextColor="#000"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={{ color: '#2248F4', fontWeight: '600', marginBottom: 8, fontSize: 13 }}>CONFIRM Password</Text>
                        <Password style={{ position: 'absolute', top: 40, left: 12 }} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={confirmPassword}
                            onChangeText={(val) => setConfirmPassword(val)}
                            placeholder='Confirm Password'
                            placeholderTextColor="#000"
                        />
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.label} onPress={() => { setToggleCheckBox(!toggleCheckBox) }}>By Logging / SigningUp in, you agree to our <Text style={{ fontWeight: "bold", color: '#2248F4' }}>Terms of Services</Text>and<Text style={{ fontWeight: "bold", color: '#2248F4' }}> Privacy Policy</Text> </Text>
                    </View>

                    <Text style={styles.buttonText}>Sign Up</Text>

                    <Text style={{ color: "#2248F4", textAlign: 'center', marginTop: 15, marginBottom: 30 }}>Don'ts have an account?<Text style={{
                        fontWeight: '600', textDecorationLine: 'underline'
                    }} onPress={() => navigation.navigate('LogIn')}> Login</Text></Text>
                </View>
            </View>
        </ScrollView >
    );
};

export default SignUp;

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
        paddingBottom: 10,
    },

    inputContainer: {
        marginBottom: 20,
        position: 'relative'
    },
    input: {
        color: "000",
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#2248F4',
        borderRadius: 10,
        paddingLeft: 40,
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#2248F4',
        padding: 17,
        textAlign: 'center',
        borderRadius: 2,
        borderRadius: 15,
        marginTop: 20
    },
});