import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  WebView 
} from 'react-native';
import Footer from './Footer';

export default class Livestream extends Component {
  render() {
    var url = 'http://10.25.1.84:5000/livestream';

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Live Stream</Text>
        <WebView source={{uri: url}}/>
      <Footer navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,         // start below status bar
    backgroundColor: '#FFF',
    flex: .9
  },
  header: {
    fontSize: 20,
    fontFamily: 'AudiType-ExtendedBold',
    paddingBottom: 10,
    color: '#000',
    paddingLeft: 5
  }
});