import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
      };
    render() {
        console.log('welcome')
        return (
            <View style={styles.container}>
                <Text>asdasd</Text>
                <Text>WelcomeScreen</Text>
                <Text>WelcomeScreen</Text>
                <Text>WelcomeScreen</Text>
            </View>
        );
    }
}

const styles = {
    container: {
    },
  };
  

export default WelcomeScreen;
