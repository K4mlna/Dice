
import {Animated, Text, View,StyleSheet, SafeAreaView, TouchableOpacity, Image} from "react-native";
import React, {useState, useRef} from "react";

const styles = StyleSheet.create({
    header: {
      width: '100%',
      backgroundColor:"white",
      height: 130,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      position:"absolute"
      
    },
    top_navbar:{
      width:"100%",
      height:70,
      marginTop:55,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:'center',
      justifyContent:"space-around"
    },
    search:{
      width:26,
      height:26.18,
      marginRight:7
    },
    logo_container:{
      width:90,
      height: 65
    },
    logo:{
      width: '100%',
      height: '100%',
      zIndex:23
    },
    menuandacc:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      width:90
      ,zIndex:23
    },
    burgermenuhider:{
      backgroundColor:"white",
      width:200,
      height:130,
      position:"absolute",
      right:0,
      top:0,
      zIndex:3
    },
    burgermenu:{
      backgroundColor:"white",
      width:200,
      height:400,
      position:"absolute",
      borderBottomLeftRadius:30,
      right:0,
      top:-419.9,
      alignItems
      :"center",
      borderColor:"black",
      borderWidth:1,
      borderTopWidth:0

    },
    burgerButtons:{
      height:46,
      borderBottomWidth:1,
      backgroundColor:"white",
      borderColor:"black",
      width:"80%",
      alignItems
      :"center",
      justifyContent:"center"
    },
    burgerButtons2:{
      height:46,
      borderBottomWidth:1,
      backgroundColor:"white",
      borderColor:"black",
      width:"80%",
      alignItems
      :"center",
      justifyContent:"center"
    },
    burgerArrowButton:{
      height:20,
      backgroundColor:"white",
      borderColor:"black",
      width:38,
      alignItems
      :"center",
      justifyContent:"center",
      position:"absolute",
      bottom:5,
      right:20
    },
    burgerArrow:{
      height:"100%",
      borderBottomWidth:1,
      backgroundColor:"white",
      borderColor:"black",
      width:"100%",
      alignItems
      :"center",
      justifyContent:"center"
    },
    burgertext:{
      fontFamily:"Liberator"
    },
  });
  
const Header = (props) => {

  const position = useRef(new Animated.Value(0)).current;

  const animate = () => {
    if (animateElement==false){
      Animated.timing(position, {
        toValue: 11,
        duration: 500,
        useNativeDriver: true,
      }).start();
      setanimateElement(!animateElement)
    }
    if (animateElement==true){
      Animated.timing(position, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
      setanimateElement(!animateElement)
    }
  };
  const [animateElement, setanimateElement] = useState(false);
  

    return (
        <SafeAreaView style={styles.header}>
          <View style={styles.top_navbar}>
            <View style={styles.menuandacc}>
              <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} style={styles.search}>
                <Image style={styles.search} source={require ("../assets/search.png")}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.logo_container}>
              <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={styles.logo}>
                <Image style={styles.logo} source={require ("../assets/logo.png")}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.menuandacc}>
              <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} style={styles.search}>
                <Image style={styles.search} source={require ("../assets/user.png")}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                animate()
              }} style={styles.search}>
                <Image style={styles.search} source={require ("../assets/menu.png")}></Image>
              </TouchableOpacity>
            </View>
            
          </View>
        
          <Animated.View style={[styles.burgermenu, { transform: [{ translateY: position.interpolate({ inputRange: [0, 1], outputRange: [0, 50] }) }] }]}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={styles.burgerButtons2}>
              <Text style={styles.burgertext}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Book")} style={styles.burgerButtons}>
              <Text style={styles.burgertext}>Book table</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Game")} style={styles.burgerButtons}>
              <Text style={styles.burgertext}>game catalog</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Food")} style={styles.burgerButtons}>
              <Text style={styles.burgertext}>food drinks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.burgerButtons}>
              <Text onPress={() => props.navigation.navigate("Food")} style={styles.burgertext}>order food</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} style={styles.burgerButtons}>
              <Text style={styles.burgertext}>Find a group</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.burgerButtons}>
              <Text style={styles.burgertext}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} style={styles.burgerButtons}>
              <Text style={styles.burgertext}>account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {animate()}}style={styles.burgerArrowButton}>
              <Image style={styles.burgerArrow} source={require ("../assets/arrowburger.png")}></Image>
            </TouchableOpacity>
          </Animated.View>
          <View style={styles.burgermenuhider}>

          </View>
        </SafeAreaView>
    )

    

}
export default Header