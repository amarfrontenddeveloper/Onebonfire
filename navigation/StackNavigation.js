import {createStackNavigator} from '@react-navigation/stack';
import { Image, StyleSheet } from 'react-native';
import Community from '../src/component/Community';
import ListData from '../src/component/ListData';

import Login from '../src/component/Login';
import Myitems from '../src/component/Myitems';
import TabNavigations from './TabNavigations';


const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign:'center', headerTitle:()=>(
      <Image style={styles.headerImg} source={require('../src/assest/logo.png')}/>
    ),}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={TabNavigations} />
      <Stack.Screen name="ListData" component={ListData} />
      <Stack.Screen name="Myitems" component={Myitems} />
      <Stack.Screen name="Community" component={Community} />

      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

  headerImg:{
    width:220,
    height:45,
    marginTop:10,
    marginBottom:-10,
  }
});

export default StackNavigation;
