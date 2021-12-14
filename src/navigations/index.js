import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import FavoritScreen from '../screens/FavoritScreen';
import SettingScreen from '../screens/SettingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import language from '../configs/Language';

const Tab = createBottomTabNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Icon name="home" size={30} color={focused ? 'blue' : 'gray'} />
            ),
          }}
        />
        <Tab.Screen
          name="FavoritScreen"
          component={FavoritScreen}
          options={{
            headerTitle: language.SCREEN_TITLE_FAVORITE,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Icon name="heart" size={30} color={focused ? 'blue' : 'gray'} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            headerTitle: language.SCREEN_TITLE_SETTING,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Icon name="gear" size={30} color={focused ? 'blue' : 'gray'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
