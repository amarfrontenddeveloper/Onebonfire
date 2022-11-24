import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Community from '../src/component/Community';
import Home from '../src/component/Home';
import Messages from '../src/component/Messages';
import More from '../src/component/More';
import My_Stuff from '../src/component/My_Stuff';

const Tab = createBottomTabNavigator();

function TabNavigations() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Community') {
            iconName = focused ? 'account-details' : 'account-details';
          } else if (route.name === 'My_Stuff') {
            iconName = focused ? 'account-tie' : 'account-tie';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'android-messages' : 'android-messages';
          } else if (route.name === 'More') {
            iconName = focused ? 'more' : 'more';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
      })}>
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="My_Stuff" component={My_Stuff} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}

export default TabNavigations;
