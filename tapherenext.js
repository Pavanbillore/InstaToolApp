
import { StylesContext } from '@material-ui/styles';
import React from 'react';
import {View, Text, Button, Image, StyleSheet, TextInput, SafeAreaView,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
function App(){
  
  return(
    <LinearGradient 
  
    colors={['#DDCEFF','#F8DFF0']}
    style={{flex:1}}
    >
    <View>
      <View style={{ top:5,height:58,borderWidth: 1,}}>
        <Image source={require('./Images/greater.png')} 
        style={{top:20,left:15}}
        />
        <Text style={{position:'absolute',alignSelf:'center',fontSize:24,fontFamily:'poppins',top:10,fontWeight:'200',fontStyle:'normal',color:'black'}}>Tap Hear Bio</Text>
      </View>
       <View style={{ top:15,height:115,borderWidth: 1,borderRadius: 12,width:370,left:8}}>
        <Image source={require('./Images/pick2.png')} style={{left:12,top:10,position:'absolute' }} />
        <Text style={{left:110,top:22,fontWeight:'bold'}}>Amit Giri</Text>
        <Text style={{left:110,top:22}}>@vijay_rathore</Text>
        <View style={{borderRadius:11,backgroundColor:'#F8F3FE',borderColor:'black',borderWidth :1,height:21,width:250,top:40,left:110}}>
        <TextInput
              placeholder="taphere.bio/amitgiri"    
        />
         <Text style={{position:'absolute', left:10,top:-1,color:'black',fontSize:13}}>taphere.bio/amitgiri</Text>
      <Image source={require('./Images/copy2.png')} 
        style={{height:13,width:13,alignSelf:'flex-end',right:8,bottom:18}}
        />
      </View>
      </View>
      <View style={{top:15,height:45,borderWidth: 1,left:12,top:30,borderRadius: 9,width:360}}>
        <TextInput
        placeholder='Title'
         />
      </View>
      <View style={{height:82,borderWidth: 1,left:12,top:50,borderRadius: 9,width:360}}>
        <TextInput
        placeholder='Description'
         />
      </View>
      <View style={{height:120,borderWidth: 1,left:12,top:70,borderRadius: 9,width:360}}>
      <TouchableOpacity>
        <Image source={require('./Images/imagepicker.png')} style={{height:25,width:30,alignSelf:'center',top:30}} /></TouchableOpacity>
        <TouchableOpacity><Text style={{alignSelf:'center',top:40}}>Tap to upload image</Text>
        </TouchableOpacity>
      </View>

      
    <View style={{top:150,alignSelf:'center'}}>
     <Text>Follow us On</Text>
     </View>
     <View style={{flexDirection:'row', alignSelf:'center',top:160}}>
     <TouchableOpacity>
     <Image source={require('./Images/yt2.png')} 
     style={{left:-20}}
     /></TouchableOpacity>
     <TouchableOpacity>
     <Image source={require('./Images/moj.png')} 
     style={{left:-5}}
     /></TouchableOpacity>
     <TouchableOpacity>
     <Image source={require('./Images/fb.png')} 
     style={{left:10}}
     /></TouchableOpacity>
     <TouchableOpacity>
     <Image source={require('./Images/insta.png')}
     style={{left:20}}
     /></TouchableOpacity>
     <TouchableOpacity>
     <View style={{left:37, height: 47,width: 50,borderRadius:100,backgroundColor:'#808080',borderColor: 'white' }}>
       <Text style={{color:'white',top:12,left:3,}}>Others</Text>
     </View></TouchableOpacity>
     </View>
     
   

  <TouchableOpacity>
<View style={{top:230,height:45,width:200,alignSelf:'center',borderRadius:15,backgroundColor:'#3672E9'}}>
  <Text style={{fontSize:20,alignSelf: "center",top:10,color:'white'}}>Publish</Text>
</View>
</TouchableOpacity>






</View>
</LinearGradient>
 
  );
}
export default App;

