import React, { Component } from 'react';
import { 
    AppState,
    Dimensions,
    Image,
    StyleSheet,
    Text, 
    View 
} from 'react-native';
import Footer from './Footer';
import PushNotification from 'react-native-push-notification';
import { db } from './service/firebase';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          notifications: {}
        }
        this.itemsRef = db.ref('notifications/');
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
        console.log('DidMount AppState: ', AppState);
    }
    
    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
        console.log('WillMount AppState: ', AppState);
    };

    handleAppStateChange = (appState) => {
        if (appState === 'background') {
            this.itemsRef.on("child_added", function(snapshot) {
                var newPost = snapshot.val().message;
                if (newPost) { 
                    console.log("snapshot: " + newPost.timestamp);
                    PushNotification.localNotificationSchedule({
                        title: 'OctoPost Notification',
                        message: newPost.timestamp + ' ' + newPost.notification, 
                        playSound: true,
                        userInfo: { id: '123' },
                        date: new Date(Date.now() + (1000)) // in 1 second
                    });
                }
            });
        }
    };

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.header}>MyAudi(os) App</Text>
                    <Image source={require('../img/myaudihp.png')}
                        style={styles.image}/>
                </View>
                <Footer navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,         // start below status bar
        backgroundColor: '#FFF'
    },
    header: {
        fontSize: 20,
        fontFamily: 'AudiType-ExtendedBold',
        paddingLeft: 20,
        paddingBottom: 10,
        color: '#000',
    },
    image: {
        width: Dimensions.get('window').width,
        height: 590
    }
  });