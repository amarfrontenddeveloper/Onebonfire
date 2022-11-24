import {View, Text} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = userObj => {
    setIsLoading(true);
    axios
      .post('http://103.117.66.70:5001/api/Token/applogin', userObj)
      
      .then(res => {
        if(res.status === 200){
          setUserToken(res.data.token);
          setUserInfo(res.data);  
          AsyncStorage.setItem('userInfo',JSON.stringify(res));
          AsyncStorage.setItem('userToken', res.data.token);
        }else{
          alert('check password')
        }
      })
      .catch(e => console.log(e));
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userInfo');

    setUserToken(null);
    setIsLoading(false);
  };

  const isLogin = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
      userInfo = JSON.parse(userInfo);
      if(userInfo){
        setUserToken(userToken)
        setUserInfo(userInfo)
      }
      console.log('userInfo',userInfo)
  

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLogin();
  }, []);

  // console.log('userInfo',userInfo);
  console.log('userData',userToken);
  return (
    <AuthContext.Provider value={{login, logout, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
