import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useContext, useEffect, useState, useCallback} from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native';
import axios from 'axios';

import {AuthContext} from './AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListData from './ListData';


const ScreenWidth = Dimensions.get('window').width;

const Myitems = ({navigation}) => {
  console.log('ScreenWidth', ScreenWidth);
  const [userItems, setuserItems] = useState([]);

  const {width, height} = Dimensions.get('screen');

  const {userInfo} = useContext(AuthContext);

  console.log('myitem,token', userInfo.token);

  useEffect(() => {
    axios
      .get(
        'http://103.117.66.70:5001/api/ProductMain/allproducts?pageNumber=0&pageSize=10',
        {
          headers: {
            Authorization: userInfo.token ? `Bearer ${userInfo.token}` : '',
            'Content-Type': 'Application/json',
          },
        },
      )
      .then(res => setuserItems(res.data.items))
      // .then(res => setuserItems(res.data))
      .catch(e => console.warn(e));
  }, [userInfo]);

  console.log('userItems', userItems);

  const asyncData = AsyncStorage.getItem('userToken');
  console.log('asyncData', userInfo);

  const renderItem = useCallback(({item}) => {
    return (
      <View style={{flex: 1, margin: 5, borderWidth: 1, alignItems: 'center'}}>
        <Text style={{color: 'black', paddingVertical: 5}}>{item.addedBy}</Text>
        <Image
          source={{
            uri: item.mediaURL,
          }}
          style={{resizeMode: 'contain', width: '70%', height: 100}}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 15,
            paddingVertical: 5,
            backgroundColor:'orange',
            width:'100%',
            textAlign:'center',
          }}>
          {item.tags}
        </Text>
        <View style={{backgroundColor: 'blue'}}>
          {/* <Text style={{color: 'black'}}>{item.name}</Text> */}

        </View>
        
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', marginLeft: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ListData')}
          style={{flexDirection: 'row', marginLeft: 20}}>
          <Icons name="view-list" color="black" size={35} />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginLeft: 20}}>
          <Icons
            name="view-grid"
            color="black"
            size={30}
            style={{marginTop: 3, marginLeft: 20}}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={userItems}
        renderItem={renderItem}
        numColumns={2} 
        horizontal={false}
      />
      
    </SafeAreaView>
  );
};
export default Myitems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  item: {
    width: (ScreenWidth - 40) / 2 - 10,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
// <FlatList data={items} renderItem={renderItem} keyExtractor={item => item.id}/>
