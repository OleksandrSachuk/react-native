'use strict'
import React, {Component} from 'react';
import {Text} from 'react-native';

export default class DayItem extends Component {
    render() {
        return (
            <Text style={this.style()}>
                {this.props.day}
            </Text>
        );
    }

    style() {
        return {
            color: this.color(),
            // fontWeight: this.fontWeight(),
            fontSize: this.fontSize(),
            lineHeight: this.lineHeight()
        }
    }

    color() {
        let opacity = 1 / this.props.daysUntil;
        return 'rgba(0,0,0,' + opacity + ')';
    }

    // fontWeight(){
    //     let weight = 7 - this.props.daysUntil;
    //     return weight * 100;
    // }

    fontSize() {
        return 60 - 6 * this.props.daysUntil;
    }

    lineHeight(){
        return 70 - 4 * this.props.daysUntil;
    }
};