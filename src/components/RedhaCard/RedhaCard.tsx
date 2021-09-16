import * as React from 'react';
import {useContext, useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import LottieView from 'lottie-react-native';
import {TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

import {ThemeContext} from '../../hooks/useTheme';
import {SCREENS} from '../../services/constants';
import {fontSize} from '../../shared/theme';
import styles from './RedhaCard.style';

const mapStateToProps = (state) => ({
  weather: state.data.weather,
});

function RedhaCard({weather}) {
  const navigation = useNavigation();
  const {theme}: any = useContext(ThemeContext);
  const {info} = weather;
  const [temp, setTemp] = useState('');
  const [degree, setDegree] = useState('\u00B0C');

  useEffect(() => {
    info && setTemp(`${Math.round(info?.data[0]?.temp)}`);
    info && setDegree('\u00B0C');
  }, [weather]);

  const onCardPress = () => {
    navigation.navigate(SCREENS.WEATHER_INFO, {
      city: info?.data[0]?.city_name,
    });
  };

  return (
    <View style={{alignItems: 'flex-start'}}>
      <Animatable.Text
        animation='slideInLeft'
        easing='ease'
        useNativeDriver
        iterationCount={1}
        style={{...styles.titleTextStyle, color: theme.text}}>
        Your last saved location
      </Animatable.Text>
      <Animatable.View
        animation='fadeInUp'
        easing='linear'
        useNativeDriver
        iterationCount={1}>
        <TouchableOpacity
          onPress={() => onCardPress()}
          style={{...styles.card, shadowColor: theme.shadow}}>
          <LinearGradient colors={theme.card} style={styles.container}>
            <View style={styles.cardCity}>
              <Animatable.Text
                animation='slideInDown'
                easing='ease'
                useNativeDriver
                iterationCount={1}
                style={{
                  color: theme.text,
                  fontSize: fontSize.veryLarge - 5,
                  fontFamily: 'ProductSans-Bold',
                }}>
                {info?.data[0]?.city_name}
              </Animatable.Text>
              <Animatable.Text
                animation='slideInUp'
                easing='ease'
                useNativeDriver
                iterationCount={1}
                style={{
                  color: theme.text,
                  fontSize: fontSize.veryHuge,
                  fontFamily: 'ProductSans-Thin',
                }}>
                {temp + degree}
              </Animatable.Text>
            </View>
            <Animatable.View
              animation='zoomIn'
              easing='ease-in'
              useNativeDriver
              iterationCount={1}>
              <LottieView
                source={require('../../assets/animations/weather.json')}
                style={{
                  width: 100,
                  alignSelf: 'center',
                }}
                autoPlay
                speed={0.6}
                autoSize
                loop
              />
            </Animatable.View>
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

export default connect(mapStateToProps)(RedhaCard);
