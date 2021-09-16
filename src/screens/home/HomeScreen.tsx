import * as React from 'react';
import {useContext} from 'react';

import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';

import RedhaCard from '../../components/RedhaCard/RedhaCard';
import WeatherSearchBar from '../../components/SearchBar';
import {ThemeContext} from '../../hooks/useTheme';
import styles from './HomeScreen.style';

const mapStateToProps = (state) => ({
  weather: state.data.weather,
});

function HomeScreen({weather}) {
  const {theme}: any = useContext(ThemeContext);
  const {lastFetch, error} = weather;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView
        style={{...styles.safeArea, backgroundColor: theme.primary}}>
        <View style={styles.mainView}>
          <View style={{flex: 1, padding: 10, alignItems: 'center'}}>
            <View style={styles.titleContainer}>
              <Animatable.Text
                animation='slideInLeft'
                easing='ease'
                useNativeDriver
                style={{...styles.titleTextStyle, color: theme.text}}>
                Relative Weather
              </Animatable.Text>
            </View>
            <WeatherSearchBar />
          </View>
        </View>
        {(lastFetch !== null || error !== null) && <RedhaCard />}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default connect(mapStateToProps)(HomeScreen);
