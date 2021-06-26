import './logbox';
import 'react-native-gesture-handler';
import {AppRegistry, YellowBox} from 'react-native';

import App from './App';
import {name as appName} from './app.json';

// KEEP IT CALM
YellowBox.ignoreWarnings([
  'Warning:', // ignoring useless warnings
  'Require cycle:', // ignoring components cycle warning
]);

AppRegistry.registerComponent(appName, () => App);
