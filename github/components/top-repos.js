import React  from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {fetchTopRepos} from '../actions/actions'

import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native'
import { ListItem, Subheader, Toolbar } from '../react-native-material-ui/src';

class TopRepos extends React.PureComponent {

    componentDidMount() {
this.props.fetchTopRepos();
    }

    render() {
        return (
            <View style={styles.page}>
                <FlatList
                    data={this.props.topRepos.repos}
                    renderItem={({item}) => <Text onPress={() => Actions.DetailedRepo()}>{item.name}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black'
    }
});

const mapStateToProps = state => {
    return {
        topRepos: state.topRepos
    };
};

const mapDispatchToProps = {
    fetchTopRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(TopRepos);
