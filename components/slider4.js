import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

const images = [
  {
    id: 1,
    uri: 'https://media.discordapp.net/attachments/798264990850482187/1084946902937784350/image.png?width=360&height=360',
    title: 'Menu',
    subtitle: 'Drinks and food',
    navigate: "Food"
  },
  {
    id: 2,
    uri: 'https://media.discordapp.net/attachments/798264990850482187/1084946925964513300/image.png?width=355&height=365',
    title: 'Booking',
    subtitle: 'Find a table',
    navigate: "Book"
  },
  {
    id: 3,
    uri: 'https://media.discordapp.net/attachments/798264990850482187/1084946975079792651/image.png?width=372&height=372',
    title: 'Games',
    subtitle: 'Browse the catalog',
    navigate: "Game"
  },
];

const Slider4 = (props) => {

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal
        
        showsHorizontalScrollIndicator={false}
      >
        {images.map((image) => (
          <TouchableOpacity onPress={() => Linking.openURL(image.uri)} key={image.id} style={styles.slide}>
            <Image source={{ uri: image.uri }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    height: 200,
  },
  slide: {
    width: 220,
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontFamily:"Liberator",
    
  },
  subtitle:{
    fontSize: 17,
    fontWeight:"900"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:33,
    borderWidth:3,
    borderColor:"#E9BD1F"
  },
  containercarousel:{
    height:100,
    width:250,
    backgroundColor:"#E9BD1F",
    borderBottomRightRadius: 33,
    borderBottomLeftRadius: 33,
    paddingTop:20,
    paddingLeft:10
  },
  openbutton:{
    backgroundColor:"black",
    width:60,
    height:30,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    right:15,
    top:40,
    borderRadius:50
  },
  textopenbutton:{
    color:"white",
    fontFamily:"Liberator",
    marginTop:2,
  },

});

export default Slider4;