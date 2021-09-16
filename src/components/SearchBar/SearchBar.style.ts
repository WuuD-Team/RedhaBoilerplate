import {ScreenWidth} from '@freakycoder/react-native-helpers';
import {ViewStyle, StyleSheet, TextStyle} from 'react-native';

import {colors, fontSize} from '../../shared/theme';

interface Style {
  mainContainer: ViewStyle;
  main: ViewStyle;
  searchBar: ViewStyle;
  suggestions: ViewStyle;
  suggestionsContainer: ViewStyle;
  suggestionsInnerContainer: ViewStyle;
  removeButton: ViewStyle;
  goButton: ViewStyle;
  buttonTitle: TextStyle;
  suggestionText: TextStyle;
  historyText: TextStyle;
}

export default StyleSheet.create<Style>({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: ScreenWidth * 0.9,
  },
  searchBar: {
    padding: 0,
    alignSelf: 'center',
    width: ScreenWidth * 0.9,
    borderTopColor: 'transparent',
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  suggestions: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  suggestionsContainer: {
    width: '100%',
    paddingLeft: 15,
    paddingVertical: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  suggestionsInnerContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
  },
  suggestionText: {
    width: '80%',
    overflow: 'hidden',
    color: colors.dark.text,
    fontSize: fontSize.medium,
  },
  goButton: {
    height: 50,
    marginBottom: 40,
    width: ScreenWidth * 0.95,
    alignSelf: 'center',
    backgroundColor: colors.dark.blue,
  },
  buttonTitle: {
    fontSize: fontSize.large,
    fontFamily: 'ProductSans-Bold',
    color: colors.dark.text,
    fontWeight: '400',
  },
  historyText: {
    width: '80%',
    overflow: 'hidden',
    color: colors.dark.text,
    fontSize: fontSize.medium,
  },
  removeButton: {
    right: 40,
    borderWidth: 0,
  },
});
