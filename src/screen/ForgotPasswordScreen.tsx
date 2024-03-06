import React, { useState, useMemo, FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import { COLORS } from "../utils/Colors";

const ForgotPasswordScreen: FC = (props) => {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>

            <Text >passowrd</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

});

export default ForgotPasswordScreen;
