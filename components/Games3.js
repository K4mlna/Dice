import React, {useState} from "react";
import {View,StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Slider3 from "./slider3";
import Slider4 from "./slider4";

function GameScreen3({navigation}) {

    const [isTrue, setisTrue] = useState(false);
    const [buttonStyle, setButtonStyle] = useState(styles.greysquare);

    const handlePress = () => {
        if(isTrue == false) {
            setButtonStyle(styles.yellowsquare);
            setisTrue(true)
        }
        if(isTrue == true) {
            setButtonStyle(styles.greysquare);
            setisTrue(false)
        }
    };

    return (
        <View style={styles.HomeScreen}>
        <Header navigation={navigation}></Header>
        <ScrollView style={styles.scroll} contentContainerStyle={{alignItems:"center"  }}>
            <View style={styles.moreblank}></View>
            <Image style={styles.imagebeggining} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1084769994031767612/image.png?width=302&height=310"}}></Image>
            <View style={styles.bottomseparator}></View>
            <View style={styles.textdifcontainer}>
                <Text style={styles.blacktxt}>Dice</Text>
                <Text style={styles.yellowtxt}>Game</Text>
            </View>
            <View style={styles.textdifcontainer}>
                <Text style={styles.blacktxt2}>cash n guns</Text>
            </View>
            <View style={styles.textdifcontainer2}>
                <Text style={styles.greentxt3}>recommended at 80%.</Text>
                <Text style={styles.blacktxt3}>2005</Text>
                <View style={styles.roundyellow}>
                    <Text style={styles.blacktxt3}>13+</Text>
                </View>
                
            </View>
            <View style={styles.textdifcontainer2}>
                <Text style={styles.txtbehingreen}>4-8 players</Text>
                <Text style={styles.txtbehingreen}>30 min</Text>
                <TouchableOpacity onPress={() => handlePress()} style={buttonStyle}>
                    <Image style={styles.star} source={require ("../assets/staricon.png")}></Image>
                    <Image style={styles.separator} source={require ("../assets/separatormini.png")}></Image>
                    <Text style={styles.txtbehindgreen2}>250</Text>
                </TouchableOpacity>
                
            </View>
            <Text style={styles.txtbehingreen2}>In an abandoned warehouse a gangster band is splitting its loot, but they can't agree on the split! It's time to let the guns talk and soon everyone is aiming at everyone. The richest surviving gangster wins the game!
Ca$h 'n Guns helps you relive the best scenes of your favorite gangster movies. The goal is to have more money than anyone else after eight rounds while still being alive.</Text>
            <View style={styles.textdifcontainer3}>
                <Text style={styles.blacktxt}></Text>
                <Text style={styles.yellowtxt}>Rules :</Text>
            </View>
            <Slider3></Slider3>
            <View style={styles.textdifcontainer3}>
                <TouchableOpacity style={styles.centericons}>
                    <Image style={styles.star2} source={require ("../assets/star2.png")}></Image>
                    <Text style={styles.textbehindgreen3}>My list</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.centericons}>
                    <Image style={styles.star2} source={require ("../assets/thumbicon.png")}></Image>
                    <Text style={styles.textbehindgreen3}>Evaluate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.centericons}>
                    <Image style={styles.star2} source={require ("../assets/papericon.png")}></Image>
                    <Text style={styles.textbehindgreen3}>Share</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.littleblank}></View>
            <View style={styles.bottomseparator}></View>
            <Text style={styles.blacktxt4}>Similar games</Text>
            <Slider4></Slider4>
            <View style={styles.moreblankfooter}></View>
        </ScrollView>
        <Footer navigation={navigation}></Footer>
        </View>
    )
}

const styles=StyleSheet.create( {
    littleblank:{height:39},
    centericons:{
        alignItems:"center",
        marginLeft:"8%",
        marginTop:10,
    },
    star2:{
        width:33,
        height:33,
    },
    separator:{
        height:'50%',
        width:2,
    },
    star:{
        width:20,
        height:20,
    },
    txtbehindgreen2:{
        fontWeight:"900",
    },
    textbehindgreen3:{
        color:"#ABA6A6",
        fontWeight:"900",
        fontSize:20,
    },
    greysquare:{    
        width:70,
        backgroundColor:"#D9D9D9",
        height:27,
        borderRadius:8,
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
    },
    yellowsquare:{    
        width:70,
        backgroundColor:"#E9BD1F",
        height:27,
        borderRadius:8,
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
    },
    txtbehingreen:{
        fontSize:20,
        fontWeight:"900",
        textAlign:"center"
    },
    txtbehingreen2:{
        fontSize:20,
        fontWeight:"900",
        textAlign:"center",
        width:"91%"
    },
    roundyellow:{
        width:40,
        height:40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:6,
        paddingLeft:2.4,
        borderRadius:40,
        backgroundColor:"#E9BD1F",
        marginTop:7,
    },
    textdifcontainer:{
        display:"flex",
        flexDirection:"row",
        height:45,
        width:"100%",
    },
    textdifcontainer3:{
        display:"flex",
        flexDirection:"row",
        height:45,
        marginTop:20,
        width:"100%",
        
    },
    textdifcontainer2:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        height:30,
        width:"90%",
        marginTop:10,
        marginBottom:20,
    },
    blacktxt:{
        fontFamily:"Liberator",
        fontSize:30,
        marginLeft:24,
    },
    blacktxt4:{
        fontFamily:"Liberator",
        fontSize:30,
        marginBottom:24,
    },
    
    blacktxt2:{
        fontFamily:"Liberator",
        fontSize:20,
        marginLeft:27,
        marginTop:15,
    },
    blacktxt3:{
        fontFamily:"Liberator",
        fontSize:20,
        
        marginTop:10,
    },
    greentxt3:{
        fontFamily:"Liberator",
        fontSize:20,
        color:"#32C925",
        marginTop:10,
    },
    yellowtxt:{
        fontFamily:"Liberator",
        fontSize:30,
        color:"#E9BD1F"
    },
    bottomseparator:{
        width:"80%",
        marginTop:28,
        borderBottomWidth:1,
        borderColor:"#B9B9B9",
        marginBottom:36,
    },
    moreblankfooter:{
        height:100
      },

    moreblank:{height:130},

    imagebeggining:{
        marginTop:20,
        width:"70%",
        height:285,
        resizeMode:"contain",
    },
    scroll:{
        width:"100%",
        backgroundColor:"white",
    },
    HomeScreen: {
        flex: 1,
         alignItems: 'center',
        backgroundColor:"#white",
    },
})

export default GameScreen3