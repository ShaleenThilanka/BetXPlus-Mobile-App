import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator<RootStackParamList>();
export type AppStackNavigationParamList = {
    Splashscreen:undefined;
    LoginScreen:undefined;
    SignUpScreen: undefined;
    ForgetCredentialsScreen:undefined;
    ForgotPasswordScreen:undefined;
    ForgotUsernameScreen:undefined;
  };

export type HomeScreenNavigationProp = createStackNavigator<AppStackNavigationParamList,
Splashscreen,
LogingScren,
SignUpScreen,
ForgetCredentialsScreen,
ForgotPasswordScreen,
ForgotUsernameScreen
>