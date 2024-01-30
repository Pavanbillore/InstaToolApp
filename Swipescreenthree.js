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


const SwipeScreenthree =({navigation})=>{
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
      <View style={{top:120,position:'absolute'}}>
        <Image source={require("./Images/lion4.png")} 
        style={{height:200,width:123,left:5,top:50,backgroundColor:'black',borderWidth:2}}
        />
      </View>

      <View style={{top:170,alignSelf:'center',position:'absolute'}}>
        <Image source={require("./Images/lion5.png")} 
        style={{height:200,width:124,backgroundColor:'black',borderWidth:2}}
        />
      </View>
      <View style={{top:170,alignSelf:'flex-end',}}>
        <Image source={require("./Images/lion6.png")}
        style={{height:200,width:123,right:5,backgroundColor:'black',borderWidth:2}}
        />
      </View>
      </View>

      <View style={{top:50}}> 
      <View style={{top:350,flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity><Text style={{borderWidth:1,borderColor:'#fff',backgroundColor:'#fff',width:70,height:30,textAlign:'center',fontSize:17,left:50,}}>1</Text></TouchableOpacity>
      <TouchableOpacity><Text style={{borderWidth:1,borderColor:'#fff',backgroundColor:'#fff',width:73,height:35,textAlign:'center',fontSize:17,}}>2</Text></TouchableOpacity>
      <TouchableOpacity><Text style={{borderWidth:1,borderColor:'#fff',backgroundColor:'#fff',width:93,height:35,textAlign:'center',fontSize:18,right:50,fontWeight:'bold',color:'black'}}>3</Text></TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={{top:382,height:45,width:200,alignSelf:'center',borderRadius:15,backgroundColor:'#3672E9'}}>
        <Text style={{fontSize:20,alignSelf: "center",top:10,color:'white'}}>Apply</Text>
        </View>
        </TouchableOpacity></View>
 </LinearGradient>
 
  )
}
export default SwipeScreenthree;