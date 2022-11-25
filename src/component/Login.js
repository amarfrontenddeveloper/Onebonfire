import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {AuthContext} from '../Context/AuthProvider';
import {AuthContext} from './AuthProvider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const [eye, setEye] = useState(false);
  const [visible, setVisible] = useState(true);

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const showValidEmail = () => {
    !email ? setIsValidEmail(true) : setIsValidEmail(false);
  };

  const showValidPassword = () => {
    !password ? setIsValidPassword(true) : setIsValidPassword(false);
  };

  const {userLogin} = useContext(AuthContext);

  const userObj = {
    email: email,
    password: password,
  };

  const submitLogin = async () => {
    if (email && password) {
      const response = await userLogin(userObj);
      if (response && response?.token) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Invalid Email/password');
      }
    } else {
      Alert.alert('Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.logoContainer}>
        <Image
          style={styles.oneLogo}
          source={require('../assest/Onebonfire.png')}
        />
      </View> */}
      <TextInput
        style={styles.inputEmail}
        placeholder="Email ID"
        name={'email'}
        onChangeText={value => setEmail(value)}
        onEndEditing={showValidEmail}
      />
      {isValidEmail && (
        <Text style={{color: 'red', marginLeft: '10%'}}>
          Please enter email id
        </Text>
      )}
      {isValidEmail && <Text style={{color: 'red', marginLeft: '10%'}}></Text>}

      <TextInput
        style={styles.inputPassword}
        placeholder="Password"
        secureTextEntry={visible}
        onChangeText={value => setPassword(value)}
        onEndEditing={showValidPassword}
      />
      <TouchableOpacity
        style={styles.eye}
        onPress={() => {
          setEye(!eye);
          setVisible(!visible);
        }}>
        <View>
          <Icon
            name={eye === false ? 'eye-off' : 'eye'}
            size={30}
            color="black"
          />
        </View>
      </TouchableOpacity>
      {isValidPassword && (
        <Text style={{color: 'red', marginLeft: '10%'}}>
          Please enter password
        </Text>
      )}
      {isValidPassword && (
        <Text style={{color: 'red', marginLeft: '10%'}}></Text>
      )}
      <TouchableOpacity
        onPress={submitLogin}
        style={styles.btnLogin(!email || !password)}>
        <Text style={styles.btnText}>Log In</Text>
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
    position: 'relative',
  },
  btnLogin: value => ({
    borderWidth: 1,
    padding: 15,
    marginTop: '15%',
    marginHorizontal: '10%',
    borderRadius: 10,
    backgroundColor: value ? 'gray' : 'blue',
  }),
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
  eye: {
    position: 'absolute',
    marginTop: 225,
    marginLeft: '80%',
  },
});
