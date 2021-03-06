import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Parse from 'parse/react-native';
import Button from '../common/button';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
            errorMessage: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>
                <Text style={styles.label}>Username:</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={(text) => this.setState({username: text})}
                />

                <Text style={styles.label}>Password:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}
                />

                <Text style={styles.label}>Confirm Password:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    value={this.state.passwordConfirmation}
                    onChangeText={(text) => this.setState({passwordConfirmation: text})}
                />

                <Text style={styles.label}>{this.state.errorMessage}</Text>

                <Button text={'Signup'} onPress={this.onSignUpPress.bind(this)}/>
                <Button text={'I have an account...'} onPress={this.onSigninPress.bind(this)}/>
            </View>
        )
    }
    onSignUpPress(){
        if (this.state.password !== this.state.passwordConfirmation){
            return this.setState({errorMessage: 'Your password do not match'})
        }
        let user = new Parse.User();
        user.set('username', this.state.username);
        user.set('password', this.state.password);
        user.signUp(null, {
             success: (user) = {this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}])},
             error: (user,error) =>{this.setState({errorMessage: error.message})}
        });

    }
    onSigninPress(){
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    input: {
        padding: 4,
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    },
    label: {
        fontSize: 18
    }
});