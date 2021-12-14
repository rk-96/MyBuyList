import React, {useRef} from 'react';
import {
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import DrawImage from '../components/DrawImage';
import globalStyles from '../configs/GlobalStyles';
import language from '../configs/Language';
import * as configActions from '../redux/reducers/ConfigReducer';
import CameraRoll from '@react-native-community/cameraroll';

const SettingScreen = () => {
  let viewShotRef = useRef(null);
  const {list} = useSelector(state => state.todo);
  const config = useSelector(state => state.config);
  const dispatch = useDispatch();

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  const saveImage = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      alert('Can not access to storage'); // eslint-disable-line no-alert
      return;
    }

    viewShotRef.current.capture().then(item => {
      CameraRoll.save(item, {type: 'photo', album: 'My Buy List'})
        .then(() => {
          alert('บันทึกสำเร็จ'); // eslint-disable-line no-alert
        })
        .catch(error => {
          alert(error.message); // eslint-disable-line no-alert
        });
    });
  };

  return (
    <View style={[globalStyles.container, styles.container]}>
      <ScrollView>
        <Text>{language.SETTING_SCREEN_FONT_SIZE}</Text>
        <View style={styles.containerBtn}>
          <TouchableOpacity
            style={[
              config.fontSize === 14 && styles.btnActivated,
              styles.fontBtn,
            ]}
            // Dispatch function setSmallFont in file /redux/reducers/ConfigReducer
            onPress={() => dispatch(configActions.setSmallFont())}>
            <Text>{language.SETTING_SCREEN_SMALL}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              config.fontSize === 18 && styles.btnActivated,
              styles.fontBtn,
            ]}
            onPress={() => dispatch(configActions.setMediumFont())}>
            <Text>{language.SETTING_SCREEN_MEDIUM}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              config.fontSize === 22 && styles.btnActivated,
              styles.fontBtn,
            ]}
            onPress={() => dispatch(configActions.setLargeFont())}>
            <Text>{language.SETTING_SCREEN_LARGE}</Text>
          </TouchableOpacity>
        </View>

        <DrawImage list={list} viewShotRef={viewShotRef} />
        <TouchableOpacity style={styles.saveImgBtn} onPress={() => saveImage()}>
          <Text style={styles.saveImgLable}>
            {language.SETTING_SCREEN_SAVE_IMAGE}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  fontBtn: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 2.5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnActivated: {
    backgroundColor: 'gray',
  },
  containerBtn: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  saveImgBtn: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },
  saveImgLable: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.7,
  },
});

export default SettingScreen;
