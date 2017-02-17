'use strict'
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Moment from 'moment';
import DayItem from './DayItem';

export default class Weekdays extends Component {
    render() {
        return (
            <View style={styles.container}>
        {this.days()}
    </View>
    )
    }

    days() {
        let daysItems = [];
        for (let i = 1; i < 8; i++){
            let day = Moment().add(i,'days').format('dddd');
            daysItems.push(
            <DayItem day={day} daysUntil={i} />
        )
        }
        return daysItems;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('weekDays', () => Weekdays);
