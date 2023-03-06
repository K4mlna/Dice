import WebView from 'react-native-webview';
import React, {useState, useRef} from "react";
import {Animated, View,StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function BookScreen({navigation}) {

    const position = useRef(new Animated.Value(0)).current;

    
    const animate = () => {
    
        Animated.timing(position, {
            toValue: 8.3,
            duration: 500,
            useNativeDriver: true,
        }).start();
      
    }

    return (
        <View style={styles.HomeScreen}>
        <Header navigation={navigation}></Header>
        <View style={styles.scroll} contentContainerStyle={{alignItems:"center"  }}>
            <View style={styles.moreblank}></View>
            <Image style={styles.imagebeggining} source={require ("../assets/Book.png")}></Image>
            <View style={styles.precontainer3}>
             <Text style={styles.textppl}>How many are you ?</Text>
            </View>
            <View style={styles.precontainer2}>
            
                <View style={styles.bluecontainer2}>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.touchableppl} onPress={() => {animate()}}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")} ></Image>
                            <Text style={styles.ppltext}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>4</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.containerButton}>
                    <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>8</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerButton}>
                    <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {animate()}} style={styles.touchableppl}>
                            <Image style={styles.ppl}source={require ("../assets/ppl.png")}></Image>
                            <Text style={styles.ppltext}>12</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
            </View>
                   
            <Animated.View style={[styles.preprecontainer, { transform: [{ translateY: position.interpolate({ inputRange: [0, 1], outputRange: [0, 50] }) }] }]}> 
                <View style={styles.precontainer}>
                    
                    <View style={styles.bluecontainer}>
                    <WebView
                        source={{ uri: 'https://calendly.com/tawan-francois-asselain/dice-2-person-table-reservation' }}
                        style={styles.WebView}
                    />
                    </View>
                </View>
            </Animated.View>
        </View>

        <Footer navigation={navigation}></Footer>
        </View>
    )
}

const styles=StyleSheet.create( {
    preprecontainer:{
        top:-690
    },
    ppl:{
        width:20,
        height:30,
        marginRight:5
    },
    ppltext:{
        fontSize:25
    },
    containerButton:{
        width:"90%",
        height:60
        ,display:"flex",
        flexDirection:"row"
,        justifyContent:"center",
        alignItems:"center",
        justifyContent:"space-between"
    },
    touchableppl:{
        backgroundColor:"#E9BD1F",
        height:40,
        borderRadius:6,
        width:"20%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    textppl:{
        fontFamily:"Liberator",fontSize:30
    },
    moreblankfooter:{
        height:63
      },
    
    moreblank:{height:130},

    WebView:{
        height:"100%",
        width:"100%",
      },
    precontainer3:{
        display:"flex",
        alignItems:"center",
        height:25,
        width:"100%",
        marginTop:25,
        
    },
   
    precontainer2:{
        display:"flex",
        alignItems:"center",
        height:199,
        width:"100%",
        marginTop:25,
       
    },
    bluecontainer2:{backgroundColor:"#062C49",
    height:"100%",
    width:"90%",
    borderRadius:17,
    justifyContent:"center",
    alignItems:"center",
    },

    precontainer:{
        display:"flex",
        alignItems:"center",
        height:404,
        width:"100%",
    },
    bluecontainer:{backgroundColor:"#062C49",
    height:"100%",
    width:"100%",
    borderRadius:17,
    },
    imagebeggining:{
        width:"100%",
        height:221,
        resizeMode:"contain",
        zIndex:3
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

export default BookScreen