import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AuthScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
      };
    render() {
        console.log('auth')
        return (
            <View>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
            </View>
        );
    }
}

export default AuthScreen;
