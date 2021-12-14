import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ViewShot from 'react-native-view-shot';
import images from '../configs/Images';
import moment from 'moment';
import language from '../configs/Language';

const DrawImage = ({list, viewShotRef}) => {
  const [done, setDone] = useState([]);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    const doneCloned = [];
    const pendingCloned = [];
    list.map(item => {
      if (!item.enable) {
        doneCloned.push(item);
        return;
      }

      pendingCloned.push(item);
    });

    setDone(doneCloned);
    setPending(pendingCloned);
  }, [list]);

  return (
    <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 1}}>
      <View style={styles.container}>
        <View style={styles.groupImg}>
          <Image source={images.logo} style={styles.logoImg} />
          <Text>{moment().format('DD MMMM YYYY')}</Text>
          <Text>{moment().format('hh:mm:ss น.')}</Text>
        </View>
        {done.length > 0 && (
          <Text style={styles.title}>{language.DRAW_IMAGE_SUCCESS}</Text>
        )}
        {done.map(item => (
          <View key={`DONE_${item.name}`}>
            <Text>{item.name}</Text>
          </View>
        ))}
        {pending.length > 0 && (
          <Text style={styles.title}>{language.DRAW_IMAGE_PENDING}</Text>
        )}
        {pending.map(item => (
          <View key={`PENDING_${item.name}`}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </View>
    </ViewShot>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  groupImg: {
    alignItems: 'center',
  },
  logoImg: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
  },
});

export default DrawImage;
