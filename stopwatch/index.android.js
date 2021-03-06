import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, AppRegistry} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

export default  class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeElapsed: null,
            running: false,
            startTime: null,
            laps: []
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.timerWrapper}>
                        <Text style={styles.timer}>
                            {formatTime(this.state.timeElapsed)}
                        </Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        {this.startStopButton()}
                        {this.lapButton()}
                    </View>
                </View>

                <View style={styles.footer}>
                    {this.laps()}
                </View>
            </View>)
    }

    laps() {
        return this.state.laps.map(function (time, index) {
            return <View style={styles.lap}>
                <Text style={styles.lapText}>
                    Lap #{index + 1}
                </Text>
                <Text style={styles.lapText}>
                    {formatTime(time)}
                </Text>
            </View>
        });
    }

    startStopButton() {
        let style = this.state.running ? styles.stopButton : styles.startButton;

        return <TouchableHighlight
            underlayColor="gray"
            onPress={this.handleStartPress.bind(this)}
            style={[styles.button, style]}
        >
            <Text>
                {this.state.running ? 'Stop' : 'Start'}
            </Text>
        </TouchableHighlight>
    }

    lapButton() {
        return <TouchableHighlight
            style={styles.button}
            underlayColor="gray"
            onPress={this.handleLapPress.bind(this)}
        >
            <Text>
                Lap
            </Text>
        </TouchableHighlight>
    }

    handleLapPress() {
        let lap = this.state.timeElapsed;

        this.setState({
            startTime: new Date(),
            laps: this.state.laps.concat([lap])
        });
    }

    handleStartPress() {
        if (this.state.running) {
            clearInterval(this.interval);
            this.setState({running: false});
            return
        }

        this.setState({startTime: new Date()});

        this.interval = setInterval(() => {
            this.setState({
                timeElapsed: new Date() - this.state.startTime,
                running: true
            });
        }, 30);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, // Fill the entire the screen
        alignItems: 'stretch'
    },
    header: { // Yellow
        flex: 1
    },
    footer: { // Blue
        flex: 1
    },
    timerWrapper: { // Red
        flex: 5, // takes up 5/8ths of the available space
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: { // Green
        flex: 3, // takes up 3/8ths of the available space
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    timer: {
        fontSize: 60
    },
    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButton: {
        borderColor: '#00CC00'
    },
    stopButton: {
        borderColor: '#CC0000'
    },
    lap: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    lapText: {
        fontSize: 30
    }
});
AppRegistry.registerComponent('stopwatch', () => Stopwatch);