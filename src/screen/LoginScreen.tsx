import React, { FC, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity,ImageBackground,  ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../utils/Colors';
import { useNavigation } from "@react-navigation/core";
import { HomeScreenNavigationProp } from "../../type";

const LoginScreen: FC = (props) => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleSignUp = () => {
        navigation.navigate('SignUpScreen');
    };


    const handleForgotPassword = () => {
        navigation.navigate('ForgetCredentialsScreen');
    };

    const handleLogin = () => {
        console.log("Login clicked");
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    source={require('../../src/asstes/s.jpg')}
                    resizeMode="cover"
                >
                    <View style={styles.topSection} />
                    <View style={styles.bottomSection}>
                        <Text style={styles.title}>Login</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                value={username}
                                onChangeText={setUsername}
                            />
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    secureTextEntry={!showPassword}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity
                                    style={styles.passwordToggle}
                                    onPress={() => setShowPassword(!showPassword)}
                                >
                                    <FontAwesomeIcon name={showPassword ? 'eye' : 'eye-slash'} size={24} color="gray" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
                                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Let’s Earn</Text>
                            </TouchableOpacity>
                            <Text style={styles.signUpText}>Don’t have an account? <Text style={{ color: 'blue' }} onPress={handleSignUp}>Sign up</Text></Text>
                            <View style={styles.decoration}>
                                <View style={styles.line}></View>
                                <View style={styles.circle}></View>
                                <View style={styles.line}></View>
                            </View>
                            <View style={styles.socialLoginContainer}>
                                <TouchableOpacity style={styles.socialLoginButton}>
                                    <FontAwesomeIcon name="facebook" size={25} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.socialLoginButton}>
                                    <FontAwesomeIcon name="google" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.socialLoginButton}>
                                    <FontAwesomeIcon name="twitter" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        flex: 1,
    },
    topSection: {
        flex: 8,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'transparent',
    },
    bottomSection: {
        flex: 1.5,
        backgroundColor: 'white',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: '500'
    },
    inputContainer: {
        marginTop: 20,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.7,
        borderRadius: 2.5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    passwordContainer: {
        position: 'relative',
    },
    passwordToggle: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        marginTop: 10,
    },
    forgotPasswordText: {
        fontSize: 15,
        color: 'black',
    },
    loginButton: {
        height: 50,
        backgroundColor: COLORS.primaryButton,
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'center',
    },
    loginButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    signUpText: {
        fontSize: 17,
        textAlign: 'center',
        color: 'black',
    },
    decoration: {
        top: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 1.2,
        backgroundColor: 'gray',
    },
    circle: {
        width: 6,
        height: 6,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginHorizontal: 5,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 50,
    },
    socialLoginButton: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
