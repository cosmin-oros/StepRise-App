import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type AccountScreenProps = {
    navigation: NavigationProp<ParamListBase, 'AccountScreen'>;
}

const AccountScreen = ({ navigation } : AccountScreenProps) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.appButtonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#082438',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appButtonContainer: {
        backgroundColor: 'transparent', 
        borderWidth: 1, 
        borderColor: 'white', 
        borderRadius: 10, 
        paddingVertical: 10, 
        paddingHorizontal: 20,
        position: 'absolute', 
        top: 20, 
        left: 20
    },
    appButtonText: {
        fontWeight: "bold",
        color: 'white', 
        fontSize: 16
    }
});

export default AccountScreen;