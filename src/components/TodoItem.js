import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../configs/GlobalStyles';
import * as todoActions from '../redux/reducers/TodoReducer';
import CheckBox from './CheckBox';
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoItem = ({item, index}) => {
  const {fontSize} = useSelector(state => state.config);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <CheckBox
        enable={item.enable}
        updateFunc={() => {
          dispatch(todoActions.updateItem(index));
        }}
      />
      <View style={[globalStyles.container, styles.content]}>
        <Text
          style={[!item.enable && styles.disableText, {fontSize: fontSize}]}>
          {item.name}
        </Text>
      </View>
      <View style={[globalStyles.row, styles.groupBtn]}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(todoActions.updateFavorite(index))}>
          <Icon name="heart" size={20} color={item.favorite ? 'red' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(todoActions.deleteItem(index))}>
          <Icon name="trash" size={20} color={'gray'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  disableText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  container: {
    ...globalStyles.container,
    ...globalStyles.row,
    marginVertical: 2.5,
    backgroundColor: 'white',
    padding: 10,
  },
  content: {
    paddingLeft: 7.5,
    justifyContent: 'center',
  },
  groupBtn: {
    alignItems: 'center',
  },
  btn: {
    marginHorizontal: 7.5,
  },
});

export default TodoItem;
