import * as React from 'react';
import {useContext} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {navigationRef} from 'react-navigation-helpers';

import {ThemeContext} from '../../hooks/useTheme';
import HomeScreen from '../../screens/home/HomeScreen';
import SearchScreen from '../../screens/search/SearchScreen';
import {SCREENS} from '../../shared/constants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const {theme}: any = useContext(ThemeContext);
  const renderTabNavigation = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';
          if (route.name === SCREENS.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === SCREENS.SEARCH) {
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
      <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={{flex: 0, backgroundColor: theme.primary}} />
      <SafeAreaView style={{flex: 1, backgroundColor: theme.contrast}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={SCREENS.HOME} component={renderTabNavigation} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Navigation;
