import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {ScreenWidth} from '@freakycoder/react-native-helpers';
import {fontSize} from '../../shared/theme';

interface Style {
  container: ViewStyle;
  card: ViewStyle;
  cardCity: ViewStyle;
  titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  card: {
    height: ScreenWidth * 0.45,
    width: ScreenWidth * 0.9,
    flexDirection: 'column',
    marginTop: 12,
    marginBottom: '65%',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 10,
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
  },
  cardCity: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  titleTextStyle: {
    marginLeft: 4,
    fontSize: fontSize.large + 2,
    fontFamily: 'ProductSans-Regular',
  },
});
