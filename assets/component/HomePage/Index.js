import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import EllipseTop from '../../src/svg/EllipseTop';
import SettingIcon from '../../src/svg/SettingIcon';
import ReferralImg from '../../src/svg/ReferralImg';

const HomePage = () => {
    return (
        <ScrollView style={styles.container} behavior="padding">
            <StatusBar
                backgroundColor="#313864"
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                <View>
                    <EllipseTop onPress={() => { navigation.goBack() }}
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: '700', color: '#fff' }}>Virtualbot</Text>
                </View>
                <View>
                    <SettingIcon
                    />
                </View>
            </View>
            <View style={{ backgroundColor: '#F59300', padding: 25, marginTop: 20, borderRadius: 20, }}>
                <View>
                    <Text style={{ fontSize: 12, color: '#fff' }}>Refer and Earn</Text>
                    <Text style={{ fontSize: 18, paddingRight: '', color: '#fff', fontWeight: '500' }}>Refer you Friend and Win Cryptocoins</Text>
                    <Button title='Refer Now' style={{ backgroundColor: 'red' }} />
                </View>
                <View>
                    <ReferralImg />
                </View>
            </View>
        </ScrollView >
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#313864',
        fontFamily: 'Roboto',
    },
    Button: {
        color: '#F59300',
        backgroundColor: '#fff',
        marginTop: 15,
    },
})