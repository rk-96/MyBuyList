import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigations from './navigations';
import {store, persistor} from './redux';
import SplashScreen from 'react-native-splash-screen';
import 'moment/locale/th';
import globalStyles from './configs/GlobalStyles';

const Root = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigations />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default Root;
