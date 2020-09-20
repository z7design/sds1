import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, 
  Play_400Regular,
  Play_700Bold
} from '@expo-google-fonts/play';
import Header from './src/components/Header';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }else{
    return (
      <View style={styles.container}>
        <Header />
       <Routes />
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 
  }
});
