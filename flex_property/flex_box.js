import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.child_1} />

      <View style={styles.child_2}>
        
        <View style={styles.child_2_1}>
            <View style={styles.child_2_1_1} />
            <View style={styles.child_2_1_2} />
        </View>

        <View style={styles.child_2_2} />

      </View>

      <View style={styles.child_3} />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  child_1: {
    flex: 1,
    backgroundColor: 'red',
  },
  child_2: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  child_2_1: {
    flex: 1,
    backgroundColor: 'black',
  },
  child_2_1_1: {
    flex: 2,
    backgroundColor: 'white',
  },
  child_2_1_2: {
    flex: 1,
    backgroundColor: 'gray',
  },

  child_2_2: {
    flex: 1,
    backgroundColor: 'orange',
  },
  child_3: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default App;
