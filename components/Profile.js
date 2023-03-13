import React, {useState} from "react";
import {View,StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView, ImageBackground} from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function ProfileScreen({navigation}) {

    return (
        <View style={styles.HomeScreen}>
        <Header navigation={navigation}></Header>
        <ScrollView style={styles.scroll} contentContainerStyle={{alignItems:"center"}}>
            <View style={styles.moreblank}></View>
                <View style={styles.bluecontainer}>
                    <ImageBackground style={styles.profilebg} source={require ("../assets/profilepic.png")}>
                        <View style={styles.iconcontainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('Game')}>
                                <Image style={styles.icon3} source={require ("../assets/gameicon.png")}/>
                            </TouchableOpacity>
                            <Image style={styles.icon2} source={require ("../assets/profileicon.png")}/>
                            <TouchableOpacity>
                                <Image style={styles.icon1} source={require ("../assets/settingsimg.png")}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.name}>Christian Slater</Text> 
                        <Text style={styles.undername}>Portsmouth, UK</Text> 
                    </ImageBackground>
                    
                    <View style={styles.yellowstats}>
                        <View style={styles.insideyellow}>
                            <Text style={styles.nb}>52</Text>
                            <Text style={styles.textbehindnb}>Games played</Text>
                        </View>
                        <Image style={styles.separator} source={require ('../assets/separator.png')}></Image>
                        <View style={styles.insideyellow}>
                            <Text style={styles.nb}>6</Text>
                            <Text style={styles.textbehindnb}>Different games</Text>
                        </View>
                        <Image style={styles.separator} source={require ('../assets/separator.png')}></Image>
                        <View style={styles.insideyellow}>
                            <Text style={styles.nb}>20</Text>
                            <Text style={styles.textbehindnb}>Game groups</Text>
                        </View>
                    </View>
                    <Text style={styles.textgame}>FAVORITE GAMES :</Text>
                    <View style={styles.gamescontainer}>
                        <View style={styles.containgames}>
                            <Image style={styles.preferedgame} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1084769964998787152/image.png?width=305&height=285"}}></Image>
                            <Text style={styles.textbehindgames}>Bucket of doom</Text>
                        </View>
                        <Image style={styles.separator2} source={require ('../assets/separator.png')}></Image> 
                        <View style={styles.containgames}>
                            <Image style={styles.preferedgame} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1084769994031767612/image.png?width=302&height=310"}}></Image>
                            <Text style={styles.textbehindgames}>Cash n Guns</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textbellowQRCODE}>Find a group/friends :</Text>
                </View>
                <Image style={styles.qrcode} source={require ('../assets/QrCode.png')}></Image>
                <View style={styles.separatorbottom}></View>
                <View style={styles.textcontainer}>
                    <Text style={styles.textbellowQRCODE}>My wishlist :</Text>
                </View>
                <View style={styles.textcontainer2}>
                    <Text style={styles.textbellowQRCODE2}>You Didn't add games in your wishlist yet. do it now !</Text>
                </View>

                <TouchableOpacity style={styles.textcontainer3}>
                    <Text onPress={() => navigation.navigate('Game')} style={styles.textbellowQRCODE2}>Add games</Text>
                </TouchableOpacity>
            
            <View style={styles.moreblankfooter}></View>
        </ScrollView>

        <Footer navigation={navigation}></Footer>
        </View>
    )
}



const styles=StyleSheet.create( {
    separatorbottom:{
        width:"100%",
        borderBottomWidth:1,
        height:15,
    },
    bellowtextcontainer: {
        height:60,
        display:"flex",
        justifyContent:"center",
    },
    qrcode:{
        width:"70%",
        height:190,
        marginLeft:"9%",
    },
    textcontainer:{
        width:"100%",
        marginTop:37,
        marginBottom:28,
        height:20,
    },
    textcontainer2:{
        width:"100%",
        marginTop:37,
        marginBottom:28,
        height:50,
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
    },
    textcontainer3:{
        width:"68%",
        borderRadius:30,
        borderWidth:2,
        marginTop:37,
        marginBottom:28,
        height:60,
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
    },
    textbellowQRCODE:{
        fontFamily:"Liberator",
        fontSize:22,
        position:"absolute",
        left:20,
    },
    textbellowQRCODE2:{
        fontFamily:"Liberator",
        fontSize:22,
        textAlign:"center",
        
    },
    textbehindgames:{
        fontFamily:'Liberator'
    },
    separator2:{
        height:70,
        width:1.4,
        marginLeft:4,
    },
    containgames:{
        width:"49%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    preferedgame:{
        width:"100%",
        height:100,
        resizeMode:"contain"
    },
    gamescontainer:{
        position:"absolute",
        bottom:26,
        width:"83%",
        borderRadius:20,
        height:140,
        backgroundColor:"#889cac",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
        
    },
    textgame:{
        fontSize:23,
        position:'absolute',
        bottom:185,
        fontFamily:"Liberator",
        color:"white",
        left:23,
    },
    name:{
        marginTop:30,
        fontFamily:"Liberator",
        color:"white",
        fontSize:20
    },
    undername:{
        fontFamily:"Liberator",
        color:"white",
        marginTop:10,
        fontSize:17
    },
    icon2:{
        height:83,
        width:83
    },
    icon1:{
        height:41,
        width:41,
    },
    icon3:{
        height:21,
        width:40,
        marginRight:3,
    },
    iconcontainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width:"70%",
        justifyContent:"space-evenly",
        
    },
    separator:{
        height:"60%"
    },
    insideyellow:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"33%"
    },
    textbehindnb:{
        color:"#000000",
        textAlign:"center",
        fontWeight:"800",
        fontSize:11,
        opacity:0.3,
    },
    nb:{
        fontWeight:"700"
        ,fontSize:17
        ,textAlign:"center"
    },
    profilebg:{
        width:"100%",
        height:259,
        resizeMode:"cover",
        zIndex:2,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    yellowstats:{
        width:"75%",
        height:64,
        borderRadius:14,
        zIndex:3,
        top:230,
        backgroundColor:"#E9BD1F",
        position:"absolute",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    whitecontainer:{
        width:"100%",
        height:153,
        backgroundColor:"white",
        position:"absolute",
        bottom:0
        ,borderTopRightRadius:50
        ,borderTopLeftRadius:50,
        display:"flex",
        alignItems:"center",
        paddingTop:152,
    },
    imageContainer:{
        marginTop:0,
        height:700,
        width:"100%",
        display:"flex",
        alignItems:"center"
    },
    
    moreblankfooter:{
        height:100
      },
    moreblank:{height:130},
   
    bluecontainer:{
    marginTop:20,
    backgroundColor:"#062C49",
    height:520,
    width:"100%",
    borderRadius:43,
    display:"flex",
    alignItems:"center"
    },
    scroll:{
        width:"100%",
        backgroundColor:"white",
    },
    HomeScreen: {
        flex: 1,
         alignItems: 'center',
        backgroundColor:"white",
      },
})

export default ProfileScreen