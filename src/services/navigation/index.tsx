// noinspection JSConstantReassignment

import * as React from 'react';
import {useContext} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

import {ThemeContext} from '../../hooks/useTheme';
import HomeScreen from '../../screens/home/HomeScreen';
import SplashScreen from '../../screens/splashScreen/SplashScreen';
import WeatherInfo from '../../screens/weatherInfo';
import {SCREENS} from '../constants';
import {navigationRef, isReadyRef} from './RootNavigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  React.useEffect(
    () => () => {
      // @ts-ignore
      isReadyRef.current = false;
    },
    []
  );
  const {theme}: any = useContext(ThemeContext);

  // Fading transition animation
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  const renderTabNavigation = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';
          if (route.name === SCREENS.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === SCREENS.WEATHER_INFO) {
            iconName = focused ? 'ios-search' : 'ios-search';
          }
          return (
            <Icon name={iconName} type='Ionicons' size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        showLabel: true,
        labelStyle: {
          fontFamily: 'ProductSans-Bold',
        },
        activeTintColor: theme.blue,
        inactiveTintColor: theme.gray,
        tabStyle: {
          backgroundColor: theme.contrast,
        },
        style: {borderTopColor: theme.divider},
      }}>
      <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Tab.Screen name={SCREENS.WEATHER_INFO} component={WeatherInfo} />
    </Tab.Navigator>
  );

  // --- TRANSITION PRESETS ---
  // SlideFromRightIOS - Standard iOS navigation transition.
  // ModalSlideFromBottomIOS - Standard iOS navigation transition for modals.
  // ModalPresentationIOS - Standard iOS modal presentation style (introduced in iOS 13).
  // FadeFromBottomAndroid - Standard Android navigation transition when opening or closing.
  // RevealFromBottomAndroid - Standard Android navigation transition when opening or closing.
  // ScaleFromCenterAndroid - Standard Android navigation transition when opening or closing.
  // DefaultTransition - Default navigation transition for the current platform.
  // ModalTransition - Default modal transition for the current platform.

  // --- CardStyle Interpolators ---
  // forHorizontalIOS - Standard iOS-style slide in from the right.
  // forVerticalIOS - Standard iOS-style slide in from the bottom (used for modals).
  // forModalPresentationIOS - Standard iOS-style modal animation in iOS 13.
  // forFadeFromBottomAndroid - Standard Android-style fade in from the bottom for Android Oreo.
  // forRevealFromBottomAndroid - Standard Android-style reveal from the bottom for Android Pie.

  return (
    <NavigationContainer
      // @ts-ignore
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        isReadyRef.current = true;
      }}>
      <SafeAreaView style={{flex: 1, backgroundColor: theme.primary}}>
        <Stack.Navigator
          initialRouteName={SCREENS.SPLASH}
          screenOptions={() => ({
            headerShown: false, // `true` to show Tab Header
            headerStyle: {
              backgroundColor: theme.primary,
              shadowColor: 'transparent',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: theme.text,
            },
            gestureEnabled: true, // `false` to disable gestures globally
            // ...TransitionPresets.ModalPresentationIOS, // FOR GLOBAL Transition Presets
            // cardStyleInterpolator: forFade, // FOR GLOBAL TRANSITION ANIMATION
          })}>
          <Stack.Screen name={SCREENS.SPLASH} component={SplashScreen} />
          <Stack.Screen
            options={{
              title: 'Home',
              headerShown: false,
              cardStyleInterpolator: forFade, // OR CardStyleInterpolators.PRESETS-ABOVE
              // ...TransitionPresets.ModalPresentationIOS, // OR TransitionPresets.PRESETS-ABOVE
            }}
            name={SCREENS.HOME}
            component={HomeScreen}
          />
          <Stack.Screen
            name={SCREENS.WEATHER_INFO}
            options={{
              headerShown: true,
              headerTitleStyle: {
                fontWeight: '100',
                fontSize: 25,
                fontFamily: 'ProductSans-Regular',
                color: theme.text,
              },
              headerBackTitleStyle: {
                color: theme.blue,
              },
              headerTintColor: theme.blue,
              ...TransitionPresets.SlideFromRightIOS, // OR TransitionPresets.PRESETS-ABOVE
            }}>
            {(props) => <WeatherInfo {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Navigation;
