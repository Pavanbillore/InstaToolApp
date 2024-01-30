// import { Button } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';
import { StylesContext } from '@material-ui/styles';
import { fontWeight, positions } from '@mui/system';
import React,{ Component } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet,TouchableOpacity, ScrollView} from 'react-native';

const highlightText = string =>
string.split(' ').map((word, i) => (
  <Text key={i}>
    <Text style={styles.highlightText}>{word} </Text>
  </Text>
));
const App = () => {
  return(<>
<ScrollView>
    
  <View>
      <View style={{left:47,top:20,}}>
      <Image source={require("./Images/loginpic.png")} 
      style={{height:220,width:290}}
      />
      </View>
      <View style={{left:30,top:20}}>
      <Text  style={{fontSize:31,  color:'black',fontWeight:'bold'}}>Sign up </Text>
      </View>
    
      <View style={{}}>
        <Image source={require('./Images/athe.png')}
          style={{
          width: '50%',
          height:20,
          resizeMode: 'contain',
          right:70,
          top:40
        }}
        />
        <View style={{marginLeft:20}}>
      <TextInput 
      placeholder='Email ID' 
      style={{ borderBottomWidth :1,borderBottomColor: '#DEDEDE',width:350,left:25}}
      />
      </View>
      </View>
      <View style={{}}>
        <Image source={require('./Images/user.png')} 
             style={{
             width: '50%',
             height:20,
             resizeMode: 'contain',
             right:70,
             top:37,
             
        }}
        />
        <View style={{marginLeft:20}}>
      <TextInput 
      placeholder='Full name' 
      style={{ borderBottomWidth :1,borderBottomColor: '#DEDEDE',width:350,left:25}}
      />
      </View>
      </View>
      <View style={{}}>
        <Image source={require('./Images/call.png')}
          style={{
          width: '50%',
          height:20,
          resizeMode: 'contain',
          right:70,
          top:37,
        
        }}
        />
        <View style={{marginLeft:20}}>
      <TextInput 
      placeholder='Mobile' 
      style={{ borderBottomWidth :1,borderBottomColor: '#DEDEDE',width:350,left:25}}
      />
      </View>
      </View>
      <View style={{}}>
        <Image source={require('./Images/vector.png')}
          style={{
          width: '50%',
          height:20,
          resizeMode: 'contain',
          right:70,
          top:40
        }}
        />
        <View style={{marginLeft:20}}>
      <TextInput 
      placeholder='Password' 
      style={{ borderBottomWidth :1,borderBottomColor: '#DEDEDE',width:350,left:25}}
      />
      </View>
      </View>
      
     <View style={{top:35,}}>
       <Text style={{ fontSize:14,left:65,}}>By signing up you’re agree to our {highlightText('Terms & Conditions')} {'\n'}</Text> 
       <Text style={{left:140,position:'absolute',top:15,}}>and {highlightText('Praivacy Policy')}</Text>
     </View>
      <View >
        <TouchableOpacity style={{elevation: 8,backgroundColor:'#0164FF',borderRadius: 19,paddingVertical: 10,marginHorizontal: 50,top:60}}>
          <Text  style={{fontSize:20,color:'white',alignSelf: "center", }}>Register</Text>
          </TouchableOpacity>

      </View>

    <View style={{top:35,alignItems:'center'}}>
      <Text>Joined us before ? {highlightText('Login')}</Text>
    </View>

  </View>
  </ScrollView>

  </>
  );
}
const styles = StyleSheet.create({

  highlightText:{
    color: '#0064FD',
  },
});

export default App;

{/* <View  style={{top:30}}>
      <TextInput 
      placeholder='Full name' 
      style={{ borderBottomWidth :1,borderBottomColor: '#DEDEDE',width:350,left:25}}
      />
      <TextInput 
      placeholder='Mobile'
      style={{ borderBottomWidth :1,borderBottomColor: '#DEDEDE',width:350,left:25}} 
      />
      <TextInput 
      placeholder='Password' 
      style={{ borderBottomWidth :1,borderBottomColor: '#DEDEDE',width:350,left:25}}
      />
    </View> */}