import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomOnebonfire from './CustomOnebonfire'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import More from './More';
import Messages from './Messages';
import Myitems from './Myitems';


const Tab = createMaterialTopTabNavigator();

const Community = ({navigation}) => {
  return (
    // <View style={{flex: 1, marginTop: 50, paddingHorizontal:'5%'}}>
    //   {/* <CustomOnebonfire/> */}
      <Tab.Navigator>
      <Tab.Screen name="Myitems" component={Myitems} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
    // </View>
    
  )
}

export default Community

const styles = StyleSheet.create({})




