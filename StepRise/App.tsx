import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
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
    <View style={styles.container}>
      <MainScreen navigation={undefined} {...defaultProps}></MainScreen>
      <StatusBar style="auto" />
    </View>
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