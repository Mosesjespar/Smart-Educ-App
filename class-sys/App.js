import React from 'react'
import Welcome from './screens/Welcome'
import {StudentLogin} from './screens/Login';
import StudentOpts from './screens/StudentOpts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentSignUp from './screens/StudentSignUp'
import TeacherOpts from './screens/TeacherOpts';
import TeacherSignUp from './screens/TeacherSignUp';

const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />

        <Stack.Screen name='studentopts' component={StudentOpts} options={{ headerShown: false }} />

        <Stack.Screen name='studentSignUp' component={StudentSignUp} options={{ headerShown: false }} />

        <Stack.Screen name='teacheropts' component={TeacherOpts} options={{ headerShown: false }} />

        <Stack.Screen name='studentlogin' component={StudentLogin} options={{ headerShown: false }} />

        <Stack.Screen name='teacherSignUp' component={TeacherSignUp} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

