import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import MainScreen from './MainScreen';

type ChallengesScreenProps = {
    navigation: NavigationProp<ParamListBase, 'ChallengesScreen'>;
}

const ChallengesScreen = ({ navigation } : ChallengesScreenProps) => {
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
                <Text>Back</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default ChallengesScreen;