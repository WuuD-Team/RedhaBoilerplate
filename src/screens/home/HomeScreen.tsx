import * as React from 'react';
import {useContext} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import * as NavigationService from 'react-navigation-helpers';

import {ThemeContext} from '../../hooks/useTheme';
import {SCREENS} from '../../shared/constants';
import styles from './HomeScreen.style';

export default function HomeScreen() {
  const {theme}: any = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.primary,
      }}>
      <Text> HomeScreen </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => NavigationService.navigate(SCREENS.DETAIL)}>
        <Text>Go To Detail Screen</Text>
      </TouchableOpacity>
      <Text />
    </View>
  );
}
