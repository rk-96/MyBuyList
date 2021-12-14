import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../configs/GlobalStyles';
import language from '../configs/Language';
import * as todoActions from '../redux/reducers/TodoReducer';

const AddScreen = ({navigation}) => {
  const [name, setName] = useState('');

  const config = useSelector(state => state.config);
  const dispatch = useDispatch();

  const addItemToLocalStorage = () => {
    const bundleItem = {
      name: name,
      enable: true,
      favorit: false,
    };

    // Put bundle item into function addItem /redux/reducers/TodoReducer
    dispatch(todoActions.addItem(bundleItem));
    // Pop out to main screen
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: config.fontSize}}>
        {language.ADD_SCREEN_ADD_TODO}
      </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={e => setName(e)}
      />
      <TouchableOpacity
        disabled={name.trim().length > 0 ? false : true}
        style={styles.btn}
        onPress={e => addItemToLocalStorage()}>
        <Text style={{fontSize: config.fontSize}}>
          {language.ADD_SCREEN_ADD_BTN}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    padding: 10,
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  btn: {
    paddingVertical: 10,
    borderWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default AddScreen;
