import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from "react";
import {View, ScrollView, StyleSheet, Text, Alert, TouchableOpacity, Image, TextInput, Linking} from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkbox from 'expo-checkbox';
import * as Font from 'expo-font';
import Slider from './components/Slider';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import ReviewScreen from './components/Reviews';
import BookScreen from "./components/Book"

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Liberator': require('./assets/fonts/Liberator.ttf'),
      
    });

    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    loadFonts();
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reviews" component={ReviewScreen} />
        <Stack.Screen name="Book" component={BookScreen} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;