import * as React from 'react';
import {useEffect} from 'react';

import 'react-native-gesture-handler';

import {StatusBar} from 'react-native';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import Orientation from 'react-native-orientation-locker';

import ThemeProvider from './hooks/useTheme';
import SplashScreen from './screens/splashScreen/SplashScreen';
import Navigation from './services/navigation';

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
