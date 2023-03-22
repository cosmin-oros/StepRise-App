import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  steps: number;
  level: number;
  xp: number;
  challengesCompleted: number;
  waterConsumed: number;
}

const MainScreen: React.FC<Props> = ({ steps, level, xp, challengesCompleted, waterConsumed }) => {
  return (
    <View style={styles.container}>
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
        <Text style={styles.cardTitle}>XP</Text>
        <Text style={styles.cardValue}>{xp}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Challenges</Text>
        <Text style={styles.cardValue}>{challengesCompleted}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Water</Text>
        <Text style={styles.cardValue}>{waterConsumed} mL</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#082438',
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
  }
});

export default MainScreen;