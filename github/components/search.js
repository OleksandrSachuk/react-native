import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = { searchInput: 'Search' };
    }

    render() {
        return (
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(searchInput) => this.setState({searchInput})}
                value={this.state.searchInput}
            />
        );
    }
}

