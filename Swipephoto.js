import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwipeScreentwo from './Swipescreentwo';


const SwipeScreen =({navigation})=>{
  return(
 
    <LinearGradient 
  
    colors={['#DDCEFF','#F8DFF0']}
    style={{flex:1}}
    >
<View style={{top:5,height:58,borderWidth: 1.5,borderColor:'#F2ECFC'}}>
        <TouchableOpacity><Image source={require('./Images/greater.png')} 
        style={{top:20,left:15}}
        /></TouchableOpacity>
        <Text style={{position:'absolute',alignSelf:'center',fontSize:24,fontFamily:'poppins',top:10,fontWeight:'200',fontStyle:'normal',color:'black'}}>Swipe Photo</Text>
      </View>
      <View style={{top:40}}>
        <Image source={require("./Images/lion1.png")} 




        style={{height:480,width:340,left:9,backgroundColor:'black',borderWidth:2}}
        />
      </View>
      <View style={{top:115,flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity><Text style={{borderWidth:1,borderColor:'#fff',backgroundColor:'#fff',width:80,height:36,textAlign:'center',fontSize:18,left:50,fontWeight:'bold',color:'black'}}>1</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Swipescreentwo')}><Text style={{borderWidth:1,borderColor:'#fff',backgroundColor:'#fff',width:70,height:30,textAlign:'center',fontSize:17}} >2</Text></TouchableOpacity>
      <TouchableOpacity><Text style={{borderWidth:1,borderColor:'#fff',backgroundColor:'#fff',width:70,height:30,textAlign:'center',fontSize:17,right:50}}>3</Text></TouchableOpacity>
      </View>
      <TouchableOpacity >
        <View style={{top:150,height:45,width:200,alignSelf:'center',borderRadius:15,backgroundColor:'#3672E9'}}>
        <Text style={{fontSize:20,alignSelf: "center",top:5,color:'white'}}>Apply</Text>
        </View>
        </TouchableOpacity>
 </LinearGradient>
 
  )
}
export default SwipeScreen;