import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet,Image, TouchableOpacity } from 'react-native';

const images = [
  {
    id: 1,
    uri: 'https://media.discordapp.net/attachments/798264990850482187/1079833468843868161/image.png',
    title: 'Menu',
    subtitle: 'Drinks and food',
    navigate: "Book"
  },
  {
    id: 2,
    uri: 'https://media.discordapp.net/attachments/798264990850482187/1080155361400598548/booking.jpg?width=1005&height=670',
    title: 'Booking',
    subtitle: 'Find a table',
    navigate: "Book"
  },
  {
    id: 3,
    uri: 'https://media.discordapp.net/attachments/798264990850482187/1080155394489462874/games.jpg?width=1175&height=671',
    title: 'Games',
    subtitle: 'Browse the catalog',
    navigate: "Book"
  },
];

const Slider = (props) => {

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        
        showsHorizontalScrollIndicator={false}
      >
        {images.map((image) => (
          <View key={image.id} style={styles.slide}>
            <Image source={{ uri: image.uri }} style={styles.image} />
            <View style={styles.containercarousel}>
              <Text style={styles.title}>{image.title}</Text>
              <Text style={styles.subtitle}>{image.subtitle}</Text>
              <TouchableOpacity onPress={() => props.navigation.navigate(image.navigate)} style={styles.openbutton}>
                <Text style={styles.textopenbutton}>
                  Open
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#062C49',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    height: 400,
  },
  slide: {
    width: 270,
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
    width: 250,
    height: 220,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
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

export default Slider;