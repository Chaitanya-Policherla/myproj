import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import tabs from './tabs';
import maps from './maps';

class HomeScreen extends React.Component {
  Clicked() {
    console.log('Test Log');
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Maps"
          onPress={() => this.props.navigation.navigate('Maps')}
        />
        <Button onPress={this.Clicked} title="click to Debug" />
      </View>
    );
  }
}

class MyComponent extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    this.setState({fontLoaded: true});
  }
  async _loadAssetsAsync() {
    this.setState({fontLoaded: true});
  }

  render() {
    // if (!this.state.isReady) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadAssetsAsync}
    //       onFinish={() => this.setState({ isReady: true })}
    //       onError={console.warn}
    //     />
    //   );
    // }
    return (
      // <View style={styles.container}>
      // <Text style={{ fontFamily: 'open-sans-bold', fontSize: 56 }}>Open up App.js to start working on your app!</Text>
      // <Ionicons name="md-checkmark-circle" size={32} color="green" />
      // </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {this.state.fontLoaded ? <Text>Hello, world!</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go to Tabs"
          onPress={() => this.props.navigation.navigate('Tabs')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    MyComponent: MyComponent,
    Details: DetailsScreen,
    Tabs: tabs,
    Maps: maps,
  },
  {
    initialRouteName: 'Home',
  },
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
