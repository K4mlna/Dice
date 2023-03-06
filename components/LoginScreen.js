import React, {useState} from "react";
import {View,StyleSheet, Text, TouchableOpacity, Image, TextInput} from "react-native";
import Checkbox from 'expo-checkbox';

function LoginScreen({navigation}) {
    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    const [isChecked, setChecked] = useState(false);
  
    return (
      
      <View style={styles.HomeScreen}>
        <View style={styles.logo_container}>
          <Image style={styles.logo_login}source={require ("../assets/logo.png")}></Image>
        </View>
        <View style={styles.login_box}>
          <Text style={styles.textlog}>ACCOUNT LOGIN</Text>
          <View style={styles.input_container}>
            <Image style={styles.iconlogin}source={require ("../assets/mail.png")}></Image>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="username or email"
              placeholderTextColor="#000000"
            />
          </View>
          <View style={styles.input_container2}>
            <Image style={styles.iconlogin2}source={require ("../assets/lock.png")}></Image>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText2}
              value={text2}
              placeholder="password"
              placeholderTextColor="#000000"
            />
          </View>
          <View style={styles.check_n_forgot}>
            <View style={styles.check}>
              <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? '#E9BD1F' : undefined} style={styles.checkboxlogin} ></Checkbox>
              <Text style={styles.checktext}>Remember me</Text>
            </View>
            <Text style={styles.forgottext}>Forgot password ?</Text>
          </View>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.buttonlogtext}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.buttonlogtext}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.orloginwithtext}>Or login with</Text>
          <View style={styles.fbggl}>
            <TouchableOpacity style={styles.googlebutton}>
              <Image style={styles.googlebutton} source={require ("../assets/google.png")}></Image>
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.googlebutton}>
              <Image style={styles.googlebutton} source={require ("../assets/facebook.png")}></Image>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.ignorebutton}><Text style={styles.ignoretext}>IGNORE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    HomeScreen: {
      flex: 1, alignItems: 'center',
      backgroundColor:"#E9BD1F",
    },
    logo_container:{
      marginTop:'16%',
      width:120,
      height: 80
    },
    logo_login: {
      width: '100%',
      height: '100%'
    },
    login_box: {
      marginTop:'13%',
      width:'78%',
      //height:'55%',
      height:460,
      backgroundColor: "#062C49",
      borderRadius: 10,
      alignItems:"center",
    },
    textlog: {
      marginTop:"6%",
      color:"#FFFFFF",
      fontFamily: 'Liberator',
      fontSize:31
    },
    input_container: {
      marginTop:25,
      width:"80%",
      alignItems:"center",
      justifyContent:"center"
    },
    input_container2: {
      width:"80%",
      alignItems:"center",
      justifyContent:"center",
      marginTop:20
    },
    input: {
      height: 40,
      borderRadius: 60,
      width:'100%',
      paddingLeft: 42,
      paddingBottom:2,
      backgroundColor:"#FFFFFF",
      
    },
    iconlogin:{
      width:20.33,
      height:15.4,
     
      position:"absolute",
      left:12,
      zIndex:1,
    },
    iconlogin2:{
      width:16.26,
      height:20,
     
      position:"absolute",
      left:14,
      zIndex:1,
    },
    checkboxlogin:{
      width:20,
      height:20,
      backgroundColor:"white",
      borderColor:"white",
      borderRadius:4,
    },
  
    check_n_forgot:{
      marginTop:15,
      display:"flex",
      flexDirection:"row",
      width:"80%",
      justifyContent:"space-between"
    },
  
    check:{
      display:"flex",
      flexDirection:"row",
    },
  
    checktext:{
      color:"white",
      marginLeft:10,
      fontSize:10,
      fontWeight:"900",
      marginTop:3
    },
    forgottext:{
      color:"white",
      fontSize:10,
      marginTop:3,
      textDecorationLine:"underline",
      fontWeight:"bold",
    },
    signInButton:{
      backgroundColor:"white",
      width:"60%",
      height:40,
      marginTop:50,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:14,
    },
    signUpButton:{
      backgroundColor:"white",
      width:"60%",
      height:40,
      marginTop:15,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:14,
    },
    buttonlogtext:{
      marginTop:4,
      fontSize:24,
      fontFamily:"Liberator"
    },
    orloginwithtext:{
      color:"white",
      marginLeft:10,
      fontSize:10,
      marginTop:7,
      fontWeight:"900",
    },
    googlebutton:{
      width:58,
      height:58
    },
    
    fbggl:{
      display:"flex",
      flexDirection:"row",
      marginTop:4,
    },
  
    ignorebutton:{
      position:'absolute',
      bottom:13,
      left:13
    },
  
    ignoretext:{
      color:"#DA3C3C",
      fontSize:16,
      fontWeight:"bold"
    }
  
});

export default LoginScreen