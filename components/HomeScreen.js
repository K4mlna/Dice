import Slider from './Slider';
import Slider2 from './Slider2';
import {Linking, View, ScrollView, StyleSheet, Text,TouchableOpacity, Image} from "react-native";
import Header from './Header';
import Footer from './Footer';


function HomeScreen({navigation}) {
    return (
      <View styles={styles.HomeScreen}>
      
        <Header navigation={navigation}/>

        <ScrollView style={styles.scroll} contentContainerStyle={{alignItems:"center"  }}> 
          <View style={styles.moreblank}></View>
          <View style={styles.promo}>
            <Text style ={styles.promotxt1}>MONDAY OFFER</Text>
            <Text style ={styles.promotxt2}> : 1 DRINK BOUGHT, 1 FREE</Text>
          </View>
          
          <Image style={styles.welcomepic} source={require ("../assets/welcome.png")}></Image>

          <Text style={styles.generaltxt}>GENERAL...</Text>
          
          
          <Slider navigation={navigation}/>

          <Text style={styles.generaltxt}>Our Evaluations...</Text>
          
          <Slider2 navigation={navigation}/>

          <Text style={styles.generaltxt}>Where to find us...</Text>
          <View style={styles.container}>
            <View style={styles.bottomcontainer}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps?ll=50.786723,-1.075675&z=16&t=m&hl=en&gl=GB&mapclient=embed&cid=11926128561349779098')} style={styles.buttonPortsmouth}>
                <Text style={styles.buttonPortsmouthtxt}>
                  PORTSMOUTH
                </Text>
              </TouchableOpacity>
              <View style={styles.righttext}>
                <Text style={styles.righttexttxt}>149 Albert Rd, Southsea,</Text>
                <Text style={styles.righttexttxt}>Portsmouth, Southsea PO4 0JW</Text>
              </View>
              
            </View>
            <View style={styles.mapcontainer}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps?ll=50.786723,-1.075675&z=16&t=m&hl=en&gl=GB&mapclient=embed&cid=11926128561349779098')} style={styles.mapbutton}>
                <Image style={styles.map} source={require ("../assets/map.png")}></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps?ll=50.786723,-1.075675&z=16&t=m&hl=en&gl=GB&mapclient=embed&cid=11926128561349779098')} style={styles.arrow} >
              <Image style={styles.arrow} source={require ("../assets/yelloarro.png")}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.moreblankfooter}></View>
          
        </ScrollView>
        <Footer navigation={navigation}/>
      </View>
    );
}

const styles = StyleSheet.create({

  moreblank:{
    height:130
  },
  moreblankfooter:{
    height:100
  },
  arrow:{
    position:"absolute",
    right:10,
    bottom:10,
    width:60,
    height:15
  },

  mapbutton:{
    width:"93%",
    height:250,
  },
  map:{
    width:"100%",
    height:240,
    resizeMode:"contain",
  },
  mapcontainer:{
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },

  righttext:{
    height:40,
    justifyContent:"space-around",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  righttexttxt:{
    color:"#E9BD1F",
    marginTop:7,
    fontWeight:"900"
  },

  buttonPortsmouth:{
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:"white",
    width:87,
    height:50,
    borderRadius:11
  },

  buttonPortsmouthtxt:{
    marginLeft:4,
    fontFamily:"Liberator",
    color:"#E9BD1F"
  },
  bottomcontainer:{
    paddingTop:30,
    width:"100%",
    height:85,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around"


  },

  container: {
    flex: 1,
    backgroundColor: '#062C49',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    height: 360,
    width:"100%",
    
  },

  HomeScreen: {
    flex: 1, alignItems: 'center',
    backgroundColor:"#white",
  },
  scroll:{
    backgroundColor:"white",
  },
  promo:{
    width: "90%",
    height:47,
    backgroundColor:"#DA3C3C",
    borderRadius:10,
    marginTop:3,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  promotxt1:{
    fontFamily:"Liberator",
    color:"white",
    textDecorationLine:"underline"
    ,
    fontSize:18
    
  },
  promotxt2:{
    fontFamily:"Liberator",
    color:"white",
    fontSize:18
  },
  welcomepic:{
    width:"95%",
    height:250,
    resizeMode:"contain",
    marginTop:18
  },
  generaltxt:{
    fontFamily:"Liberator",
    fontSize:22,
    marginTop:15,
    marginBottom:15
  },
});

export default HomeScreen