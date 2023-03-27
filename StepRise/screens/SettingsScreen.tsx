import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type SettingsScreenProps = {
    navigation: NavigationProp<ParamListBase, 'SettingsScreen'>;
}

const SettingsScreen = ({ navigation } : SettingsScreenProps) => {
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;