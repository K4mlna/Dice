import React, {useState} from "react";
import {View,StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function FoodScreen2({navigation}) {

    const [count, setCount] = useState(1);
      
    const handleIncrement = () => {
        setCount(count + 1);
     };
      
     const handleDecrement = () => {
        if (count > 1) {
        setCount(count - 1);
      }
    };
    const price = 6.95*count


    const [isTrue, setisTrue] = useState(false);
    const [buttonStyle, setButtonStyle] = useState(styles.whitecircle);

    const handlePress = () => {
        if(isTrue == false) {
            setButtonStyle(styles.buttonPressed);
            setisTrue(true)
        }
        if(isTrue == true) {
            setButtonStyle(styles.whitecircle);
            setisTrue(false)
        }
    };

    return (
        <View style={styles.HomeScreen}>
        <Header navigation={navigation}></Header>
        <ScrollView style={styles.scroll} contentContainerStyle={{alignItems:"center"  }}>
            <View style={styles.moreblank}></View>
            
            
                <View style={styles.bluecontainer}>
                    <View style={styles.ordercontainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("Food")} style={styles.whitecircle}>
                            <Image style={styles.chevron} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083822279118553088/image.png?width=60&height=60"}}></Image>
                        </TouchableOpacity>
                        <Text style={styles.title}>Order Food</Text>
                        <TouchableOpacity onPress={() => handlePress()} style={buttonStyle}>
                            <Image style={styles.star} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083842678531301437/image.png?width=60&height=60"}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.foodDisplayed} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083843730173329448/image.png?width=635&height=670"}}></Image>
                        <View style={styles.whitecontainer}>
                            <Text style={styles.titlewhite}>REUBEN</Text>
                            <View style={styles.behindtitle}>
                                <View style={styles.texticon3}>
                                    <Image style={styles.icon} source={require ("../assets/chronos.png")}></Image>
                                    <Text style={styles.textOfIcons}>30 min</Text>
                                </View>
                                <View style={styles.texticon}>
                                    <Image style={styles.icon} source={require ("../assets/fire.png")}></Image>
                                    <Text style={styles.textOfIcons}>300 cal</Text>
                                </View>
                                <View style={styles.texticon2}>
                                    <Image style={styles.icon} source={require ("../assets/starry.png")}></Image>
                                    <Text style={styles.textOfIcons}>4,6</Text>
                                </View>
                                
                            </View>

                            <Text style={styles.textOfIcons2}>Pastrami, sauerkraut, emmental, gherkins & russian dressing</Text>
                            
                            <Text style={styles.textOfIcons3}>6.95£</Text>

                            <View style={styles.botbutton}>
                                <View style={styles.botbutton1}>
                                    <TouchableOpacity style={styles.minusplus} onPress={handleDecrement}>
                                        <Text style={styles.textOfIcons4}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textOfIcons4}>{count}</Text>
                                    <TouchableOpacity style={styles.minusplus} onPress={handleIncrement}>
                                        <Text style={styles.textOfIcons4}>+</Text>
                                    </TouchableOpacity>
                                </View> 
                                <TouchableOpacity style={styles.botbutton2}>
                                    <Text style={styles.add}>ADD TO CART</Text>
                                    <Text style={styles.addyellow}>{price.toFixed(2)}£</Text>
                                </TouchableOpacity>
                            </View>
                            
                            
                        </View>
                    </View>
                </View>
           
            
            <View style={styles.moreblankfooter}></View>
        </ScrollView>

        <Footer navigation={navigation}></Footer>
        </View>
    )
}



const styles=StyleSheet.create( {
    buttonPressed:{
        backgroundColor:"#E9BD1F",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:40,
        height:40,
        borderRadius:30,
    },
    minusplus:{
        height:50,
        width:"30%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    add:{
        fontFamily:"Liberator",
        color:"white",
        fontSize:20,
    },
    addyellow:{
        fontFamily:"Liberator",
        color:"#E9BD1F",
        fontSize:20,
    },
    botbutton1:{
        width:"30%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        justifyContent:"space-evenly",
        borderRadius:13,
        height:50,
        backgroundColor:"#D9D9D9"
    },
    botbutton2:{
        width:"60%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        justifyContent:"space-evenly",
        borderRadius:13,
        height:50,
        backgroundColor:"#000000"
    },
    botbutton:{
        position:"absolute",
        bottom:60,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        justifyContent:"space-evenly",
        width:"100%"
    },
    textOfIcons4:{
        fontSize:21,
        fontWeight:"700",
    },
    textOfIcons3:{
        fontSize:21,
        fontWeight:"700",
        position:"absolute",
        bottom:130,
        right:30,
    },
    textOfIcons2:{
        fontSize:21,
        marginTop:50,
        fontWeight:"700",
        textAlign:"center"
    },
    textOfIcons:{
        fontSize:21,
        fontWeight:"700",
        marginLeft:2,
    },
    texticon:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width:120,
        justifyContent:"center"
    },
    texticon2:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width:40,
        justifyContent:"center"
    },
    texticon3:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width:67,
        justifyContent:"center"
    },
    icon:{
        width:45,
        height:45,
    },
    behindtitle:{
        height:45,
        width:"90%",
        marginTop:27,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        justifyContent:"space-evenly"
    },
    titlewhite:{
        fontFamily:"Liberator",
        fontSize:36
    },
    foodDisplayed:{
        width:"65%",
        height:270,
        resizeMode:"contain",
        zIndex:3
    },
    whitecontainer:{
        width:"100%",
        height:553,
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
        marginTop:50,
        height:700,
        width:"100%",
        display:"flex",
        alignItems:"center"
    },
    star:{
        height:30,
        width:30,
    },
    chevron:{
        height:30,
        width:30,
        marginRight:3,
    },
    whitecircle:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:40,
        height:40,
        borderRadius:30,
        backgroundColor:"white"
    },
    ordercontainer:{
        display:"flex",
        flexDirection:"row",
        width:"80%",
        height:40,
        justifyContent:"center",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:30,
    },
    moreblankfooter:{
        height:100
      },
    moreblank:{height:130},
    title:{
        fontFamily:"Liberator",
        color:"#E9BD1F",
        fontSize:25,
    },
    bluecontainer:{
    backgroundColor:"#062C49",
    height:750,
    width:"100%",
    borderRadius:47,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    paddingTop:15,
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

export default FoodScreen2