import {ScreenWidth} from '@freakycoder/react-native-helpers';
import {ViewStyle, StyleSheet, TextStyle} from 'react-native';

import {fontSize} from '../../shared/theme';

interface Style {
  safeArea: ViewStyle;
  dateAndTime: ViewStyle;
  centerInfo: ViewStyle;
  dividerContainer: ViewStyle;
  sunTime: ViewStyle;
  sunInfo: ViewStyle;
  switcher: ViewStyle;
  switcherTitle: TextStyle;
}

export default StyleSheet.create<Style>({
  safeArea: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: ScreenWidth,
    alignItems: 'center',
  },
  dateAndTime: {
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerInfo: {
    height: 250,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dividerContainer: {
    width: '100%',
    height: 90,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sunTime: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sunInfo: {
    height: 100,
    width: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switcher: {
    marginRight: 20,
    borderWidth: 0,
  },
  switcherTitle: {
    fontSize: fontSize.large,
  },
});
