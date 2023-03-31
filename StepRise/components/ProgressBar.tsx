import React from 'react';
import { View, StyleSheet } from 'react-native';

type ProgressBarProps = {
  total: number;
  actual: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ total, actual }) => {
  const progress = (actual / total) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  progress: {
    height: 10,
    backgroundColor: 'red',
  },
});

export default ProgressBar;