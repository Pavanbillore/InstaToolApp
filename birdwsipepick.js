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
           <TouchableOpacity>
             <View style={{backgroundColor:'#EBE2FB',borderWidth:1,top:30,height:90,width:370,left:8,borderRadius:17,borderColor:'white'}}>
               <View style={{height:35,width:35,top:25,left:20,borderWidth:1,borderRadius:90,backgroundColor:'white',borderColor:'white'}}></View>
              
             </View>
             <View style={{height:12,width:160,position:'absolute',top:50,left:90,borderWidth:1,borderColor:'white',backgroundColor:"white",borderRadius:17}}></View>
               <View style={{height:12,width:90,position:'absolute',top:90,left:90,borderWidth:1,borderColor:'white',backgroundColor:"white",borderRadius:17}}></View>



      <View style={{top:60,left:10}}>
        <Image source={require('./Images/bird.png')}
        style={{height:480,width:335,borderRadius:17}}
        />
      </View>
      <View style={{width:320,position:'absolute',alignItems:'flex-end',left:64,top:150}}>
        <Image source={require('./Images/vt.png')} 
        style={{height:480,borderRadius:17}}
        />
      </View>
        <View style={{top:100,height:45,width:200,alignSelf:'center',borderRadius:15,backgroundColor:'#3672E9'}}>
        <Text style={{fontSize:20,alignSelf: "center",top:10,color:'white'}}>Add Image</Text>
        </View>
        </TouchableOpacity>
 </LinearGradient>
 
  )
}
export default SwipeScreenthree;