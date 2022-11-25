import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const CustomOnebonfire = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.oneLogo}
        source={require('../assest/Onebonfire.png')}
      />
    </View>
  );
};

export default CustomOnebonfire;

const styles = StyleSheet.create({
  oneLogo: {
    width: '60%',
    height: 42,
    alignSelf:'center',
  },
  container:{
    flex:1,

  }
});
