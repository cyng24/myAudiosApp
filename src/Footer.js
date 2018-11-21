import React, { Component } from 'react';
import { 
    Dimensions,
    StyleSheet, 
    Text,
    TouchableOpacity,
    View
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Footer extends Component {
  render() {
      return (
        <View style={styles.footer}>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('Livestream')}
            >
                <Text style={styles.button}>Livestream</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('Videos')}
            >
                <Text style={styles.button}>My Videos</Text>
            </TouchableOpacity>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    footer : {
        flexDirection: 'row',
        alignContent: 'center',
        position: 'absolute',
        top: height/1.3
    },
    buttonContainer: {
        backgroundColor: '#FFF',
        position: 'relative',
        padding: width/35
      },
      button: {
        color: '#FFF',
        backgroundColor: '#000',
        paddingVertical: height/75,
        paddingHorizontal: width/8.25,
        fontWeight: 'bold'
      },
  });