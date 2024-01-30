import React from 'react';
import {View, Text,Image,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Upload from 'react-native-vector-icons/FontAwesome';


function App() {
  return (
    <LinearGradient 
  
    colors={['#DDCEFF','#F8DFF0']}
    style={{flex:1}}
    >
    <View>
        <View style={{top:5,height:58,borderWidth: 1,}}>
        <TouchableOpacity>  
        <Image source={require('./Images/greater.png')} 
        style={{top:20,left:15}}
        />
        </TouchableOpacity>
        <Text style={{position:'absolute',alignSelf:'center',fontSize:24,fontFamily:'poppins',top:10,fontWeight:'200',fontStyle:'normal',color:'black'}}>No Crop Post</Text>
      </View>
      
      
      <View style={{height:120, width:120,borderRadius:90,backgroundColor:'#F8EAFC',top:130,left:130}}>
      
      </View>
      <TouchableOpacity>
      <View style={{position:'absolute',alignSelf:'flex-end',top:40,right:160}}>
      <Upload name='cloud-upload' color='white' size={60}
      />
      
      </View></TouchableOpacity>
      <View style={{top:150,alignSelf:'center'}}>
        <Text style={{color:'black',fontSize:18}}>Upload an image</Text>
      </View>
      <View  style={{top:150,alignSelf:'center'}}>
        <Text style={{color:'black',fontSize:16}}>Select an iMage to make some cool grids</Text>
      </View>

        <TouchableOpacity>
        <View style={{top:180,height:45,width:200,alignSelf:'center',borderRadius:15,backgroundColor:'#3672E9'}}>
        <Text style={{fontSize:20,alignSelf: "center",top:6,color:'white'}}>Upload Image</Text>
        </View></TouchableOpacity>
</View></LinearGradient>
  )
}
export default App;

