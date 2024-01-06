import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './assets/component/WelcomeScreen/Index';
import LogIn from './assets/component/LogIn/Index';
import SignUp from './assets/component/SignUp/Index';
import Back from './assets/src/svg/Back';
import Verification from './assets/component/Verification/Index';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Back" component={Back} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;