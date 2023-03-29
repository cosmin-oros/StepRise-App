import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import ImagePicker, { ImageLibraryOptions, MediaType } from 'react-native-image-picker';

type AccountScreenProps = {
    navigation: NavigationProp<ParamListBase, 'AccountScreen'>;
}

const AccountScreen = ({ navigation } : AccountScreenProps) => {
    const [profilePicture, setProfilePicture] = useState('');

    const handleChoosePhoto = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo'
        };
        ImagePicker.launchImageLibrary(options, response => {
            // if (response.uri) {
            //     setProfilePicture(response.uri);
            // }
        });
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.appButtonText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleChoosePhoto}>
                {/* {profilePicture ? (
                    
                ) : (
                <View style={styles.profilePicture}>
                    
                </View>
                )} */}
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
    },
    card: {
        backgroundColor: '#2C2C2C',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#ffffff',
    },
    profilePicture: {
        
    },
    placeholder: {

    },
});

export default AccountScreen;