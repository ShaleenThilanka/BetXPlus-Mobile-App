import React, { FC, useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";
import { HomeScreenNavigationProp } from "../../type";
interface Country {
    code: string;
    flag: any;
}

interface Props {
    route: { params: { callingCode: string } };
}

const countries: Country[] = [
    { code: "+1", flag: require('../asstes/us.jpeg') },
    { code: "+44", flag: require('../asstes/f.jpeg') },
    { code: "+46", flag: require('../asstes/f.jpeg') },
    { code: "+94", flag: require('../asstes/lk.png') },
];

const SignUpScreen: FC = (props, { route }) => {

    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleLogin = () => {
        navigation.navigate('LoginScreen');
    };
    const [selectedCountryCode, setSelectedCountryCode] = useState<any | undefined>(undefined)
    const [selectedFlag, setSelectedFlag] = useState<any | undefined>(undefined);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (input: string) => {
        setPhoneNumber(input);
    };
    const handleCode = (input: string) => {
        setSelectedCountryCode(input);
    };

    const handleCreateAccount = () => {
        console.log("Create Account clicked");
    };

    useEffect(() => {
        const retrieveCallingCode = async () => {
            try {
                const value = await AsyncStorage.getItem('callingCode');
                if (value !== null) {
                    setSelectedCountryCode(value);
                    const filteredCountries = countries.filter(country => country.code === value);
                    if (filteredCountries.length === 1) {
                        setSelectedFlag(filteredCountries[0].flag);
                    }
                }
            } catch (error) {
                console.error("Error retrieving calling code from AsyncStorage:", error);
            }
        };

        retrieveCallingCode();
    }, []);



    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <ImageBackground
                style={styles.image}
                source={require('../../src/asstes/s.jpg')}
                resizeMode="cover"
            >
                <View style={styles.topSection} />
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.bottomSection}
                >
                    <Text style={styles.title}>Sign up</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.nameInputContainer}>
                            <TextInput
                                style={[styles.input, styles.firstNameInput]}
                                placeholder="First Name"
                                value={firstName}
                                onChangeText={setFirstName}
                            />
                            <TextInput
                                style={[styles.input, styles.lastNameInput]}
                                placeholder="Last Name"
                                value={lastName}
                                onChangeText={setLastName}
                            />
                        </View>
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
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                secureTextEntry={!showConfirmPassword}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                            <TouchableOpacity
                                style={styles.passwordToggle}
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                <FontAwesomeIcon name={showConfirmPassword ? 'eye' : 'eye-slash'} size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.phoneNumberContainer}>
                            <View style={styles.countryPickerContainer}>
                                {selectedFlag && (
                                    <Image source={selectedFlag} style={styles.flag} />
                                )}
                                <View style={styles.countryCodeInputContainer}>

                                    <TextInput
                                        style={[styles.countryCodeInput]}

                                        value={selectedCountryCode}
                                        onChangeText={handleCode}
                                        onEndEditing={(value) => {

                                            if (!value) {
                                                setSelectedCountryCode('');
                                                setSelectedFlag(undefined);
                                            } else {
                                                const filteredCountries = countries.filter(country => country.code.includes(selectedCountryCode));
                                                if (filteredCountries.length === 1) {
                                                    setSelectedCountryCode(filteredCountries[0].code);
                                                    setSelectedFlag(filteredCountries[0].flag);
                                                } else {
                                                    setSelectedCountryCode(value);
                                                    setSelectedFlag(undefined);
                                                }
                                            }
                                        }}
                                        keyboardType="phone-pad"
                                    />


                                </View>
                            </View>

                            <TextInput
                                style={[styles.input, styles.phoneNumberInput]}
                                placeholder="Mobile Number"
                                value={phoneNumber}
                                onChangeText={handlePhoneNumberChange}
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.checkboxContainer}>
                            <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkbox}>
                                {isChecked && <FontAwesomeIcon name="check" size={10} color={COLORS.primaryButton} />}
                            </TouchableOpacity>
                            <Text style={styles.checkboxLabel}>By clicking Sign up you agree to our<Text style={{ color: 'blue' }}> Terms & Conditions</Text></Text>
                        </View>
                        <TouchableOpacity
                            onPress={handleCreateAccount}
                            style={[styles.createAccountButton, !isChecked && styles.disabledButton]}
                            disabled={!isChecked}
                        >
                            <Text style={styles.createAccountButtonText}>Create Account</Text>
                        </TouchableOpacity>


                        <Text style={styles.loginText}>Already have an account?
                            <Text onPress={handleLogin} style={{ color: 'blue' }}> Login</Text>
                        </Text>


                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </ScrollView>
    );
};

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
        flex: 6,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: '500'
    },
    nameInputContainer: {
        flexDirection: 'row',
    },
    firstNameInput: {
        flex: 1,
        marginRight: 5,
    },
    lastNameInput: {
        flex: 1,
        marginLeft: 5,
    },
    bottomSection: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 20,
        paddingTop: 20,
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxLabel: {
        flex: 1,
    },
    createAccountButton: {
        height: 50,
        backgroundColor: COLORS.primaryButton,
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
    },
    disabledButton: {
        backgroundColor: 'gray',
    },
    createAccountButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    loginText: {
        top: 10,
        fontSize: 17,
        textAlign: 'center',
        color: 'black',
    },
    phoneNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    flag: {
        width: 40,
        height: 30,
        marginRight: 10,
    },
    countryCode: {
        fontWeight: 'bold',
    },
    countryPickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    countryCodeInputContainer: {
        width: 40,
    },
    countryCodeInput: {
        flex: 1,
        paddingVertical: 0,
    },
    countryPicker: {
        flex: 1,
        color: 'black',
    },
    phoneNumberInput: {
        top: 5,
        flex: 1,
        borderWidth: 0.7,
        justifyContent: 'center',

    },
});

export default SignUpScreen;
