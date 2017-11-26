import React  from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {fetchTopRepos} from '../actions/actions'
import { ListItem, Subheader, Toolbar } from '../react-native-material-ui/src';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ScrollView
} from 'react-native'

import { ListItem, Subheader, Toolbar } from 'react-native-material-ui';

class TopRepos extends React.PureComponent {

    componentDidMount() {
this.props.fetchTopRepos();
    }

    render() {
        return (
            <ScrollView style={styles.page}>
                <FlatList
                    data={this.props.topRepos.repos}
                    renderItem={({item}) => <ListItem
                        divider
                        centerElement="Center element as a text"
                        onPress={() => {}}/>
                />
                {/*<Text*/}
                    {/*style={styles.text}*/}
                    {/*onPress={() => Actions.DetailedRepo()}*/}
                {/*>*/}
                    {/*DetailedRepo*/}
                {/*</Text>*/}
            </ScrollView>
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
