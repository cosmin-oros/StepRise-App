import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SettingsScreen from './SettingsScreen';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  steps: number;
  level: number;
  xp: number;
  challengesCompleted: number;
  waterConsumed: number;
  navigation: any;
}

type MainScreenProps = {
  navigation: NavigationProp<ParamListBase, 'MainScreen'>;
}

const MainScreen = ({ navigation } : MainScreenProps) => {
  const [steps, setSteps] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [xp, setXP] = useState<number>(0);
  const [challengesCompleted, setChallengesCompleted] = useState<number>(0);
  const [waterConsumed, setWaterConsumed] = useState<number>(0);

  useEffect(() => {
    const now: any = new Date();
    const tomorrow: any = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeToReset = tomorrow - now;

    const timeoutId = setTimeout(() => {
      setWaterConsumed(0);
    }, timeToReset);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [waterConsumed]);

  const handleDrinkWater = (amount: number) => {
    setWaterConsumed(waterConsumed + amount);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftIcon}>
          <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
            <MaterialIcons name="account-circle" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.rightIcon}>
          <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
            <MaterialIcons name="settings" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>StepRise</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Steps</Text>
        <Text style={styles.cardValue}>{steps}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Level</Text>
        <Text style={styles.cardValue}>{level}</Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('ChallengesScreen')}>
          <Text style={styles.cardTitle}>Challenges</Text>
        </TouchableOpacity>
        <Text style={styles.cardValue}>{challengesCompleted}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Water</Text>
        <Text style={styles.cardValue}>{waterConsumed} mL</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleDrinkWater(100)}>
            <Text style={styles.cardAddition}>+100ml</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrinkWater(250)}>
            <Text style={styles.cardAddition}>+250ml</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrinkWater(500)}>
            <Text style={styles.cardAddition}>+500ml</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrinkWater(1000)}>
            <Text style={styles.cardAddition}>+1000ml</Text>
          </TouchableOpacity>
        </View>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    textShadowColor: '#ffffff',
    textShadowRadius: 10.0,
    color: '#ffffff',
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
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },
  cardAddition: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 64,
    paddingHorizontal: 16,
    position: 'relative',
  },
  leftIcon: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;