import {ViewStyle, TextStyle, StyleSheet} from 'react-native';

interface Style {
  container: ViewStyle;
  titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyle: {
    fontSize: 32,
  },
});
