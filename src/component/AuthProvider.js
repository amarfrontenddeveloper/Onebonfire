import {View, Text} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const userLogin = userObj => {
    return axios
      .post('http://103.117.66.70:5001/api/Token/applogin', userObj)
      .then(function (response) {
        if (response?.status === 200) {
          setToken(response?.data?.token);
          setUserInfo(JSON.stringify(response?.data));
          AsyncStorage.setItem('userInfo', JSON.stringify(response));
          AsyncStorage.setItem('userToken', response?.data?.token);
        }
        return response?.data;
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  console.log('userInfo...', userInfo);

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem('userToken');
    const isToken =  AsyncStorage.removeItem('userInfo');
    return isToken;

    setToken(null);
    setIsLoading(false);
  };

  const isLogin = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
      }

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLogin();
  }, []);

  return (
    <AuthContext.Provider value={{userLogin, logout, token, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
