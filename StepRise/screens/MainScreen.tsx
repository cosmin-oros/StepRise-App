import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProgressBar from '../components/ProgressBar';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
// import PedometerModule from '../react-native-pedometer';

interface Props {
  steps: number;
  level: number;
  xp: number;
  challengesCompleted: number;
  waterConsumed: number;
  navigation: any;
}

type PedometerResult = {
  startDate: Date;
  endDate: Date;
  steps: number;
};

type MainScreenProps = {
  navigation: NavigationProp<ParamListBase, 'MainScreen'>;
}

const maxXPByLevel = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 
  2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200, 4300, 4400, 4500, 4600, 
  4700, 4800, 4900, 5000, 5100, 5200, 5300, 5400, 5500, 5600, 5700, 5800, 5900, 6000, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 6800, 
  6900, 7000, 7100, 7200, 7300, 7400, 7500, 7600, 7700, 7800, 7900, 8000, 8100, 8200, 8300, 8400, 8500, 8600, 8700, 8800, 8900, 9000, 
  9100, 9200, 9300, 9400, 9500, 9600, 9700, 9800, 9900, 10000
];

const MainScreen = ({ navigation } : MainScreenProps) => {
  const [steps, setSteps] = useState<number>(0);
  const [stepsGoal, setStepsGoal] = useState<number>(10000);
  const [level, setLevel] = useState<number>(1);
  const [xpGoal, setXpGoal] = useState<number>(100);
  const [xp, setXP] = useState<number>(0);
  const [challengesCompleted, setChallengesCompleted] = useState<number>(0);
  const [waterConsumed, setWaterConsumed] = useState<number>(0);
  const [waterGoal, setWaterGoal] = useState<number>(2000);

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

  // fix this later
  // counting steps
  // useEffect(() => {
  //   let subscription: { remove: () => void } | undefined;

  //   PedometerModule.isStepCountingAvailable((error: Error | null, isAvailable: boolean | null) => {
  //     if (isAvailable) {
  //       subscription = PedometerModule.subscribeToStepCountUpdates((stepCountData: PedometerResult) => {
  //         setSteps(stepCountData.steps);
  //       });
  //     } else {
  //       console.log('Step counting not available');
  //     }
  //   });

  //   return () => {
  //     if (subscription) {
  //       PedometerModule.unsubscribeFromStepCountUpdates(subscription);
  //     }
  //   };
  // }, []);

  const handleDrinkWater = (amount: number) => {
    if(waterConsumed + amount <= waterGoal) {
      setWaterConsumed(waterConsumed + amount);
    }
  }

  // go to another screen to input the new water goal
  const handleWaterGoal = () => {
    navigation.navigate('AccountScreen')
  }

  const handleLevel = () => {
    for (let i = 1; i < maxXPByLevel.length; i++) {
      if (xp >= maxXPByLevel[i] && level < 100) {
        setLevel(i+1);
        setXpGoal(maxXPByLevel[i+1]);
        break;
      }
    }
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
        <Text style={styles.cardValue}>{steps}/{stepsGoal/1000}K</Text>
      </View>

      {/* when reaching the step goal / water goal for the day increase xp */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Level</Text>
        <Text style={styles.cardValue}>{level}</Text>
        {/* <ProgressBar actual={xp} total={xpGoal}/> */}
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('ChallengesScreen')}>
          <Text style={styles.cardTitle}>Challenges</Text>
        </TouchableOpacity>
        <Text style={styles.cardValue}>{challengesCompleted}/0</Text>
      </View>

      <View style={styles.card}>
        {/* change the background of this card when water goal is met */}
        <Text style={styles.cardTitle}>Water</Text>
        <Text style={styles.cardValue}>{waterConsumed}/{waterGoal} mL</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleDrinkWater(100)}>
            <MaterialIcons name="local-bar" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrinkWater(250)}>
            <MaterialIcons name="local-drink" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrinkWater(500)}>
            <MaterialIcons name="local-drink" size={30} color="#fff" />
            <MaterialIcons name="local-drink" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleWaterGoal()}>
          <MaterialIcons name="update" size={30} color="#fff" />
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