import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import MapView from 'react-native-maps';
 
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} >
    <MapView style = {
                {
                    flex: 1
                }
            }
            region = {
                {
                    latitude: 42.882004,
                    longitude: 74.582748,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }
            }
            showsUserLocation = {
                true
            }
            />  
  </View>
);
 
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
 
export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };
 
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
