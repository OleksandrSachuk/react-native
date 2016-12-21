import React, { Component } from 'react';
import {TextInput, StyleSheet, Navigator} from 'react-native';
import Parse from 'parse/react-native';
import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';
import Tweets from './components/tweets/tweets';

let ROUTES = {
    signin: SignIn,
    signup: SignUp,
    tweets: Tweets
};
export default class Authentication extends Component{
    componentWillMount(){
        Parse.initialize('myAppId','master')
    }
    renderScene(route, navigator){
        let ComponentItem = ROUTES[route.name];
        return <ComponentItem route={route} navigator={navigator}/>
    }
    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{name: 'signin'}}
                renderScene={this.renderScene}
                configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});