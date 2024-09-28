import React, { useState } from 'react';
import {
  Text,
  Alert ,
  View,
  SafeAreaView,
  SectionList,
  StyleSheet,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {useDispatch} from 'react-redux';
import {addFodd} from './foodSlice'

const Home = () => {
  const[input,setInput]  = useState('');
  const dispatch  = useDispatch();


  const handleInput = ()=>{
   if(input.trim()){
     Alert.alert("Food Added", `You added: ${input}`);
     dispatch(addFodd(input));
   }
   setInput('');
  }
  
  return (
      <View style={styles.container}>
        <Text>This is Profile Page</Text>
        <TextInput
          style={styles.inputStyle}
          value={input}
          placeholder="Enter food Name" 
          
          keyboardType="default"

          onChangeText={(i) => setInput(i)}
        />
        <Button 
        style={styles.buttonCss}
         title="Add food"
         onPress={handleInput}
         /> 
      </View>

  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  inputStyle:{
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 15,
    width: '100%',
    height: 40,  
    padding: 5,
    marginTop:'90%',
  
  },
  buttonCss:{
       fontSize:5,
       marginLeft:'20%',
       justifyContent:'center',
       alignItems:'center'
  }
});

export default Home;
