import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorProfileScreen from '../screens/DoctorProfile';
import ChatScreen from '../screens/ChatScreen';
import { Doctor } from '../types';
import DoctorListScreen from '../screens/DoctorList';
export type RootStackParamList = {
  DoctorList: undefined;
  DoctorProfile: { doctorId: string };
  Chat: { doctor: Doctor };
};
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DoctorList">
        <Stack.Screen name="DoctorList" component={DoctorListScreen} options={{ title: 'Doctors' }} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} options={{ title: 'Profile' }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
