import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@mapbox/react-native-mapbox-gl";

MapboxGL.setAccessToken("YOUR API KEY HERE");

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          styleURL={MapboxGL.styleURL}
          zoomLevel={16}
          userTrackingMode={1}
          showUserLocation={true}
          style={{
            flex: 1
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
