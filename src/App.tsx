import * as React from 'react';
import {useEffect} from 'react';

import 'react-native-gesture-handler';

import {LogBox, StatusBar} from 'react-native';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import Orientation from 'react-native-orientation-locker';

import ThemeProvider from './hooks/useTheme';
import Navigation from './services/navigation';

LogBox.ignoreLogs([
  'Warning:', // ignoring useless warnings
  'Require cycle:', // ignoring components cycle warning
]);

export default function App() {
  const customTextProps = {
    style: {
      fontFamily: 'ProductSans-Regular',
    },
  };

  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <ThemeProvider>
      <StatusBar hidden />
      <Navigation />
    </ThemeProvider>
  );
}
