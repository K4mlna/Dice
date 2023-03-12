
import {View,StyleSheet, SafeAreaView, TouchableOpacity, Image} from "react-native";
const styles = StyleSheet.create({
    header: {
      width: '100%',
      backgroundColor:"white",
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      position:"absolute",
      bottom:0
    },
    top_navbar:{
      width:"100%",
      height:70,
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
      width:70,
      height: 47
    },
    logo:{
      width: '100%',
      height: '100%'
    },
    menuandacc:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      width:120
    },
  });
const Footer = (props) => {
    return (
        <SafeAreaView style={styles.header}>
          <View style={styles.top_navbar}>
          <View style={styles.menuandacc}>
              <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={styles.search}>
                <Image style={styles.search} source={require ("../assets/house.png")}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate("Game")} style={styles.search}>
                <Image style={styles.search} source={require ("../assets/game.png")}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.logo_container}>
              <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={styles.logo}>
                <Image style={styles.logo} source={require ("../assets/logo.png")}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.menuandacc}>
              <TouchableOpacity onPress={() => props.navigation.navigate("Food")} style={styles.search}>
                <Image style={styles.search} source={require ("../assets/drinks.png")}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate("Reviews")} style={styles.search}>
                <Image style={styles.search} source={require ("../assets/pen.png")}></Image>
              </TouchableOpacity>
            </View>
            
          </View>
        </SafeAreaView>
    )

    

}
export default Footer