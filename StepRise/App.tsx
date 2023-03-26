import MainScreen from './screens/MainScreen';
import SettingsScreen from './screens/SettingsScreen'
import AccountScreen from './screens/AccountScreen';
import ChallengesScreen from './screens/ChallengesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name='SettingsScreen' component={SettingsScreen} options={{headerShown: false}}/>
        <Stack.Screen name='AccountScreen' component={AccountScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ChallengesScreen' component={ChallengesScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
