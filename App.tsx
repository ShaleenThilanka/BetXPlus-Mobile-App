import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStackNavigationParamList } from './type';
import Splashscreen from './src/screen/SplashScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import ForgetCredentialsScreen from './src/screen/ForgetCredentialsScreen'; // Import ForgetCredentialsScreen here
import ForgotUsernameScreen from './src/screen/ForgotUsernameScreen';
import ForgotPasswordScreen from './src/screen/ForgotPasswordScreen';

const Stack = createStackNavigator<AppStackNavigationParamList>();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splashscreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ForgetCredentialsScreen" component={ForgetCredentialsScreen} options={{
          headerTitle: 'Forget Credentials', headerTintColor: 'black', headerShown: true, headerStyle: {
            elevation: 5,
            shadowColor: 'gray'
          },
        }} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{
          headerTitle: 'Forgot Password', headerTintColor: 'black', headerShown: true, headerStyle: {
            elevation: 5,
            shadowColor: 'gray'
          },
        }} />
         <Stack.Screen name="ForgotUsernameScreen" component={ForgotUsernameScreen} options={{
          headerTitle: 'Forgot Username', headerTintColor: 'black', headerShown: true, headerStyle: {
            elevation: 5,
            shadowColor: 'gray'
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
