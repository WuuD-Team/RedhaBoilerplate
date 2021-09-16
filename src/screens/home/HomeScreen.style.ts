import {ScreenWidth} from '@freakycoder/react-native-helpers';
import {ViewStyle, TextStyle, StyleSheet} from 'react-native';

import {fontSize} from '../../shared/theme';

interface Style {
  safeArea: ViewStyle;
  mainView: ViewStyle;
  titleContainer: ViewStyle;
  titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  safeArea: {
    flex: 1,
    width: ScreenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    width: ScreenWidth,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignSelf: 'flex-start',
    marginTop: 25,
    marginBottom: 8,
    marginLeft: 15,
  },
  titleTextStyle: {
    fontSize: fontSize.veryLarge,
    fontFamily: 'ProductSans-Bold',
  },
});
