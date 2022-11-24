import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useState } from 'react';
// import {AuthContext} from '../Context/AuthProvider';
import { AuthContext } from './AuthProvider';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  const userObj = {
    email: email,
    password: password,
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.logoContainer}>
        <Image
          style={styles.oneLogo}
          source={require('../assest/Onebonfire.png')}
        />
      </View> */}
      <TextInput style={styles.inputEmail} placeholder="Email ID" name={'email'} onChangeText={value => setEmail(value)} />
      
      <TextInput
        style={styles.inputPassword}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity style={styles.btnLogin}>
        <Text
          onPress={() => {
              login(userObj)
              navigation.navigate('Home')
          }}
          style={styles.btnText}>
          Log In
        </Text>
      </TouchableOpacity>

      <Text style={styles.forgotPass}>Forgot Password?</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // logoContainer: {
  //   marginHorizontal: '18%',
  //   marginTop: '20%',
  //   height: '35%',
  //   padding:'2%'
  // },
  // oneLogo: {
  //   width: '100%',
  //   height: '20%',
  // },
  inputEmail: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: '10%',
    backgroundColor: 'light',
    marginTop: '30%',
  },
  inputPassword: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: '10%',
    marginTop: '8%',
  },
  btnLogin: {
    borderWidth: 1,
    padding: 15,
    marginTop: '15%',
    marginHorizontal: '10%',
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  btnText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPass: {
    marginTop: '2%',
    marginLeft: '50%',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
