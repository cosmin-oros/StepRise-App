import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type AccountScreenProps = {
    navigation: NavigationProp<ParamListBase, 'AccountScreen'>;
}

const AccountScreen = ({ navigation } : AccountScreenProps) => {
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AccountScreen;