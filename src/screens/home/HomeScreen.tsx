import * as React from 'react';
import {useContext} from 'react';

import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ThemeContext} from '../../hooks/useTheme';
import styles from './HomeScreen.style';

export default function HomeScreen() {
  const {theme}: any = useContext(ThemeContext);

  return (
    <LinearGradient
      colors={theme.gradient}
      style={{
        ...styles.container,
      }}>
      <Text style={{...styles.titleTextStyle, color: theme.text}}>
        {Date()}
      </Text>
    </LinearGradient>
  );
}
