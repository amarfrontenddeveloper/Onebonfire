import React, {useState, useCallback, useEffect} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

const Messages = () => {
  const [api, setApi] = useState([]);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    console.log('Hello axios');
    Apicall();
  }, [isError]);

  const Apicall = async () => {
    try {
      const res = await axios.get(url);
      setApi(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  const renderItem = useCallback(({item}) => {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            marginHorizontal: '5%',
            textTransform: 'capitalize',
          }}>
          {item.title}
        </Text>
        <View style={{width: '100%', height: 1, backgroundColor: 'black'}} />
        <Text
          style={{
            fontSize: 20,
            marginHorizontal: '5%',
            textTransform: 'capitalize',
          }}>
          {item.body}
        </Text>
        <View style={{width: '100%', height: 1, backgroundColor: 'black'}} />
      </View>
    );
  });

  return (
    <View style={{borderWidth: 1, borderRadius: 10, marginHorizontal: '5%'}}>
      <Text>CheckBox</Text>
      <Button title="Click Here" color="#841584" />
      <Text style={{alignSelf: 'center', fontSize: 30}}>Axios data</Text>
      {isError !== '' && (
        <Text style={{alignSelf: 'center', fontSize: 20}}>{isError}</Text>
      )}
      <FlatList
        data={api}
        renderItem={renderItem}
        // numColumns={2}
        // horizontal={false}
      />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
