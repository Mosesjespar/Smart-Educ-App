import React from 'react'
import Welcome from './screens/Welcome'
import SignIn from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './components/DashBoard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />

        <Stack.Screen name='SignIn' component={SignIn} options={{
          title: 'Sign In', headerStyle: {
            backgroundColor: '#020742',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0,
          },
          headerTintColor: '#2196F3',
        }} />

        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

