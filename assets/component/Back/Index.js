import React from 'react';
import { View, Text } from 'react-native';

const Back = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("LogIn") }}>LogIn</Text>
            <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }} onPress={() => { navigation.navigate("SignUp") }}>SignUp</Text>
        </View>
    )
}

export default Back;
