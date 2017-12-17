import React  from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {fetchTopRepos} from '../actions/actions'

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native'
import {ListItem, Subheader, Toolbar} from 'react-native-material-ui';

import {COLOR, ThemeProvider} from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

class TopRepos extends React.PureComponent {

    componentDidMount() {
        this.props.fetchTopRepos();
    }

    renderList = () => {
        const { repos } = this.props.topRepos;
        if (repos) {
             return repos.map(item => {
                 <ListItem
                     divider
                     centerElement="Center element as a text"
                     onPress={() => {
                     }}
                 />
             })
        } else {
            return null
        }
    };


    render() {
        let list;
        const { repos } = this.props.topRepos;
        console.log('repos', repos);
        if (repos) {
            list = repos.map(item => {
                <ListItem
                    divider
                    centerElement="Center element as a text"
                    onPress={() => {
                    }}
                />
            })
        } else {
            list = null;
        }

        return (
            <ThemeProvider uiTheme={uiTheme}>
                <ScrollView>
                    {list}
                </ScrollView>
            </ThemeProvider>

        )
    }
}

{/*<View style={styles.page}>*/
}
{/*<FlatList*/
}
{/*data={this.props.topRepos.repos}*/
}
{/*renderItem={({item}) => <Text onPress={() => Actions.DetailedRepo()}>{item.name}</Text>}*/
}
{/*/>*/
}
{/*</View>*/
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