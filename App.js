import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './assets/component/WelcomeScreen/Index';
import LogIn from './assets/component/LogIn/Index';
import SignUp from './assets/component/SignUp/Index';
import Verification from './assets/component/Verification/Index';
import EnterCode from './assets/component/Verification/EnterCode';
import Back from './assets/component/Back/Index';
import HomePage from './assets/component/HomePage/Index';
import Forgot from './assets/component/Forgot/Index';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        {/* <Stack.Screen name="Verification" component={Verification} /> */}
        <Stack.Screen name="Forgot" component={Forgot} />
        {/* <Stack.Screen name="Back" component={Back} /> */}
        {/* <Stack.Screen name="EnterCode" component={EnterCode} /> */}
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;