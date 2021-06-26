import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-dynamic-vector-icons';
import {navigationRef} from 'react-navigation-helpers';

import HomeScreen from '../../screens/home/HomeScreen';
import SearchScreen from '../../screens/search/SearchScreen';
import {SCREENS} from '../../shared/constants';

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
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
          // You can return any component that you like here!
          return (
            <Icon name={iconName} type='Ionicons' size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5931ff',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREENS.HOME} component={renderTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
