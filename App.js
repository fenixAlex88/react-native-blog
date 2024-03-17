import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from 'react';

import { bootstrap } from './src/bootstrap';
import AppNavigation from './src/navigation/AppNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadApplication() {
      try {
        await bootstrap();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    loadApplication();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <AppNavigation />
  );
}