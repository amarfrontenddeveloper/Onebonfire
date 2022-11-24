import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomOnebonfire from './CustomOnebonfire';

const More = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <CustomOnebonfire/> */}
      
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
      </View>
      <View style={styles.imgUpload}><Text style={styles.rp}>RP</Text></View>
      <View style={styles.userData}>
        <Text style={styles.userName}>RituRaj Pandey</Text>
        <Text style={styles.userInc}>OK Botanicals Inc</Text>
        <Text style={styles.userInc}>
          Up to 15 Listings<Text style={{fontWeight: 'bold'}}>(Active)</Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
      </View>
      <TouchableOpacity onPress={()=>alert("Hello User")}
        style={{flexDirection: 'row', paddingVertical: 15, marginLeft: 20}}>
        <Icons name="account" color="black" size={30} />
        <Text style={styles.userDetails}>User Account</Text>
        <Icons name="greater-than" color="black" size={30} style={{marginLeft:170,}} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
      </View>
      <TouchableOpacity onPress={()=>alert("Hello User")}
        style={{flexDirection: 'row', paddingVertical: 15, marginLeft: 20}}>
        <Icons name="briefcase" color="black" size={30} />
        <Text style={styles.userDetails}>Business Profile</Text>
        <Icons name="greater-than" color="black" size={30} style={{marginLeft:150,}} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
      </View>
      <TouchableOpacity onPress={()=>alert("Hello User")}
        style={{flexDirection: 'row', paddingVertical: 15, marginLeft: 20}}>
        <Icons name="contacts" color="black" size={30} />
        <Text style={styles.userDetails}>Contact Support</Text>
        <Icons name="greater-than" color="black" size={30} style={{marginLeft:150,}} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
      </View>
      <TouchableOpacity onPress={()=>alert("Hello User")}
        style={{flexDirection: 'row', paddingVertical: 15, marginLeft: 20}}>
        <Icons name="book-open-page-variant" color="black" size={30} />
        <Text style={styles.userDetails}>Terms and Conditions</Text>
        <Icons name="greater-than" color="black" size={30} style={{marginLeft:105,}} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
      </View>
      <TouchableOpacity onPress={()=>alert("Hello User")}
        style={{flexDirection: 'row', paddingVertical: 15, marginLeft: 20}}>
        <Icons name="file-document-multiple" color="black" size={30} />
        <Text style={styles.userDetails}>Privacy Policy</Text>
        <Icons name="greater-than" color="black" size={30} style={{marginLeft:170,}} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
      </View>
      <Text style={styles.version}>Version: 1.026</Text>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  userData: {
    marginTop: '10%',
  },
  userName: {
    fontSize: 20,
    alignSelf: 'center',
  },
  userInc: {
    fontSize: 16,
    alignSelf: 'center',
  },
  userDetails: {
    marginLeft: 10,
    fontSize: 18,
    marginTop: 5,
  },
  version: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 18,
  },
  imgUpload:{
    width:70,
    height:70,
    alignSelf:'center',
    borderRadius:70/2,
    marginTop:30,
    backgroundColor:'cyan',
  },
  rp:{
    fontSize:30,
    marginLeft:15,
    marginTop:12,
  }
});
