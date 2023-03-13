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
import BookScreen from "./components/Book";
import Game from "./components/Game";
import Party from './components/Party';
import Party2 from "./components/Party2"
import FoodScreen from "./components/Food"
import FoodScreen2 from "./components/Food2"
import ProfileScreen from './components/Profile';
import GameScreen3 from './components/Games3';
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
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Party" component={Party} />
        <Stack.Screen name="Party2" component={Party2} />
        <Stack.Screen name="Food" component={FoodScreen} />
        <Stack.Screen name="Food2" component={FoodScreen2} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Game3" component={GameScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;