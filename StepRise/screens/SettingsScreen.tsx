import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type SettingsScreenProps = {
    navigation: NavigationProp<ParamListBase, 'SettingsScreen'>;
}

const SettingsScreen = ({ navigation } : SettingsScreenProps) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.appButtonText}>Back</Text>
            </TouchableOpacity>

            
            <View style={styles.section}>
                <Text style={styles.sectionText}>Account</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionText}>Preferences</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionText}>Help</Text>
            </View>
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
    },
    section: {
        backgroundColor: '#2C2C2C',
        width: '100%',
        height: 20
    },
    sectionText: {
        fontWeight: "bold",
        color: 'white', 
        fontSize: 16,
        left: 20
    }
});

export default SettingsScreen;