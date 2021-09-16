import * as React from 'react';
import {useContext, useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import LottieView from 'lottie-react-native';
// @ts-ignore
import moment from 'moment';
import {SafeAreaView, Text, View} from 'react-native';
import {Button} from 'react-native-ios-kit';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {clothing, comparision, convert} from '../../hooks/useInfo';
import {ThemeContext} from '../../hooks/useTheme';
import {getCurrentWeather} from '../../services/actions';
import {fontSize} from '../../shared/theme';
import styles from './WeatherInfo.style';

const mapStateToProps = (state) => ({
  weather: state.data.weather,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      isLoading: (action, value) => dispatch({type: action, value}),
      refresh: (action, value) => dispatch({type: action, value}),
      getCurrentWeather,
    },
    dispatch
  );

function WeatherInfo({route, weather, getCurrentWeather}) {
  const navigation = useNavigation();
  const {theme}: any = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState('');
  const [degree, setDegree] = useState('\u00B0C');
  const {city} = route?.params;
  const {error, history, info} = weather;
  navigation.setOptions({
    title: city,
    headerRight: () => (
      <Button
        inline
        centered
        rounded
        style={styles.switcher}
        innerStyle={styles.switcherTitle}
        onPress={() => {
          setTemp(
            convert(`${temp || Math.round(info?.data[0]?.temp)}`, degree)
          );
          setDegree(degree === '\u00B0C' ? '\u00B0F' : '\u00B0C');
        }}>
        {'\u00B0C' + ' | ' + '\u00B0F'}
      </Button>
    ),
  });

  useEffect(() => {
    getCurrentWeather(city);
    setTimeout(() => {
      setDegree('\u00B0C');
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView
        style={{...styles.safeArea, backgroundColor: theme.primary}}>
        <LottieView
          source={require('../../assets/animations/loading.json')}
          style={{
            width: 250,
            alignSelf: 'center',
          }}
          autoPlay
          speed={1.5}
          autoSize
          loop
        />
      </SafeAreaView>
    );
  }

  if (error !== null) {
    return (
      <SafeAreaView
        style={{
          ...styles.safeArea,
          backgroundColor: theme.primary,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 30,
        }}>
        <Text
          style={{
            color: theme.text,
            fontSize: fontSize.mediumLarge,
          }}>
          Oops, an error occurred while trying to fetch the data. Please try
          again!
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{...styles.safeArea, backgroundColor: theme.primary}}>
      <View style={styles.dateAndTime}>
        <Text
          style={{
            color: theme.text,
            fontSize: fontSize.large,
          }}>
          {moment().format('dddd, MMMM Do YYYY')}
        </Text>
        <Text
          style={{
            color: theme.text,
            fontSize: fontSize.huge,
          }}>
          {moment().format('LT')}
        </Text>
      </View>
      <View style={styles.centerInfo}>
        <Text
          style={{
            color: theme.text,
            fontSize: fontSize.titan,
            fontFamily: 'ProductSans-Thin',
          }}>
          {temp === ''
            ? Math.round(info?.data[0]?.temp) + degree
            : temp + degree}
        </Text>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: theme.text, fontSize: fontSize.mediumLarge}}>
            Today is {comparision(info, history, theme)} than yesterday
          </Text>
          <Text style={{color: theme.text, fontSize: fontSize.mediumLarge}}>
            Wear {clothing(Math.round(info?.data[0]?.temp), theme)}
          </Text>
        </View>
      </View>
      <View style={styles.dividerContainer}>
        <Text style={{color: theme.text, fontSize: fontSize.mediumLarge}}>
          {info?.data[0]?.weather?.description}
        </Text>
        <View
          style={{
            height: 0.3,
            width: '85%',
            backgroundColor: theme.lightGray,
          }}
        />
        <Text style={{color: theme.text, fontSize: fontSize.mediumLarge}}>
          Wind speed:{' '}
          {Math.round(Number(info?.data[0]?.wind_spd) * 3.6) + ' km/h'}
        </Text>
      </View>
      <View style={styles.sunTime}>
        <View style={styles.sunInfo}>
          <Text style={{color: theme.text, fontSize: fontSize.mediumLarge}}>
            {info?.data[0]?.sunrise}
          </Text>
          <Feather name='sunrise' color={theme.yellow} size={50} />
        </View>
        <View style={styles.sunInfo}>
          <Text style={{color: theme.text, fontSize: fontSize.mediumLarge}}>
            {info?.data[0]?.sunset}
          </Text>
          <Feather name='sunset' color={theme.yellow} size={50} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);
