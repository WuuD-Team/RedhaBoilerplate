import * as React from 'react';
import {useEffect} from 'react';

// @ts-ignore
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

import * as RootNavigation from '../../services/navigation/RootNavigation';
import {SCREENS} from '../../shared/constants';
import styles from './SplashScreen.style';

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      RootNavigation.navigate(SCREENS.HOME);
    }, 1500);
  }, []);

  return (
    <LinearGradient
      colors={['#1B1F25', '#1c1c1c']}
      style={{
        ...styles.container,
      }}>
      <LottieView
        source={require('../../assets/animations/splash.json')}
        style={{
          width: 400,
          alignSelf: 'center',
        }}
        autoPlay
        speed={1.5}
        autoSize
        loop
      />
    </LinearGradient>
  );
}
