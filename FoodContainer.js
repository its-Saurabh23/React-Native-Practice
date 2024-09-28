import React from 'react';
import{SafeAreaView,View,Text,FlatList} from 'react-native';
import {useSelector} from 'react-redux'

const FoodContainer =()=>{
 const foodList  = useSelector((states)=>states.food.foodList);
 return(
   <SafeAreaView 
   style ={{fleax:1,alignItems:'flex-start'}}>
   <View>
    <Text>This is FoodContainer Page</Text>
    <FlatList 
    data={foodList}
    keyExtractor={(item,index)=>index.toString()}
    renderItem={({item})=><Text style={{fontSize:20, fontWeight:'bold'}}>{item}</Text>} 
    />
   </View>
   </SafeAreaView>
 )
  
}
export default FoodContainer;