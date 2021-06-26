import * as React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import * as NavigationService from 'react-navigation-helpers';

import styles from './DetailScreen.style';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => NavigationService.goBack()}>
        <Text>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
