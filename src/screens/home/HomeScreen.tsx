import * as React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import * as NavigationService from 'react-navigation-helpers';

import {SCREENS} from '../../shared/constants';
import styles from './HomeScreen.style';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
