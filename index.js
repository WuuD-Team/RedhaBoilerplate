import * as React from 'react';

import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import {name as appName} from './app.json';
import App from './src/App';
import store from './src/services/store/configureStore';

// KEEP IT CALM
LogBox.ignoreLogs([
  'Warning:', // ignoring useless warnings
  'Require cycle:', // ignoring components cycle warning
]);

const persistor = persistStore(store);

const Redux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
