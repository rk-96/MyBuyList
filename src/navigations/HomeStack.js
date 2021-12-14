import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import language from '../configs/Language';

const Stack = createNativeStackNavigator();

const Button = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{padding: 7.5}} // eslint-disable-line react-native/no-inline-styles
      onPress={() => navigation.push('AddScreen')}>
      <Icon name="plus" size={20} />
    </TouchableOpacity>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation}) => ({
          title: language.SCREEN_TITLE_HOME,
          headerRight: () => <Button navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          title: language.SCREEN_TITLE_ADD_TODO,
          headerBackTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
