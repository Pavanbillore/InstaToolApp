
import { StylesContext } from '@material-ui/styles';
import React from 'react';
import {View, Text, Button, Image, StyleSheet, TextInput, SafeAreaView,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
function App(){
  
  return(
    <LinearGradient 
  
    colors={['#DDCEFF','#F8DFF0']}
    style={{flex:1}}
    >
    <View>
      <View style={{ top:5,height:60,borderWidth: 1,}}>
        <Image source={require('./Images/greater.png')} 
        style={{top:20,left:15}}
        />
        <Text style={{position:'absolute',alignSelf:'center',fontSize:24,fontFamily:'poppins',top:10,fontWeight:'200',fontStyle:'normal',color:'black'}}>Tap Hear Bio</Text>
      </View>
       <View style={{ top:15,height:115,borderWidth: 1,borderRadius: 12,width:370,left:8}}>
        <Image source={require('./Images/pick2.png')} style={{left:12,top:10,position:'absolute' }} />
        <Text style={{left:110,top:22,fontWeight:'bold'}}>Amit Giri</Text>
        <Text style={{left:110,top:22}}>@vijay_rathore</Text>
      </View>
      <View style={{backgroundColor:'#F8F3FE',borderRadius:12,borderColor:'black',borderWidth :1,top:160,left:115,position:'absolute',height:22,width:251}}>
      <TextInput
              placeholder='taphere.bio/amitgiri'
        />
        <Text style={{position:'absolute', left:10,top:-1,color:'black',fontSize:13}}>taphere.bio/amitgiri</Text>
      <Image source={require('./Images/copy2.png')} 
        style={{height:13,width:13,alignSelf:'flex-end',right:8,bottom:18}}
        />
      </View>
     <TouchableOpacity>
     <View style={{left:320,top:480 }}>
     <Icon name="circle-with-plus" size={50} color='#808080' />
     </View></TouchableOpacity>
     </View>
     
   

  <TouchableOpacity>
<View style={{top:500,height:45,width:200,alignSelf:'center',borderRadius:15,backgroundColor:'#3672E9'}}>
  <Text style={{fontSize:20,alignSelf: "center",top:8,color:'white'}}>Done</Text>
</View>
</TouchableOpacity>
</LinearGradient>
 
  );
}
export default App;

