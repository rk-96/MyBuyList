import React from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import TodoItem from '../components/TodoItem';
import globalStyles from '../configs/GlobalStyles';

const HomeScreen = () => {
  // Get item in local storage by key = todo
  // Ref. /redux/index.js look to reducersConfig
  const {list} = useSelector(state => state.todo);

  return (
    <View styles={globalStyles.container}>
      <ScrollView>
        {list.map((item, index) => {
          return (
            <TodoItem
              key={`HOME_SCREEN_${item.name}`}
              item={item}
              index={index}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
