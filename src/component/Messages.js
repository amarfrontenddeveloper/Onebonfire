// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import CustomOnebonfire from './CustomOnebonfire'

// const Messages = () => {
//   return (
//     <View style={{flex: 1, marginTop: 50, paddingHorizontal:'5%'}}>
//     {/* <CustomOnebonfire/> */}
//     <Text>Welcome in messages component</Text>
//   </View>
//   )
// }

// export default Messages

// const styles = StyleSheet.create({})

// break

import React, {useState, useCallback, useEffect} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

const Messages = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    console.log('Hello axios');
    Apicall();
  });

  const Apicall = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    axios
      .get(url)
      .then(res => setApi(res.data))
      .catch(err => console.log('err', err));
  };

  const renderItem = useCallback(({item}) => {
    return (
      <View style={{flex:1,  }}>
        
        <Text style={{fontSize:20, marginHorizontal:"5%", textTransform:'capitalize'}}>{item.title}</Text>
        <View style={{width:"100%", height:1, backgroundColor:'black'}}/>
        <Text style={{fontSize:20, marginHorizontal:"5%", textTransform:'capitalize'}}>{item.body}</Text>
        <View style={{width:"100%", height:1, backgroundColor:'black'}}/>
      </View>
    );
  });

  return (
    <View style={{borderWidth:1, borderRadius:10, marginHorizontal:"5%",}}>
      <Text>CheckBox</Text>
      <Button title="Click Here" color="#841584" />
      <Text style={{alignSelf:"center", fontSize:30}}>Axios data</Text>
      <FlatList data={api} renderItem={renderItem}
      // numColumns={2}
      // horizontal={false}
      />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
