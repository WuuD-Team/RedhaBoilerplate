import * as React from 'react';
import 'react-native-gesture-handler';

import {StatusBar} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Orientation from 'react-native-orientation-locker';

import Navigation from './src/services/navigation';

interface AppState {
  isLoaded: boolean;
}

export default class App extends React.Component<AppState, any> {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
    // LOCK DEVICE ORIENTATION
    Orientation.lockToPortrait();
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          isLoaded: true,
        }),
      1500
    );
  }

  render() {
    const {isLoaded} = this.state;
    return (
      <>
        <StatusBar hidden />
        <AnimatedSplash
          transluent
          isLoaded={isLoaded}
          backgroundColor='#262626'
          imageBackgroundResizeMode='center'
          logoImage={require('./src/assets/images/logo.png')}>
          <Navigation />
        </AnimatedSplash>
      </>
    );
  }
}
