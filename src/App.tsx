import * as React from 'react';

import 'react-native-gesture-handler';

import {StatusBar} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import Orientation from 'react-native-orientation-locker';

import ThemeProvider from './hooks/useTheme';
import Navigation from './services/navigation';

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const customTextProps = {
    style: {
      fontFamily: 'ProductSans-Regular',
    },
  };

  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);

  React.useEffect(() => {
    Orientation.lockToPortrait();
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  return (
    <ThemeProvider>
      <StatusBar hidden />
      <AnimatedSplash
        transluent
        isLoaded={isLoaded}
        backgroundColor='#1C1F26'
        imageBackgroundResizeMode='center'
        logoImage={require('./assets/images/logo.png')}>
        <Navigation />
      </AnimatedSplash>
    </ThemeProvider>
  );
}
