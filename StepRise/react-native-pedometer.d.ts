import { NativeEventEmitter, NativeModules } from 'react-native';

type PedometerResult = {
  startDate: Date;
  endDate: Date;
  steps: number;
};

type PedometerUpdateCallback = (result: PedometerResult) => void;

type PedometerModule = {
  isAvailable: (callback: (error: Error | null, result: boolean | null) => void) => void;
  isStepCountingAvailable: (callback: (error: Error | null, result: boolean | null) => void) => void;
  getStepCountAsync: (start: Date, end: Date) => Promise<PedometerResult>;
  watchStepCount: (callback: PedometerUpdateCallback) => { remove: () => void };
  subscribeToStepCountUpdates: (callback: PedometerUpdateCallback) => { remove: () => void };
  unsubscribeFromStepCountUpdates: (subscription: { remove: () => void }) => void;
};

const PedometerModule: PedometerModule = NativeModules.Pedometer;

const PedometerEmitter = new NativeEventEmitter(NativeModules.Pedometer);

PedometerModule.subscribeToStepCountUpdates = (callback: PedometerUpdateCallback) => {
  const subscription = PedometerEmitter.addListener('pedometerUpdate', callback);
  return { remove: () => subscription.remove() };
};

PedometerModule.unsubscribeFromStepCountUpdates = (subscription: { remove: () => void }) => {
  subscription.remove();
};

export default PedometerModule;