import { StyleSheet, View, Image, Text,  TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Party({navigation, source, title, text, bottomtext}) {

  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };


    return (
      <TouchableOpacity onPress={() => navigation.navigate("Game3")} style={styles.card}>
        <Image source={{ uri: source }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity onPress={toggleFavourite}>
                {isFavourite ? (
                  <Icon name="ios-star" size={30} color="#E9BD1F" />
                ) : (
                 <Icon name="ios-star-outline" size={30} />
                )}
            </TouchableOpacity>
          </View>
        <Text style={styles.bottomText}>{bottomtext}</Text>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    card: {
      height: 130,
      width: '90%',
      borderRadius: 10,
      borderWidth: 0,
      borderColor: 'grey',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    image: {
      width: 115,
      height: 115,
      marginRight: 10,
      resizeMode:"contain",
      
    },
    content: {
      flex: 1,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 5,
    },
    text: {
      fontSize: 14,
      marginBottom: 5,
    },
    icon: {
      width: 20,
      height: 20,
    },
    bottomText: {
      fontSize: 12,
      textAlign: 'right',
      marginTop: 90,
    },
  });