import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { BsChevronRight } from 'react-icons/bs';

const listItems = [
  'PARTY',
  'FAMILY',
  'FANTASY',
  'DICE ROLLING',
  'CARD',
  'CITY BUILDING',
  'ABSTRACT',
  'PUZZLE',
  'DEDUCTION',
  'DICE',
  'BLUFFING',
  'STRATEGY',
  'DEXTERITY',
  'EDUCATIONAL',
  'HORROR',
  'OTHERS',
];

const ListItem = ({ text, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>

  </TouchableOpacity>
);

export default function Game({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <View style={styles.moreblank}></View>
        <Image
          style={styles.imagebeggining}
          source={require('../assets/games.png')}
        ></Image>
        <Text style={styles.genre}>Genre</Text>
        <View style={styles.container}>
          <ListItem
            text={listItems[0]}
            onPress={() => navigation.navigate('Party2')}
          />
          {listItems.slice(1).map((item, index) => (
            <ListItem
              key={index}
              text={item}
              onPress={() => navigation.navigate('Party2')}
            />
          ))}
        </View>
        <View style={styles.moreblankfooter}></View>
      </ScrollView>

      <Footer navigation={navigation}></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  genre: {
    fontSize: 32,
    fontFamily: 'Liberator',
    color: '#E9BD1F',
  },

  moreblankfooter: {
    height: 100,
  },
  moreblank: { height: 130 },

    imagebeggining:{
        width:"100%",
        height:220,
        resizeMode:"contain",
        marginBottom:40
    },
    scroll:{
        width:"100%",
        backgroundColor:"white",
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      bluePage: {
        flex: 1,
        backgroundColor: '#001f3f',
      },
      item: {
        width: 259,
        height: 62,
        backgroundColor: '#001f3f',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
      },
})