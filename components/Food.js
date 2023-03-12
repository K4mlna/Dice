import React, {useState} from "react";
import {View,StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function FoodScreen({navigation}) {

    const [buttonStyle, setButtonStyle] = useState(styles.buttonPressed);
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    const handlePress = () => {
        setButtonStyle(styles.buttonPressed);
        setButtonStyle2(styles.navtxt);
        setButtonStyle3(styles.navtxt);
        setIsVisible(true);
        setIsVisible2(false);
        setIsVisible3(false);
    };

    const [buttonStyle2, setButtonStyle2] = useState(styles.navtxt);

    const handlePress2 = () => {
        setButtonStyle2(styles.buttonPressed);
        setButtonStyle(styles.navtxt);
        setButtonStyle3(styles.navtxt);
        setIsVisible(false);
        setIsVisible2(true);
        setIsVisible3(false);
    };

    const [buttonStyle3, setButtonStyle3] = useState(styles.navtxt);

    const handlePress3 = () => {
        setButtonStyle3(styles.buttonPressed);
        setButtonStyle2(styles.navtxt);
        setButtonStyle(styles.navtxt);
        setIsVisible(false);
        setIsVisible2(false);
        setIsVisible3(true);
    };

    return (
        <View style={styles.HomeScreen}>
        <Header navigation={navigation}></Header>
        <ScrollView style={styles.scroll} contentContainerStyle={{alignItems:"center"  }}>
            <View style={styles.moreblank}></View>
            <Image style={styles.imagebeggining} source={require ("../assets/food.png")}></Image>
            <View style={styles.navcontainer}>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={buttonStyle}>Sandwiches</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={handlePress2}>
                    <Text style={buttonStyle2}>snack bar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress3}>
                    <Text style={buttonStyle3}>drinks</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.navtxt}>deals</Text>
                </TouchableOpacity>
            </View>
            {isVisible && <View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083443439141654568/image.png?width=287&height=287"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>Turkey Pesto</Text>
                                <Text style={styles.undertitle}>smoked turkey, pesto, & sun-kissed tomatoes</Text>
                                <Text style={styles.priceabsolute}>£6.95</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083443470150144021/image.png?width=287&height=287"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>Tuna Melt</Text>
                                <Text style={styles.undertitle}>tuna mayonnaise, cheddar & red onion</Text>
                                <Text style={styles.priceabsolute}>£6.95</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083443824619167894/image.png?width=285&height=292"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>SPICY PIZZA</Text>
                                <Text style={styles.undertitle}>Vegan cheese, tomato, pepper, olives & chili</Text>
                                <Text style={styles.priceabsolute}>£6.75</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083443859176030298/image.png?width=282&height=282"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>HAM AND BRIE</Text>
                                <Text style={styles.undertitle}>Ham, brie & caramelised onion chutney</Text>
                                <Text style={styles.priceabsolute}>£6.95</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083443901328801842/image.png?width=280&height=295"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>REUBEN</Text>
                                <Text style={styles.undertitle}>Pastrami, sauerkraut, emmental, gherkins & russian dressing</Text>
                                <Text style={styles.priceabsolute}>£6.95</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083443961957453935/image.png?width=287&height=280"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>CHEESE AND PESTO</Text>
                                <Text style={styles.undertitle}>Emmental, pesto & sun-kissed tomato </Text>
                                <Text style={styles.priceabsolute}>£6.95</Text>
                            </View>
                    </TouchableOpacity>
                </View>
            </View>}
            {isVisible2 && <View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444015170601001/image.png?width=287&height=287"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>ROASTED CORN NUTS</Text>
                                <Text style={styles.undertitle}>Vegan / Gluten free</Text>
                                <Text style={styles.priceabsolute}>£2</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444037450731580/image.png?width=287&height=287"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>PRETZELS</Text>
                                <Text style={styles.undertitle}>Vegetarian</Text>
                                <Text style={styles.priceabsolute}>£2</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444186981875762/image.png?width=287&height=287"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>CHEDDARS</Text>
                                <Text style={styles.undertitle}>Vegan / Gluten Free</Text>
                                <Text style={styles.priceabsolute}>£2</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444187199983676/image.png?width=287&height=285"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>WASABI PEAS</Text>
                                <Text style={styles.undertitle}>Vegan / Gluten Free</Text>
                                <Text style={styles.priceabsolute}>£2.5</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444187480985600/image.png?width=287&height=287"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>PORK SCRATCHINGS</Text>
                                <Text style={styles.undertitle}>Gluten Free</Text>
                                <Text style={styles.priceabsolute}>£2.5</Text>
                            </View>
                    </TouchableOpacity>
                </View>
               
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444187741044809/image.png?width=285&height=285"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>CHILI RICE CRACKERS</Text>
                                <Text style={styles.undertitle}>Vegan</Text>
                                <Text style={styles.priceabsolute}>£2.5</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444188009484398/image.png?width=285&height=285"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>TOMATO & BASIL SAVOURY BITES</Text>
                                <Text style={styles.undertitle}>Vegan</Text>
                                <Text style={styles.priceabsolute}>£2.5</Text>
                            </View>
                    </TouchableOpacity>
                </View>
            </View>}
            {isVisible3 && <View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444298244177980/image.png?width=287&height=287"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>mojito</Text>
                                <Text style={styles.undertitle}>rhum, green lime, mint, sparkling water, sugar</Text>
                                <Text style={styles.priceabsolute}>£8.95</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444298604875826/image.png?width=287&height=287"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>Pornstar</Text>
                                <Text style={styles.undertitle}>passion fruit, vanilla, vodka, lime, sparkling wine</Text>
                                <Text style={styles.priceabsolute}>£12.95</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444298932047922/image.png?width=285&height=292"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>EXPRESSO MARTINI</Text>
                                <Text style={styles.undertitle}>vodka, espresso, coffee liqueur</Text>
                                <Text style={styles.priceabsolute}>£11.75</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444299284365452/image.png?width=282&height=282"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>SEX ON THE BEACH</Text>
                                <Text style={styles.undertitle}>vodka, peach, orange, cramberry</Text>
                                <Text style={styles.priceabsolute}>£10.95</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083806143593324595/image.png?width=280&height=295"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>PINA COLADA</Text>
                                <Text style={styles.undertitle}>rum, pineapple, coconut, lime</Text>
                                <Text style={styles.priceabsolute}>£10.95</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.precontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Food2")} style={styles.bluecontainer}>
                            <Image style={styles.foodimg} source={{uri : "https://media.discordapp.net/attachments/798264990850482187/1083444299909320825/image.png?width=287&height=280"}}></Image>
                            <View style={styles.insidecontainer}>
                                <Text style={styles.title}>APEROL SPRITZ</Text>
                                <Text style={styles.undertitle}>Aperol, prosecco, soda</Text>
                                <Text style={styles.priceabsolute}>£10.95</Text>
                            </View>
                    </TouchableOpacity>
                </View>
            </View>}
            
            <View style={styles.moreblankfooter}></View>
        </ScrollView>

        <Footer navigation={navigation}></Footer>
        </View>
    )
}

const styles=StyleSheet.create( {
    navcontainer:{
        marginTop:15,
        marginBottom:5,
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        justifyContent:"space-evenly"
    },
    navtxt:{
        fontFamily:"Liberator",
        fontSize:16
    },
    buttonPressed:{
        color:"#E9BD1F",
        textDecorationLine:"underline",
        fontFamily:"Liberator",
        fontSize:16
    },
   
    foodimg:{
        width:"33%",
        height:118,
        resizeMode:"contain",
    },
    insidecontainer:{
        marginLeft:"4%",
        height:95,
        width:"60%"
    },
    moreblankfooter:{
        height:100
      },
    priceabsolute:{
        position:"absolute",
        bottom:0,
        right:30,
    },
    moreblank:{height:130},
    
    title:{
        fontFamily:"Liberator",
        color:"black",
        fontSize:20,
        marginBottom:5
    },
    undertitle:{
        fontWeight:"600",
        color:"black",
        fontSize:15,
    },
    precontainer:{
        display:"flex",
        alignItems:"center",
        height:135,
        width:"100%",
        marginBottom:0
    },
    bluecontainer:{
    backgroundColor:"whitex",
    height:"100%",
    width:"90%",
    borderRadius:17,
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
    },
    imagebeggining:{
        width:"100%",
        height:225,
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

export default FoodScreen