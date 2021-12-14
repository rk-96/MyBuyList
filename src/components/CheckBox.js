import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckBox = ({enable, updateFunc}) => {
  return (
    <View style={styles.container}>
      {enable ? (
        <TouchableOpacity onPress={() => updateFunc()} style={styles.btn} />
      ) : (
        <TouchableOpacity style={styles.btn} onPress={() => updateFunc()}>
          <Icon name="check" size={20} color="green" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  btn: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default CheckBox;
