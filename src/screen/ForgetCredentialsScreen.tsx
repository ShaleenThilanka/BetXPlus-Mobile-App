import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import { COLORS } from "../utils/Colors";
import { HomeScreenNavigationProp } from "../../type";
const ForgetCredentialsScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Forgot Password?',
            value: 'Forgot Password?'
        },
        {
            id: '2',
            label: 'Forgot Username?',
            value: 'Forgot Username?'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState<string>();
    const handleNext = () => {
        if (selectedId === '1') {
            navigation.navigate('ForgotPasswordScreen');
        } else if (selectedId === '2') {
            navigation.navigate('ForgotUsernameScreen');
        }
    };
    return (
        <View style={styles.container}>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={(value: string) => setSelectedId(value)}
                selectedId={selectedId}
                containerStyle={styles.radioButtonContainer}
                labelStyle={{ color: 'black' }}

            />
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
                <MaterialCommunityIcons name="arrow-right" size={24} color="white" style={styles.arrowIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    radioButtonContainer: {
        marginTop: 20,
        marginLeft: 10,
        alignItems: 'flex-start',
    },
    selectedRadioButton: {
        backgroundColor: COLORS.primaryButton,
    },
    nextButton: {
        backgroundColor: COLORS.primaryButton,
        height: 50,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row'
    },
    nextButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    arrowIcon: {
        marginLeft: 5, // adjust as needed
    },
    radioButtonText: {
        marginLeft: 10,
        fontSize: 16,
    },
});

export default ForgetCredentialsScreen;
