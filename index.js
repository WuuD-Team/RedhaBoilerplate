import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';

import {name as appName} from './app.json';
import App from './src/App';

// KEEP IT CALM
LogBox.ignoreLogs([
  'Warning:', // ignoring useless warnings
  'Require cycle:', // ignoring components cycle warning
]);

AppRegistry.registerComponent(appName, () => App);
