import React from 'react'
import Welcome from './screens/Welcome'
import SignIn from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './components/DashBoard';
import StudentOpts from './screens/StudentOpts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentSignUp from './screens/StudentSignUp'
import TeacherOpts from './screens/TeacherOpts';
const Stack = createNativeStackNavigator()
export default function App() {
  const opts = {
    headerStyle: {
      backgroundColor: '#020742',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: '#2196F3',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />

        <Stack.Screen name='studentopts' component={StudentOpts} options={{ headerShown: false }} />

        <Stack.Screen name='studentSignUp' component={StudentSignUp} options={{ headerShown: false }} />

        <Stack.Screen name='teacheropts' component={TeacherOpts} options={{ headerShown: false }} />

        <Stack.Screen name='SignIn' component={SignIn} options={{
          title: 'Sign In',
          headerStyle: { backgroundColor: '#020742', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0, }, headerTintColor: '#2196F3',
        }} />

        <Stack.Screen name='SignUp' component={SignUp} options={{
          headerShown: false,
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: '#020742',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#2196F3',
        }}

        />

        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

