import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import SettingsScreen from './screens/SettingsScreen'
import AccountScreen from './screens/AccountScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const defaultProps = {
  steps: 0, 
  level: 0, 
  xp: 0, 
  challengesCompleted: 0,
  waterConsumed: 0
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name='MainScreen' component={MainScreen}/>
        <Stack.Screen name='SettingsScreen' component={SettingsScreen}/>
        <Stack.Screen name='AccountScreen' component={AccountScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});