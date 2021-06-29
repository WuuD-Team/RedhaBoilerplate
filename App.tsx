import * as React from 'react';

import 'react-native-gesture-handler';

import {StatusBar} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Orientation from 'react-native-orientation-locker';

import ThemeProvider from './src/hooks/useTheme';
import Navigation from './src/services/navigation';

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

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
        logoImage={require('./src/assets/images/logo.png')}>
        <Navigation />
      </AnimatedSplash>
    </ThemeProvider>
  );
}
