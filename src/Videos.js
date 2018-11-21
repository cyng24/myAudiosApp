import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View
} from 'react-native';
import Footer from './Footer';
import { db } from './service/firebase'

export default class Videos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: ['video01.mp4', 'video02.mp4']
    }
    this.itemsRef = db.ref().child('items');
  }

  listenForItems(itemsRef) {
    console.log("Listening for items on VideoPage: ", itemsRef);
    itemsRef.on('value', (snap) => {
      console.log("Value detected, setting videos state...")
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          url: child.val().url,
          _key: child.key
        });
      });
      this.setState({ videos: items });
    });
  }

  componentDidMount() {
    console.log("Component Did Mount VideoPage");
    this.listenForItems(this.itemsRef);
  }

  render() {
    console.log("Rendering video component...")
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.header}>My Videos</Text>
          {this.state.videos.map((video, index) => 
            <Text key={index}>{video}</Text>)}
        </View>
        <Footer navigation={this.props.navigation}/>
      </View>
  )}
}

const styles = StyleSheet.create({
  container: {
      padding: 10,         // start below status bar
      backgroundColor: '#FFF'
  },
  header: {
    fontSize: 20,
    fontFamily: 'AudiType-ExtendedBold',
    paddingBottom: 10,
    color: '#000',
    paddingLeft: 5
  },
});