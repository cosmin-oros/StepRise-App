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

      <View style={styles.statsContainer}>
        <View style={styles.card}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Level</Text>
            <Text style={styles.statValue}>{level}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>XP</Text>
            <Text style={styles.statValue}>{xp}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Challenges Completed</Text>
            <Text style={styles.statValue}>{challengesCompleted}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Water Consumed</Text>
            <Text style={styles.statValue}>{waterConsumed} mL</Text>
          </View>
        </View>
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
  statsContainer: {
    paddingHorizontal: 16
  },
  stat: {
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffffff',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default MainScreen;