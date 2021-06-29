import * as React from 'react';
import {useContext} from 'react';

import {Text, View} from 'react-native';

import {ThemeContext} from '../../hooks/useTheme';
import styles from './HomeScreen.style';

export default function HomeScreen() {
  const {theme}: any = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.primary,
      }}>
      <Text />
    </View>
  );
}
