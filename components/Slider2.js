import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet,Image, TouchableOpacity } from 'react-native';

const images = [
  {
    id: 1,
    uri: 'https://media.discordapp.net/attachments/798264990850482187/1080155327066013736/guys3.PNG',
    title: 'Menu',
    subtitle: 'Drinks and food',
  },
  {
    id: 2,
    uri: 'https://media.discordapp.net/attachments/798264990850482187/1080155326558523462/guys6.PNG',
    title: 'Booking',
    subtitle: 'Find a table',
  },
  {
    id: 3,
    uri: 'https://media.discordapp.net/attachments/798264990850482187/1080155298192433232/guys1.PNG',
    title: 'Games',
    subtitle: 'Browse the catalog',
  },
  {
    id: 4,
    uri: 'https://media.discordapp.net/attachments/798264990850482187/1080155327682576496/guys5.PNG',
    title: 'Games',
    subtitle: 'Browse the catalog',
  },
];

const Slider2 = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.generaltxt}>What they say about us :</Text>
      <ScrollView
        horizontal
        
        showsHorizontalScrollIndicator={false}
      >
        
          
          {images.map((image) => (
            
            <View key={image.id} style={styles.slide}>
              <Image source={{ uri: image.uri }} style={styles.image} />
              <View style={styles.containercarousel}>
                <Text style={styles.title}>THEIR REVIEW</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Reviews")} style={styles.openbutton}>
                  <Image source={require ("../assets/arrow.png")}style={styles.openbutton}  />
                </TouchableOpacity>
              </View>
            </View>
          ))}

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  generaltxt:{
    fontFamily:"Liberator",
    fontSize:25,
    marginTop:35,
    left:30,
    color:"white",
    position:"absolute",
  },
  container: {
    flex: 1,
    backgroundColor: '#062C49',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    height: 360,
  },
  slide: {
    width: 233,
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:16
  },
  title: {
    fontSize: 22,
    fontFamily:"Liberator",
    
  },
  subtitle:{
    fontSize: 17,
    fontWeight:"900"
  },
  image: {
    width: 214,
    height: 170,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    borderWidth:3,
    borderColor:"#E9BD1F"
  },
  containercarousel:{
    height:42,
    width:214,
    backgroundColor:"#E9BD1F",
    borderBottomRightRadius: 33,
    borderBottomLeftRadius: 33,
    paddingTop:10,
    paddingLeft:10
  },
  openbutton:{
    
    width:31.5,
    height:19.,
    position:"absolute",
    right:10,
    top:4.1,
  },
  
});

export default Slider2;