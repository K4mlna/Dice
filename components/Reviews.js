import React, {useState} from "react";
import {View,StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function ReviewScreen({navigation}) {
    return (
        <View style={styles.HomeScreen}>
        <Header navigation={navigation}></Header>
        <ScrollView style={styles.scroll} contentContainerStyle={{alignItems:"center"  }}>
            <View style={styles.moreblank}></View>
            <Image style={styles.imagebeggining} source={require ("../assets/reviews.png")}></Image>
            <View style={styles.precontainer}>
                <View style={styles.bluecontainer}>
                    <Text style={styles.title}>Very good !!</Text>
                    <Text style={styles.undertitle}>I went here with my friends and we had a good afternoon, the food was great !</Text>
                    <View style={styles.stars}>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                    </View>
                    
                </View>
                <Image style={styles.bitmoji} source={require ("../assets/bitmoj1.png")}></Image>
            </View>
            <View style={styles.precontainer}>
                <View style={styles.bluecontainer}>
                    <Text style={styles.title}>Nice</Text>
                    <Text style={styles.undertitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  </Text>
                    <View style={styles.stars}>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                    </View>
                    
                </View>
                <Image style={styles.bitmoji} source={require ("../assets/bitmoj2.png")}></Image>
            </View>
            <View style={styles.precontainer}>
                <View style={styles.bluecontainer}>
                    <Text style={styles.title}>good place</Text>
                    <Text style={styles.undertitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                    <View style={styles.stars}>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star0.png")}></Image>
                    </View>
                    
                </View>
                <Image style={styles.bitmoji} source={require ("../assets/bitmoj3.png")}></Image>
            </View>
            <View style={styles.precontainer}>
                <View style={styles.bluecontainer}>
                    <Text style={styles.title}>Food was great</Text>
                    <Text style={styles.undertitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                    <View style={styles.stars}>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star1.png")}></Image>
                        <Image style={styles.star} source={require ("../assets/star0.png")}></Image>
                    </View>
                    
                </View>
                <Image style={styles.bitmoji} source={require ("../assets/bitmoj4.png")}></Image>
            </View>
            <View style={styles.moreblankfooter}></View>
        </ScrollView>

        <Footer navigation={navigation}></Footer>
        </View>
    )
}

const styles=StyleSheet.create( {
    moreblankfooter:{
        height:100
      },
    bitmoji:{
        position:"absolute",
        top:24,
        right:0,
        height:70,
        width:70,
    },
    moreblank:{height:130},
    stars:{
        position:"absolute",
        bottom:10,
        width:300,
        height:20,
        left:10,
        display:"flex"  ,
        flexDirection:"row"
    },
    star:{
        height:20,
        width:20,
    },
    title:{
        fontFamily:"Liberator",
        color:"#E9BD1F",
        fontSize:20,
        marginBottom:5
    },
    undertitle:{
        fontWeight:"900",
        color:"white",
        fontSize:15,
        width:"85%",
        textAlign:"justify"
    },
    precontainer:{
        display:"flex",
        alignItems:"center",
        height:115,
        width:"100%",
        marginBottom:25
    },
    bluecontainer:{backgroundColor:"#062C49",
    height:"100%",
    width:"90%",
    borderRadius:17,
    paddingLeft:15,
    paddingTop:15
    },
    imagebeggining:{
        width:"100%",
        height:225,
        resizeMode:"contain",
        marginBottom:40
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

export default ReviewScreen